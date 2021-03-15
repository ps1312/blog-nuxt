<template>
  <div class="antialiased">
    <base-nav-bar />
    <div class="px-3 mx-auto my-24 max-w-xl lg:max-w-3xl">
      <Nuxt />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'DefaultLayout',
  head() {
    return {
      title: 'pssr.dev',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Personal blog for sharing my challenges in development.',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: '/logo.png',
        },
        { property: 'og:image:width', content: '740' },
        { property: 'og:image:height', content: '300' },
      ],
    }
  },
})
</script>
