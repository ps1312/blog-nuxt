<template>
  <svg v-if="icon === 'close'" width="24" height="24" viewBox="0 0 24 24">
    <path
      d="M17.59 5L12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41 17.59 5z"
    />
  </svg>

  <svg
    v-else-if="icon === 'hamburguer'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path d="M21 18H3v-2h18v2zm0-5H3v-2h18v2zm0-5H3V6h18v2z" />
  </svg>

  <svg v-else-if="icon === 'github'" width="24" height="24" viewBox="0 0 24 24">
    <path
      d="M12.026 2a9.975 9.975 0 00-3.153 19.439c.5.09.679-.217.679-.481 0-.237-.008-.865-.011-1.7-2.775.6-3.361-1.338-3.361-1.338a2.635 2.635 0 00-1.107-1.459c-.9-.619.069-.605.069-.605.64.088 1.205.467 1.527 1.028a2.124 2.124 0 002.9.829c.046-.506.272-.979.635-1.334-2.214-.251-4.542-1.107-4.542-4.93a3.865 3.865 0 011.026-2.671 3.588 3.588 0 01.1-2.64s.837-.269 2.742 1.021a9.439 9.439 0 014.992 0c1.906-1.291 2.742-1.021 2.742-1.021.37.835.405 1.78.1 2.64a3.84 3.84 0 011.024 2.675c0 3.833-2.33 4.675-4.552 4.922.48.49.725 1.162.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479A9.975 9.975 0 0012.026 2z"
    />
  </svg>

  <svg
    v-else-if="icon === 'linkedin'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path
      d="M13 21H9V9h4v2a4.618 4.618 0 013.525-1.763A4.5 4.5 0 0121 13.75V21h-4v-6.75a2.265 2.265 0 00-2.247-1.944A1.815 1.815 0 0013 14.25V21zm-6 0H3V9h4v12zM5 7a2 2 0 110-4 2 2 0 010 4z"
    />
  </svg>

  <svg
    v-else-if="icon === 'external-link'"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="{2}"
      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
    />
  </svg>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'BaseIcon',
  props: {
    icon: {
      type: String,
      required: true,
    },
  },
})
</script>
