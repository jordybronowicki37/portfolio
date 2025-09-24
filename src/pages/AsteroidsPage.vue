<script setup lang="ts">
import {computed, onBeforeUnmount, onMounted, reactive, ref} from 'vue'

// --- Config ---
let WIDTH = 800
let HEIGHT = 600
const ASTEROID_AMOUNT_MIN = 6
const ASTEROID_AMOUNT_START = 6
const ASTEROID_JAGGEDNESS = 0.4
const ASTEROID_SHRINK_RATE = 0.6
const ASTEROID_SIZE_MAX = 60
const ASTEROID_SIZE_MIN = 20
const ASTEROID_SPLIT_SIZE_MIN = 30
const ASTEROID_SPEED = 0.6
const FRICTION = 0.98
const GRID_SIZE = 40
const LASER_COOLDOWN = 12 // frames
const LASER_LIFETIME = 60 // frames
const LASER_SIZE = 3
const LASER_SPEED = 6
const LIVES_MAX = 3
const SHIP_INVULNERABLE = 120
const SHIP_SIZE = 12

// Types
enum Status {
  PAUSED,
  PLAYING,
  GAMEOVER,
  NOT_STARTED
}
type GameState = {
  width: number
  height: number
  keys: Set<string>
  score: number
  lives: number
  lastShot: number
  frame: number
  status: Status
}

type EntityPositioning = {
  x: number
  y: number
  vx: number
  vy: number
  size: number
}

type Ship = {
  rotation: -1 | 0 | 1
  angle: number
  thrusting: boolean
  dead: boolean
  blink: number
  invulnerable: number
} & EntityPositioning

type Laser = {
  life: number
} & EntityPositioning

type Asteroid = {
  offsets: number[]
} & EntityPositioning

// --- Refs / State ---
const canvas = ref<HTMLCanvasElement>()
const ctx = ref<CanvasRenderingContext2D>()
let resizeObserver: ResizeObserver | null = null;
let rafId: number | null = null
const ship = reactive<Ship>(createShip())
const asteroids = reactive<Asteroid[]>([])
const lasers = reactive<Laser[]>([])
const state = reactive<GameState>({
  width: WIDTH,
  height: HEIGHT,
  keys: new Set(),
  score: 0,
  lives: 3,
  lastShot: 0,
  frame: 0,
  status: Status.NOT_STARTED
})

const showTouchControls = computed(() => {
  return 'ontouchstart' in window
})

// --- Utility functions ---
function rand(min: number, max: number) {
  return Math.random() * (max - min) + min
}
function dist(a: EntityPositioning, b: EntityPositioning) {
  const dx = a.x - b.x
  const dy = a.y - b.y
  return Math.sqrt(dx*dx + dy*dy)
}

// --- Entities ---
function createShip(): Ship {
  return {
    x: WIDTH / 2,
    y: HEIGHT / 2,
    size: SHIP_SIZE,
    angle: -Math.PI / 2,
    thrusting: false,
    rotation: 0, // -1 left, 1 right
    vx: 0,
    vy: 0,
    dead: false,
    blink: 0,
    invulnerable: SHIP_INVULNERABLE,
  }
}
function createAsteroid(x: number, y: number, size?: number): Asteroid {
  if (!size) size = rand(ASTEROID_SIZE_MIN, ASTEROID_SIZE_MAX)
  const speed = ASTEROID_SPEED * (1 + Math.random())
  const angle = rand(0, Math.PI * 2)
  const vertices = Math.floor(rand(7, 12))
  const offsets = Array.from({length: vertices}, () => rand(1 - ASTEROID_JAGGEDNESS, 1 + ASTEROID_JAGGEDNESS))
  return {
    x,
    y,
    size,
    vx: Math.cos(angle) * speed,
    vy: Math.sin(angle) * speed,
    offsets
  }
}
function createLaser(ship: Ship): Laser {
  const ax = Math.cos(ship.angle) * ship.size
  const ay = Math.sin(ship.angle) * ship.size
  return {
    x: ship.x + ax,
    y: ship.y + ay,
    vx: Math.cos(ship.angle) * LASER_SPEED + ship.vx,
    vy: Math.sin(ship.angle) * LASER_SPEED + ship.vy,
    size: LASER_SIZE,
    life: LASER_LIFETIME,
  }
}
function spawnAsteroids(count = 5) {
  for (let i = 0; i < count; i++) {
    let x, y
    // spawn away from ship
    do {
      x = rand(0, WIDTH)
      y = rand(0, HEIGHT)
    } while (Math.hypot(ship.x - x, ship.y - y) < 100)
    asteroids.push(createAsteroid(x, y))
  }
}
function splitAsteroid(idx: number) {
  const asteroid = asteroids[idx]
  if (asteroid.size > ASTEROID_SPLIT_SIZE_MIN) {
    // create two smaller
    for (let i = 0; i < 2; i++) {
      const child = createAsteroid(asteroid.x, asteroid.y, asteroid.size * ASTEROID_SHRINK_RATE)
      asteroids.push(child)
    }
  }
  asteroids.splice(idx, 1)
  state.score += Math.round(ASTEROID_SIZE_MAX / asteroid.size)
}

