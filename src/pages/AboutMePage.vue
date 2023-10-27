<script setup lang="ts">
import Editor from "../components/Editor.vue";
import EditorLine from "../components/EditorLine.vue";
</script>

<template>
  <Editor>
    <EditorLine :indentation="0" />
    <EditorLine :indentation="0">
      <h2>Jordy Bronowicki</h2>
    </EditorLine>
    <EditorLine :indentation="1">
      <h3>Full-stack software developer</h3>
    </EditorLine>

    <EditorLine :indentation="1" />
    <EditorLine :indentation="2">
      <div class="text-container-with-profile-pic">
        <section>
          Hey there! I'm Jordy Bronowicki, a passionate back-end software developer with a flair for turning ideas into
          functional and efficient code. My journey into the world of programming started with small Python programs,
          but it was during my Bachelor's degree in ICT at the University of Applied Sciences in Utrecht that I truly
          fell in love with the art of building digital solutions.
        </section>
        <img
          src="/pixel-user.png"
          alt="User profile picture"
        >
      </div>
    </EditorLine>

    <EditorLine :indentation="1" />
    <EditorLine :indentation="1" />
    <EditorLine :indentation="1">
      <h3>My work</h3>
    </EditorLine>
    <EditorLine :indentation="2">
      <section>
        My work is not just a profession; it's a playground of endless possibilities. I have a natural curiosity that
        drives me to experiment with new technologies and create exciting projects. Whether it's exploring the latest
        programming language or tinkering with cutting-edge tools, I find joy in pushing the boundaries of what's possible.
      </section>
    </EditorLine>

    <EditorLine :indentation="1" />
    <EditorLine :indentation="1" />
    <EditorLine :indentation="1">
      <h3>What sets me apart</h3>
    </EditorLine>
    <EditorLine :indentation="2">
      <section>
        What sets me apart is my ability to absorb knowledge quickly. This allows me to efficiently tackle challenges
        and deliver high-quality results. Understanding the core of a problem before diving into development is my
        secret sauce for fluent and precise coding.
      </section>
    </EditorLine>

    <EditorLine :indentation="1" />
    <EditorLine :indentation="1" />
    <EditorLine :indentation="1">
      <h3>My proudest achievement</h3>
    </EditorLine>
    <EditorLine :indentation="2">
      <section>
        One of my proudest accomplishments is the "Production Calculator" project. This powerful tool empowers users
        to calculate the production throughput of factories or entire production chains. With a user-friendly
        flowchart-based interface, users can effortlessly drag and drop nodes and create connections to optimize
        their production processes.
      </section>
    </EditorLine>

    <EditorLine :indentation="1" />
    <EditorLine :indentation="1" />
    <EditorLine :indentation="1">
      <h3>Looking ahead</h3>
    </EditorLine>
    <EditorLine :indentation="2">
      <section>
        Looking ahead, my vision is to simplify people's lives through technology. I want to develop handy,
        user-friendly tools and automate repetitive tasks to make daily routines more manageable.
      </section>
    </EditorLine>

    <EditorLine :indentation="1" />
    <EditorLine :indentation="1" />
    <EditorLine :indentation="1">
      <h3>Thank you</h3>
    </EditorLine>
    <EditorLine :indentation="2">
      <section>
        Thank you for visiting my portfolio website, and I hope you enjoy exploring my projects and accomplishments.
        If you have any questions or potential collaboration ideas, feel free to reach out. Let's embark on this exciting
        journey together!
      </section>
    </EditorLine>

    <EditorLine :indentation="1" />
    <EditorLine :indentation="0" />
  </Editor>
</template>

<style scoped>
.text-container-with-profile-pic {
  display: flex;
  align-items: center;
}
.text-container-with-profile-pic img {
  border-radius: 1rem;
  margin: 1rem;
  height: 10rem;
  width: 10rem;
}
</style>