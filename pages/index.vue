<template>
  <div>
    <post-list :posts="pages" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Page',
  async asyncData({ $content }) {
    const pages = await $content('').fetch()
    return { pages }
  },
})
</script>