// --- Input ---
function keydown(event: KeyboardEvent) {
  const key = event.key.toLowerCase()
  state.keys.add(key)
  if (key === 'p') {
    if (state.status === Status.PLAYING) {
      state.status = Status.PAUSED
    } else if (state.status === Status.PAUSED) {
      state.status = Status.PLAYING
    }
  }
  if (key === 'r') resetGame()
}
function keyup(event: KeyboardEvent) {
  state.keys.delete(event.key.toLowerCase())
}

// Touch control helpers
function startThrust() {
  ship.thrusting = true
}
function stopThrust() {
  ship.thrusting = false
}
function startRotateLeft() {
  ship.rotation = -1
}
function startRotateRight() {
  ship.rotation = 1
}
function stopRotate() {
  ship.rotation = 0
}
function shoot() {
  if (!ship.dead && state.lastShot <= 0 && state.status === Status.PLAYING) {
    lasers.push(createLaser(ship))
    state.lastShot = LASER_COOLDOWN
  }
}

// --- Collision ---
function wrap(entity: EntityPositioning) {
  if (entity.x < 0) entity.x += state.width
  if (entity.x > state.width) entity.x -= state.width
  if (entity.y < 0) entity.y += state.height
  if (entity.y > state.height) entity.y -= state.height
}

function detectCollisions() {
  // lasers vs asteroids
  for (let i = lasers.length - 1; i >= 0; i--) {
    const laser = lasers[i]
    for (let j = asteroids.length - 1; j >= 0; j--) {
      const asteroid = asteroids[j]
      if (dist(laser, asteroid) < asteroid.size) {
        lasers.splice(i, 1)
        splitAsteroid(j)
        break
      }
    }
  }
  // ship vs asteroids
  if (ship.invulnerable <= 0 && !ship.dead) {
    for (let i = asteroids.length - 1; i >= 0; i--) {
      const dis = dist(ship, asteroids[i])
      if (dis < asteroids[i].size + ship.size) {
        // hit
        ship.dead = true
        state.lives -= 1
        if (state.lives <= 0) {
          state.status = Status.GAMEOVER
        } else {
          // respawn after delay
          setTimeout(() => {
            Object.assign(ship, createShip())
            ship.invulnerable = SHIP_INVULNERABLE
            ship.dead = false
          }, 900)
        }
        break
      }
    }
  }
}

// --- Physics & update loop ---
function update() {
  if ([Status.GAMEOVER, Status.PAUSED].includes(state.status)) return
  state.frame++
  // input
  ship.rotation = 0
  ship.thrusting = state.keys.has('arrowup') || state.keys.has('w')
  if (state.keys.has('arrowleft') || state.keys.has('a')) startRotateLeft()
  if (state.keys.has('arrowright') || state.keys.has('d')) startRotateRight()
  if ((state.keys.has(' ') || state.keys.has('space')) && state.lastShot <= 0) shoot()

  // rotation
  ship.angle += ship.rotation * 0.08
  // thrust
  if (ship.thrusting) {
    ship.vx += Math.cos(ship.angle) * 0.12
    ship.vy += Math.sin(ship.angle) * 0.12
  }
  // friction
  ship.vx *= FRICTION
  ship.vy *= FRICTION
  ship.x += ship.vx
  ship.y += ship.vy
  wrap(ship)
  if (ship.invulnerable > 0) ship.invulnerable -= 1

  // lasers
  for (let i = lasers.length - 1; i >= 0; i--) {
    const laser = lasers[i]
    laser.x += laser.vx
    laser.y += laser.vy
    laser.life--
    wrap(laser)
    if (laser.life <= 0) lasers.splice(i, 1)
  }
  if (state.lastShot > 0) state.lastShot--

  // asteroids
  for (let asteroid of asteroids) {
    asteroid.x += asteroid.vx
    asteroid.y += asteroid.vy
    wrap(asteroid)
  }

  detectCollisions()

  // add level progression: if none left, spawn more
  if (asteroids.length === 0) {
    spawnAsteroids(ASTEROID_AMOUNT_MIN + Math.floor(state.score / 40))
  }
}

