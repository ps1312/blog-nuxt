<template>
  <div>
    <base-nav-bar />
    <div class="mt-24 max-w-xl mx-auto">
      <Nuxt />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'DefaultLayout',
})
</script>
