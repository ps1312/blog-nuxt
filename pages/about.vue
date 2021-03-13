<template>
  <div class="space-y-8">
    <div>
      <span class="text-4xl font-bold text-gray-800">
        A word about this blog 📄
      </span>
      <p class="leading-8 mt-4 text-lg text-gray-800">
        This blog is primarily being build by me to practice and learn more
        about Vue.js and deepen my knowledge in CSS and HTML. I'm also
        documenting the development in my
        <a
          class="font-bold border-b-2 border-indigo-600 text-indigo-600"
          target="_blank"
          href="https://medium.com/@paulossr"
        >
          medium profile.
        </a>
      </p>
    </div>

    <div>
      <span class="text-4xl font-bold text-gray-800">And about me 🧑🏻‍💻</span>

      <p class="leading-8 mt-4 text-lg text-gray-800">
        I've been working with front-end development since 2018 and have worked
        with:
      </p>

      <ul class="list-disc ml-16 text-lg my-6">
        <li>ReactJS</li>
        <li>React Native</li>
        <li>Vue.js</li>
      </ul>

      <span class="leading-8 mt-4 text-lg text-gray-800">
        But I love to write some code in:
      </span>

      <ul class="list-disc ml-16 text-lg my-6">
        <li>iOS (Swift)</li>
        <li>NodeJS</li>
      </ul>

      <p class="leading-8 mt-4 text-lg text-gray-800">
        I'm really trying to apply TDD in all places when its reasonable,
        currently in Vue.js components. The reason is that, for me, it gives me
        more confidence on shipping my code. I can also add other benefits such
        as that tests gives a documentation on how the software should work,
        they make refactoring a breeze and you can actualy develop faster, of
        course, after lots and lots of practice
        <strong>(I'm currently here)</strong>
        .
      </p>

      <p class="leading-8 mt-4 text-lg text-gray-800">
        I also love to study about software architecture, draw diagrams of
        dependencies and make the code as decoupled as possible while also not
        making it to maintain or change as it should be
        <strong><i>soft</i></strong>
        .
      </p>

      <p class="leading-8 mt-4 text-lg text-gray-800">
        I have a personal preference for statically typed languages (like
        <strong>Typescript and Swift</strong>
        ) but most of my development time has been on
        <strong>Javascript</strong>
        .
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'PageAbout',
})
</script>