// --- Rendering ---
function drawGrid() {
  if (!ctx.value) return
  ctx.value.globalAlpha = 0.3
  ctx.value.strokeStyle = 'gray'
  for (let x = 0; x < state.width; x += GRID_SIZE) {
    ctx.value.beginPath()
    ctx.value.moveTo(x, 0)
    ctx.value.lineTo(x, state.height)
    ctx.value.stroke()
  }
  for (let y = 0; y < state.height; y += GRID_SIZE) {
    ctx.value.beginPath()
    ctx.value.moveTo(0, y)
    ctx.value.lineTo(state.width, y)
    ctx.value.stroke()
  }
  ctx.value.restore()
}

function drawShip() {
  if (!ctx.value) return
  if (!ship) return
  ctx.value.save()
  ctx.value.translate(ship.x, ship.y)
  ctx.value.rotate(ship.angle)
  // ship body
  ctx.value.beginPath()
  ctx.value.moveTo(ship.size, 0)
  ctx.value.lineTo(-ship.size * 0.6, ship.size * 0.8)
  ctx.value.lineTo(-ship.size * 0.6, -ship.size * 0.8)
  ctx.value.closePath()
  if (ship.invulnerable % 20 > 10) ctx.value.fillStyle = '#3F63B5'
  else ctx.value.fillStyle = '#1418B5'
  ctx.value.fill()
  // thrust flame
  if (ship.thrusting) {
    ctx.value.beginPath()
    ctx.value.moveTo(-ship.size * 0.6, 0)
    ctx.value.lineTo(-ship.size - Math.random() * 6, -ship.size / 3)
    ctx.value.lineTo(-ship.size - Math.random() * 6, ship.size / 3)
    ctx.value.closePath()
    ctx.value.fillStyle = 'orange'
    ctx.value.fill()
  }
  ctx.value.restore()
}

function drawAsteroid(asteroid: Asteroid) {
  if (!ctx.value) return
  ctx.value.save()
  ctx.value.translate(asteroid.x, asteroid.y)
  ctx.value.beginPath()
  const vertices = asteroid.offsets.length
  for (let i = 0; i < vertices; i++) {
    const ang = (Math.PI * 2 / vertices) * i
    const rad = asteroid.size * asteroid.offsets[i]
    const x = Math.cos(ang) * rad
    const y = Math.sin(ang) * rad
    if (i === 0) ctx.value.moveTo(x, y)
    else ctx.value.lineTo(x, y)
  }
  ctx.value.closePath()
  ctx.value.fillStyle = 'white'
  ctx.value.fill()
  ctx.value.restore()
}

function drawLaser(laser: Laser) {
  if (!ctx.value) return
  ctx.value.beginPath()
  ctx.value.arc(laser.x, laser.y, laser.size / LASER_LIFETIME * laser.life, 0, Math.PI * 2)
  ctx.value.fillStyle = 'red'
  ctx.value.fill()
}

function render() {
  if (!ctx.value) return
  ctx.value.clearRect(0, 0, state.width, state.height)
  ctx.value.save()
  drawGrid()
  for (let a of asteroids) drawAsteroid(a)
  for (let l of lasers) drawLaser(l)
  if (!ship.dead) drawShip()
}

// --- Game loop ---
function loop() {
  update()
  render()
  rafId = requestAnimationFrame(loop)
}

function resizeCanvas() {
  if (!canvas.value || !ctx.value) return
  const scale = 1
  const w = Math.floor(WIDTH * scale)
  const h = Math.floor(HEIGHT * scale)
  canvas.value.width = w
  canvas.value.height = h
  state.width = w
  state.height = h
  // scale context so game coordinates map to base resolution
  ctx.value.setTransform(w / WIDTH, 0, 0, h / HEIGHT, 0, 0)
}

