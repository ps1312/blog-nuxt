<template>
  <nuxt-content :document="page" />
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'PagePostShow',
  async asyncData({ $content, params }) {
    const page = await $content(params.slug).fetch()

    return { page }
  },
  head() {
    return {
      title: this.page.title,
      titleTemplate: '%s | pssr.dev',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.page.postContentSynopsys,
        },
      ],
    }
  },
})
</script>

<style lang="postcss">
.nuxt-content > p > img {
  max-width: 90%;
  max-height: 500px;
  display: flex;
  margin: auto;
  border-radius: 5px;
  margin: 20px 0;
}

.nuxt-content {
  @apply text-gray-700 text-lg leading-loose break-words;
}

.nuxt-content strong {
  @apply text-indigo-600;
}

.nuxt-content h1 {
  @apply font-bold text-4xl my-6 text-gray-800;
}

.nuxt-content h1 > strong {
  @apply font-bold text-4xl mt-8 text-gray-800;
}

.nuxt-content > h2 {
  @apply text-gray-400 font-medium text-lg ml-1 mb-2 leading-tight;
}

.nuxt-content h3 {
  @apply font-bold text-2xl mt-6;
}

.nuxt-content p {
  @apply leading-9 mt-6 text-xl text-gray-500;
}

.nuxt-content > p > code {
  @apply bg-gray-200 text-sm px-2 py-1 rounded-sm;
}

.nuxt-content ul {
  @apply list-disc ml-6 mt-6 sm:ml-16 text-xl text-gray-500 space-y-4;
}

.nuxt-content > ul > li > code {
  @apply bg-gray-200 text-sm px-2 py-1 rounded-sm text-xl text-gray-500;
}

.nuxt-content a {
  @apply border-b-2 border-indigo-600 text-indigo-600;
}

.nuxt-content > ol {
  @apply list-decimal ml-4 mt-4 pr-8 text-xl sm:ml-16 text-gray-500 space-y-4;
}

.nuxt-content > ol > li > code {
  @apply bg-gray-200 text-sm px-2 py-1 rounded-sm text-xl text-gray-500 flex-wrap;
}

.nuxt-content hr {
  @apply border-t-4 mt-6;
}

.nuxt-content-highlight {
  @apply md:text-sm my-10;
}
</style>
