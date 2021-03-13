<template>
  <nav class="fixed top-0 w-screen p-4 bg-indigo-500 z-10">
    <div class="flex items-end justify-between text-gray-800 lg:hidden">
      <nuxt-link to="/">
        <span class="text-3xl font-bold text-gray-100">pssr.dev</span>
      </nuxt-link>

      <base-dropdown class="lg:hidden" />
    </div>

    <div class="max-w-4xl mx-auto items-center hidden lg:flex">
      <nuxt-link to="/">
        <span
          class="text-3xl font-bold text-gray-100 rounded px-2 hover:bg-indigo-400"
        >
          pssr.dev
        </span>
      </nuxt-link>

      <div class="inline-flex flex-grow">
        <div class="inline-flex flex-grow">
          <nuxt-link
            class="text-lg font-semibold ml-8 text-white font-semibold rounded px-2 hover:bg-indigo-400"
            to="/"
          >
            All posts
          </nuxt-link>
          <nuxt-link
            class="text-lg font-semibold ml-8 text-white font-semibold rounded px-2 hover:bg-indigo-400"
            to="/about"
          >
            About
          </nuxt-link>
          <a
            download="curriculo_pssr.pdf"
            href="/curriculo_pssr.pdf"
            class="text-lg font-semibold ml-8 text-white font-semibold rounded px-2 hover:bg-indigo-400"
          >
            Resume
          </a>
        </div>
        <div class="inline-flex">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/pssr"
          >
            <base-icon
              class="w-6 h-6 fill-current text-white rounded hover:bg-indigo-400"
              icon="linkedin"
            />
          </a>
          <a
            class="ml-4"
            target="_blank"
            rel="noopener noreferrer"
            href="https:www.github.com/ps1312"
          >
            <base-icon
              class="w-6 h-6 fill-current text-white rounded hover:bg-indigo-400"
              icon="github"
            />
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'BaseNavBar',
})
</script>