function setupCanvas() {
  if (!canvas.value) return
  ctx.value = canvas.value.getContext('2d') as CanvasRenderingContext2D
  resizeCanvas()
}

// --- Game lifecycle ---
function startGame() {
  state.status = Status.PLAYING
  state.score = 0
  state.lives = LIVES_MAX
  lasers.splice(0, lasers.length)
  asteroids.splice(0, asteroids.length)
  Object.assign(ship, createShip())
  spawnAsteroids(ASTEROID_AMOUNT_START)
  if (rafId) cancelAnimationFrame(rafId)
  rafId = requestAnimationFrame(loop)
}

function resetGame() {
  startGame()
}

onMounted(() => {
  if (!canvas.value) return
  setupCanvas()
  window.addEventListener('keydown', keydown)
  window.addEventListener('keyup', keyup)
  canvas.value.addEventListener('click', () => {
    if (!canvas.value) return
    canvas.value.focus()
  })
  // allow click / tap to thrust
  canvas.value.addEventListener('pointerdown', () => {
    ship.thrusting = true
  })
  canvas.value.addEventListener('pointerup', () => {
    ship.thrusting = false
  })
  resizeObserver = new ResizeObserver((entries) => {
    for (let entry of entries) {
      WIDTH = entry.contentRect.width
      HEIGHT = entry.contentRect.height
      resizeCanvas()
    }
  });

  if (canvas.value) {
    resizeObserver.observe(canvas.value);
  }
})
onBeforeUnmount(() => {
  window.removeEventListener('keydown', keydown)
  window.removeEventListener('keyup', keyup)
  if (rafId) cancelAnimationFrame(rafId)
  if (resizeObserver && canvas.value) {
    resizeObserver.unobserve(canvas.value);
    resizeObserver.disconnect();
  }
})
</script>

<template>
  <div class="asteroids-wrap">
    <canvas
      ref="canvas"
      tabindex="0"
    />
    <div class="hud">
      <div>Score: {{ state.score }}</div>
      <div>Lives: {{ state.lives }}</div>
      <div
        v-if="state.status === Status.PAUSED"
        class="overlay"
      >
        PAUSED — press P to resume
      </div>
      <div
        v-if="state.status === Status.GAMEOVER"
        class="overlay"
      >
        GAME OVER — press R to restart
      </div>
      <div
        v-if="state.status === Status.NOT_STARTED"
        class="overlay"
      >
        Press R to start game
      </div>
    </div>
    <div
      v-if="showTouchControls"
      class="touch-controls"
    >
      <button
        @touchstart.prevent="startThrust"
        @touchend.prevent="stopThrust"
      >
        Thrust
      </button>
      <button
        @touchstart.prevent="startRotateLeft"
        @touchend.prevent="stopRotate"
      >
        ◀
      </button>
      <button
        @touchstart.prevent="startRotateRight"
        @touchend.prevent="stopRotate"
      >
        ▶
      </button>
      <button @touchstart.prevent="shoot">
        Fire
      </button>
    </div>
  </div>
</template>

<style scoped>
.asteroids-wrap {
  width: 100%;
  height: 100%;
  position: relative;
  background: radial-gradient(ellipse at center, #010114 0%, #000 60%);
  overflow: hidden;
}
canvas {
  display: block;
  width: 100%;
  height: 100%;
  background: transparent;
  outline: none;
}
.hud {
  width: 100%;
  height: 100%;
  position: absolute;
  padding: 1rem;
  top: 0;
  left: 0;
  display: flex;
  gap: 1rem;
  z-index: 10;
}
.hud div {
  color: #fff;
}
.overlay {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0,0,0,0.6);
  padding: 18px 28px;
  border-radius: 8px;
  font-size: 20px;
  user-select: none;
}
.touch-controls {
  position: absolute;
  right: 12px;
  bottom: 12px;
  display: flex;
  gap: 8px;
  z-index: 12;
}
.touch-controls button {
  padding: 10px 12px;
  border-radius: 8px;
  border: none;
  background: rgba(255,255,255,0.06);
  color: #fff;
  font-weight: 600;
}
</style>
