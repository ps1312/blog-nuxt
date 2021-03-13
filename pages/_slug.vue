<template>
  <nuxt-content :document="page" />
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'PagePostShow',
  async asyncData ({ $content, params }) {
    const page = await $content(params.slug).fetch()

    return { page }
  }
})
</script>
