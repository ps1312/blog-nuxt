<template>
  <li class="p-4 mb-4 rounded-md list-none">
    <div class="flex flex-col">
      <strong class="text-3xl leading-none text-gray-800">
        {{ post.title }}
      </strong>

      <div
        class="flex justify-between text-base font-medium text-gray-400 my-2"
      >
        <span>Published on {{ formattedDate }}</span>
        <span class="pl-2">{{ post.readTimeEstimate }}</span>
      </div>

      <span class="text-lg text-gray-800">
        {{ post.postContentSynopsys }}
      </span>

      <nuxt-link :to="'/' + post.slug" class="mt-8 text-indigo-600">
        Read more...
      </nuxt-link>
    </div>
  </li>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'PostListItem',
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  computed: {
    formattedDate() {
      const options = { day: '2-digit', month: 'short', year: 'numeric' }
      return new Date(this.post.publishedAt).toLocaleDateString(
        'en-US',
        options,
      )
    },
  },
})
</script>
