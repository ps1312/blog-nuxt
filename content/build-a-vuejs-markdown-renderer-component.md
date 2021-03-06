---
title: "Build A Vue.js Markdown Renderer Component"
readTimeEstimate: "5 minutes read."
publishedAt: Wed Mar 01 2021 00:00:00 GMT-0300
postContentSynopsys: "How I’ve created a component in Vue to compile and render my saved posts in HTML."
slug: "build-a-vuejs-markdown-renderer-component"
---

Build A Vue.js Markdown Renderer Component
==========================================

With Code Highlight Support
---------------------------

Published on Mar 1, 2021
---------------------------

---

The final code can be found here [**https://github.com/ps1312/simple\_blog/tree/feature/markdown\_display**](https://github.com/ps1312/simple_blog/tree/feature/markdown_display), look for `MarkdownDisplay.vue` to see the implementation.

**Context**
===========

I have the idea to develop my own blog as a side project to improve my Vue.js and TDD skills. I’ve chosen to save the blog content in markdown and i need a component in Vue to compile and render my saved posts in HTML.

After some research i’ve found two libraries that would do the job, [**marked.js**](https://github.com/markedjs/marked) and [**highlight.js**](https://highlightjs.org/). I didn’t ended up making tests but its something i will definitely revisit some time later. I want the component to compile and display a markdown string to HTML elements, my markdown reference will be:

````markdown
# Creating a blog with Vue
### First you'll need a component to display markdown 📄

Here is an example of some code

```javascript
function print(string) {
  console.log(string)
};
print("test");
```

### And some lists and links ✅

Vue:
- [Vue.js official documentation](https://vuejs.org/)
- [Nuxt.js Server Side Rendering](https://nuxtjs.org/)
````

**Initial Setup**
=================

I started by creating a Vue app through [**Vue CLI**](https://cli.vuejs.org/)  using the default Vue 2 settings. After installing it you can create a project with `vue create blog` where “blog” is the app name of your choice, the output will be.

![Default Vue 2 boilerplate](https://miro.medium.com/proxy/1*pXgJv4yc3xkJ5l3P8OE6Aw.png)

After deleting `HelloWorld.vue` component and removing its reference on `App.vue`, i need a new empty component for displaying the content, it can be called `MarkdownDisplay.vue`. Both **marked.js** and **highlight.js** still needs to be installed, you can do it with `npm install --save marked highlight.js`.

**Compiling markdown to raw HTML**
==================================

`MarkdownDisplay.vue` needs to receive a markdown string passed as a prop from the parent component (`App.js` in this example). To display the desired HTML, the markdown string needs to be parsed and compiled by **marked.js**, by reading through the [documentation](https://marked.js.org/using_advanced#options.) we see that it can be done with `marked("## sample string" [,options])`. The component will look like:

```vue
<template>
  <div v-html="compiledMarkdown" />
</template>

<script>
import marked from "marked";
export default {
  name: "MarkdownDisplay",
  props: {
    markdown: {
      type: String,
      required: true,
    }
  },
  computed: {
    compiledMarkdown() {
      return marked(this.markdown)
    }
  }
}
</script>
```

There are somethings i would like to talk in this gist:

1.  `marked` returns a raw HTML. We can render this content inside `v-html` directive in Vue as seen in the [docs](https://vuejs.org/v2/guide/syntax.html#Raw-HTML).
2.  I’ve chosen to use `marked` as a Vue computed property. The property can be set in data and can be compiled in `mount` but using computed gives us [free caching](https://vuejs.org/v2/guide/computed.html#Computed-Caching-vs-Methods) based on the markdown string dependency.

We end up with the current preview:

![First version preview](https://miro.medium.com/max/1400/1*BZcjkEqwWnDLVgUBWi03kg.png)

There are two problems here:

1.  The image is acting strange on window resize, we need to add some CSS styles to fix this issue.
2.  The code snippet is not properly highlighted. In small blocks of code its fine, but with complex logic it is more difficult to read without syntax highlight.

Code Highlight
==============

As we can see **marked.js** does not highlight code by default but searching though its documentation we can find an [example](https://marked.js.org/using_advanced) on how to setup this functionality properly (and even with **highlight.js 🙌)**.

But first, we need to setup **highlight.js,** we can do this by calling `hljs.highlightAll()` somewhere. In our app it will be called from `MarkdownDisplay.vue` `mounted` lifecycle step. We also have to select what style our code block will be presented, there are [various styles](https://github.com/highlightjs/highlight.js/tree/master/src/styles) to be chosen from. To avoid ambiguity, we need to import the file from the npm module with `~` as prefix, you can read more about it [here](https://cli.vuejs.org/guide/html-and-static-assets.html#static-assets-handling). I will also add the necessary CSS to fix the image element on resize. The component will look like:

```vue
<template>
  <div v-html="compiledMarkdown" class="markdown-body" />
</template>

<script>
import marked from "marked";
import hljs from "highlight.js";

export default {
  name: "MarkdownDisplay",
  props: {
    markdown: {
      type: String,
      required: true,
    }
  },
  mounted() {
    hljs.highlightAll()
  },
  computed: {
    compiledMarkdown() {
      return marked(this.markdown, {
        highlight: function(markdown) {
          return hljs.highlightAuto(markdown).value
        }
      })
    }
  }
}
</script>

<style>
@import "~highlight.js/styles/monokai-sublime.css";

.markdown-body > p > img {
  max-width: 90%;
  max-height: 600px;
  display: flex;
  margin: auto;
}

</style>
```

And the HTML result:

![Second version preview](https://miro.medium.com/max/2264/1\*W13GCXJ5pn10X00aHwf\_yQ.png)

Performance adjustment + Afterthoughts
======================================

After running the project on `webpack-bundle-analyzer` i noticed that unused imports were being made by **highlight.js,** thus making the bundle bigger without need,  to fix this we need to load the languages that we need to highlight, in this case only `javascript`. The component will look like:

```vue
<template>
  <div v-html="compiledMarkdown" class="markdown-body" />
</template>

<script>
import marked from "marked";
import hljs from "highlight.js/lib/core";
import jsHighlight from "highlight.js/lib/languages/javascript";

export default {
  name: "MarkdownDisplay",
  props: {
    markdown: {
      type: String,
      required: true,
    }
  },
  mounted() {
    hljs.registerLanguage("javascript", jsHighlight)
    hljs.highlightAll()
  },
  computed: {
    compiledMarkdown() {
      return marked(this.markdown, {
        highlight: function(markdown) {
          return hljs.highlightAuto(markdown).value
        }
      })
    }
  }
}
</script>

<style>
@import "~highlight.js/styles/monokai-sublime.css";

.markdown-body > p > img {
  max-width: 90%;
  max-height: 600px;
  display: flex;
  margin: auto;
}

</style>
```

That’s it. ✅

Conclusion
==========

It was a nice component to learn about Vue syntax along with third party dependencies usages. I also learned how to properly import npm modules from a Single Page Component. And last but not least, running the app through `webpack-bundle-analyzer` made me understand more about the bundle creation and code-splitting, i will make another post to show how i managed to do that.

Thanks for reading ✋