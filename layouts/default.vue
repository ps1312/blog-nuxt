<template>
  <div>
    <base-nav-bar />
    <div class="px-3 mx-auto my-24 max-w-xl lg:max-w-2xl">
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
