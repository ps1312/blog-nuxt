<template>
  <ul class="space-y-12">
    <li class="flex flex-col space-y-4">
      <span class="text-3xl font-bold">This very blog 📄</span>
      <span class="text-lg leading-relaxed">
        I've actually built this blog from ground up, it is a Nuxt.js static app
        hosted in Netlify. It uses nuxt/content and was developed with SEO in
        mind and i'ts actually appearing on Google 🙌.
      </span>
      <a
        href="https://github.com/ps1312/blog-nuxt"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span class="border-b-2 border-indigo-600 text-indigo-600 font-bold">
          View source
        </span>
      </a>
    </li>

    <div class="w-full h-1 bg-indigo-500 rounded-full" />

    <div class="w-full bg-indigo-700 p-4 rounded-md opacity-50">
      <span class="text-white font-bold">
        These apps are hosted on Heroku and maybe are hibernating, just wait a
        little for them to wake up.
      </span>
    </div>

    <li class="flex flex-col space-y-4">
      <span class="text-3xl font-bold">devto-feed 💻</span>
      <div class="inline-flex w-1/2 h-1/2">
        <img
          class="object-contain"
          src="/feed_web.png"
          alt="feed web showcase"
        >
        <img
          class="object-contain"
          src="/listings_web.png"
          alt="listings web showcase"
        >
      </div>
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
      <div class="inline-flex w-1/2 h-1/2">
        <img
          class="object-contain"
          src="/nearby_places_map.png"
          alt="Nearby places app map"
        >
        <img
          class="object-contain"
          src="/nearby_places_modal.png"
          alt="Nearby places app comments modal"
        >
      </div>

      <span class="text-lg leading-relaxed">
        React.JS app with authentication using REQ|RES. It fetches nearby places
        (Google Maps) from user based on their location. The user can also save
        a location and give it a comment and a rating, these informations are
        stored locally. To login it uses the REQ|RES API and the following
        credential can be used:
        <ul class="mt-4 ml-6">
          <li>
            <strong>eve.holt@reqres.in</strong>
          </li>
          <li>
            <strong>cityslicka</strong>
          </li>
        </ul>
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
