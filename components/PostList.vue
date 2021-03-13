<template>
  <div>
    <span v-if="posts.length === 0">No posts around here 🧐</span>
    <post-list-item v-for="post in posts" v-else :key="post.id" :post="post" />
  </div>
</template>

<script>
import Vue from 'vue'
import PostListItem from '@/components/PostListItem'

export default Vue.extend({
  name: 'PostList',
  components: {
    PostListItem,
  },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
})
</script>
