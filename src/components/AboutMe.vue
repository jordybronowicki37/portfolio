<script setup lang="ts">

</script>

<template>
  <div class="about-me">
    <div class="card-title">
      <div>
        <h1>Jordy Bronowicki</h1>
        <h2>Back-end software developer</h2>
      </div>

      <img
          src="https://media.licdn.com/dms/image/C5603AQGt90O-eXPm0Q/profile-displayphoto-shrink_800_800/0/1651765981884?e=1695859200&v=beta&t=-E5sF5gDe64ESKqER5e1XByDNUYCMODk6aaYyS04pCA"
          alt="Profile picture">
    </div>

    <div class="card-content">
      <section>
        Hey there! I'm Jordy Bronowicki, a passionate back-end software developer with a flair for turning ideas into
        functional and efficient code. My journey into the world of programming started with small Python programs,
        but it was during my Bachelor's degree in ICT at the University of Applied Sciences in Utrecht that I truly
        fell in love with the art of building digital solutions.
      </section>

      <section>
        My work is not just a profession; it's a playground of endless possibilities. I have a natural curiosity that
        drives me to experiment with new technologies and create exciting projects. Whether it's exploring the latest
        programming language or tinkering with cutting-edge tools, I find joy in pushing the boundaries of what's possible.
      </section>

      <section>
        What sets me apart is my ability to absorb knowledge quickly. This allows me to efficiently tackle challenges
        and deliver high-quality results. Understanding the core of a problem before diving into development is my
        secret sauce for fluent and precise coding.
      </section>

      <section>
        One of my proudest accomplishments is the "Production Calculator" project. This powerful tool empowers users
        to calculate the production throughput of factories or entire production chains. With a user-friendly
        flowchart-based interface, users can effortlessly drag and drop nodes and create connections to optimize
        their production processes.
      </section>

      <section>
        Looking ahead, my vision is to simplify people's lives through technology. I want to develop handy,
        user-friendly tools and automate repetitive tasks to make daily routines more manageable.
      </section>

      <section>
        Thank you for visiting my portfolio website, and I hope you enjoy exploring my projects and accomplishments.
        If you have any questions or potential collaboration ideas, feel free to reach out. Let's embark on this exciting
        journey together!
      </section>
    </div>
  </div>
</template>

<style scoped>
.about-me {
  max-width: 80rem;
  margin: 5rem;
  background: #333;
  border-radius: 2rem;
  overflow: hidden;
  align-self: center;
}

.card-title {
  display: flex;
  justify-content: space-between;
}

.card-title>div {
  padding: 2rem;
  align-self: center;
}

.card-title h1 {
  margin: 0;
  line-height: 1;
}

.card-title h2 {
  margin: 0;
  font-size: larger;
  color: #999;
}

.card-title img {
  width: 8rem;
  height: 8rem;
  margin: 1rem;
  border-radius: 10rem;
}

.card-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
}
</style>