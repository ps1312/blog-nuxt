<template>
  <ul class="space-y-12">
    <li class="flex flex-col space-y-4">
      <span class="text-3xl font-bold">This very blog 📄</span>
      <span class="text-lg leading-relaxed">
        I've actually built this blog from ground up, it is a Nuxt.js static app
        hosted in Netlify. It uses nuxt/content and was developed with SEO in
        mind and i'ts actually appearing on Google 🙌.
      </span>
      <a href="">
        <span class="border-b-2 border-indigo-600 text-indigo-600 font-bold">
          View source
        </span>
      </a>
    </li>

    <li class="flex flex-col space-y-4">
      <span class="text-3xl font-bold">devto-feed 💻</span>
      <span class="text-lg leading-relaxed">
        Dev.to API consumer made with Nuxt.js. It makes HTTP requests so i'ts
        hosted on Heroku instead of Netlify. The "Listings" page have an awesome
        drag and drop feature that i'm particularly proud of because it was made
        with TDD and worked like a charm.
      </span>
      <div class="inline-flex space-x-4">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/ps1312/devto-feed"
        >
          <span class="border-b-2 border-indigo-600 text-indigo-600 font-bold">
            View source
          </span>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://devto-feed.herokuapp.com/"
        >
          <span class="border-b-2 border-indigo-600 text-indigo-600 font-bold">
            Demo
          </span>
        </a>
      </div>
    </li>

    <li class="flex flex-col space-y-4">
      <span class="text-3xl font-bold">Nearby places 📍</span>
      <span class="text-lg leading-relaxed">
        React.JS app with authentication using REQ|RES. It fetches nearby places
        (Google Maps) from user based on their location. The user can also save
        a location and give it a comment and a rating, these informations are
        stored locally.
      </span>
      <div class="inline-flex space-x-4">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/ps1312/map_app"
        >
          <span class="border-b-2 border-indigo-600 text-indigo-600 font-bold">
            View source
          </span>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://neaby-places-app.herokuapp.com/"
        >
          <span class="border-b-2 border-indigo-600 text-indigo-600 font-bold">
            Demo
          </span>
        </a>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'PageApps',
}
</script>

<style></style>
