---
title: Testing a Component in Vue.js
readTimeEstimate: "4 minutes read."
publishedAt: Mon Mar 10 2021 00:00:00 GMT-0300
postContentSynopsys: "I need to create a Vue.js component that displays a series of Post objects with certain informations. This is how i did it."
slug: "testing-a-component-in-vuejs"
---

Testing a Component in Vue.js
=============================

Applying TDD to develop a list display component
------------------------------------------------

Published on Mar 10, 2021
---------------------------

---

Context
=======

I need to create a Vue.js component that displays a series of `Post` objects with certain informations. It is an easy and simple component to create and to practice TDD.

I will use a default [**Vue-CLI**](https://cli.vuejs.org/) Vue 2 project, and [**@vue/test-utils**](https://vue-test-utils.vuejs.org/) with [**jest**](https://jestjs.io/)  to test drive it. The post resource structure agreed with the backend colleague is:

```javascript
const post = {  
  id: 1,  
  title: "Test driving a list component in Vue.js.",  
  readTimeEstimate: "4 minutes read.",  
  publishedAt: new Date("Mar 01 2021"),  
  postContentSynopsis: "How to test drive a list component"  
}
```

Initial Setup
=============

We’ll need to add the required testing tools, you can read how to install in [**@vue/test-utils** documentation](https://vue-test-utils.vuejs.org/installation/#using-vue-test-utils-with-jest-recommended).

First we look at the requirements provided by the client. For the post list we just need to display all posts in a list. But for each post we’ll need to:

*   Display the post data
*   Display the published date with format: `mm dd, yyyy`
*   Redirect to post show page (/posts/:id) on post click

And we also have a high level mockup to use as reference:

![High level mockup](https://miro.medium.com/max/2660/1\*iTSMx4ox\_WO4vdrJR-oKmA.png)

First test
==========

Following the TDD process, I start by creating `PostListItem.spec.js` along with an empty `PostListItem.vue` and the simplest test that i can think, assert that the component renders the post title:

```javascript
import { shallowMount } from "@vue/test-utils";
import PostListItem from "@/components/PostListItem";

describe('PostItem.vue', () => {
  it("should display post title", () => {
    const title = "Fake Title";
    const wrapper = shallowMount(PostListItem, {
      propsData: { post: { title },
    });
    expect(wrapper.text()).toContain(title);
  })
});
```

When running with `yarn jest`:

![Jest first test failure](https://miro.medium.com/max/4800/1*F4eVGfukvWk3QBtj5wIHHg.png)

We have a failing test, that’s good, we are at the red state. Proceeding with TDD we need to write the simplest possible code that will make the test pass. In this case we just need to make a `h1` with the post title.

```vue
<template>
  <h1>{{ post.title }}</h1>
</template>

<script>
export default {
  name: "PostListItem",
  props: {
    post: {
      type: Object,
      required: true,
    }
  }
}
</script>
```

Running the tests again:

![Jest first test success](https://miro.medium.com/max/2128/1\*xb7Ec79K6SsEIpdDQIon8Q.png)

I like to commit every time I’m on green state because then I will have a checkpoint to go back.

Testing other post attributes display
=====================================

We also need the component to display the time to read, published at formatted and the post synopsis. We can use the same strategy from the first test, check if the component contains the required texts:

```javascript
import { shallowMount } from "@vue/test-utils";
import PostListItem from "@/components/PostListItem";

describe('PostListItem.vue', () => {
  it("should display post attributes", () => {
    const post = {
      title: "Test driving a list component in Vue.js.",
      readTimeEstimate: "4 minutes read.",
      publishedAt: new Date("Mar 01 2021"),
      postContentSynopsys: "How to test drive a list component",
    };

    const wrapper = shallowMount(PostListItem, {
      propsData: {
        post,
      }
    });
    
    expect(wrapper.text()).toContain(post.title);
    expect(wrapper.text()).toContain(post.readTimeEstimate);
    expect(wrapper.text()).toContain("Published on Mar 01, 2021");
    expect(wrapper.text()).toContain(post.postContentSynopsys);
  })
});
```

Running the tests again will result in failure. Once again we’re on the red state. We need to write the least possible code to make the tests pass:

```vue
<template>
  <div>
    <h1>{{ post.title }}</h1>
    <span>{{ post.readTimeEstimate }}</span>
    <span>Published on Mar 01, 2021</span>
    <span>{{ post.postContentSynopsys }}</span>
  </div>
</template>

<script>
export default {
  name: "PostListItem",
  props: {
    post: {
      type: Object,
      required: true,
    }
  }
}
</script>
```

Run the tests and see that we are at the green state again, perfect time to commit. Observe that i didn’t formatted the `published_at` date yet, it is not in the scope of the test we just wrote. Let’s extend our test suit to guarantee this functionality.

Testing published\_at date
==========================

To verify if the component is displaying the correct formatted date, we need to pass different `publishedAt` props with `setProps` method. The test will look like:

```javascript
import { shallowMount } from "@vue/test-utils";
import PostListItem from "@/components/PostListItem";

describe('PostListItem.vue', () => {
  // ...
  it("should display formatted date", async () => {
    const post = {
      title: "Test driving a list component in Vue.js.",
      readTimeEstimate: "4 minutes read.",
      publishedAt: new Date("Mar 01 2021"),
      postContentSynopsys: "How to test drive a list component",
    };

    const wrapper = shallowMount(PostListItem, {
      propsData: { post },
    });

    expect(wrapper.vm.formattedDate).toBe("Mar 01, 2021");

    await wrapper.setProps({ post: { ...post, publishedAt: new Date("Jun 30 2020") } });
    expect(wrapper.vm.formattedDate).toBe("Jun 30, 2020");

    await wrapper.setProps({ post: { ...post, publishedAt: new Date("Feb 15 2005") } });
    expect(wrapper.vm.formattedDate).toBe("Feb 15, 2005");
  });
});
```

Confirm that we are on the red state by running the tests. To make them pass, I will create a computed property that will format the date and return its formatted string. You can use third party libraries like `momentjs` or `date-fns`, I will just use the default `Date` package from Javascript.

```vue
<template>
  <li>
    <h1>{{ post.title }}</h1>
    <span>{{ post.readTimeEstimate }}</span>
    <span>Published on {{ formattedDate }}</span>
    <span>{{ post.postContentSynopsys }}</span>
  </li>
</template>

<script>
export default {
  //...
  computed: {
    formattedDate() {
      const options = { day: "2-digit", month: "short", year: "numeric" };
      return this.post.publishedAt.toLocaleDateString("en-US", options);
    }
  }
}
</script>
```

Before moving forward, we have some duplicated code in our spec. Backed up by the last commit on the green state we can try out some refactors. I can see 3 methods to extract to helper functions:

1.  Post object creation
2.  Wrapper creation
3.  Formatted date assertion

I will let you do this refactor but you can find my code [here](https://github.com/ps1312/simple_blog/blob/fe82901662123d677304b4e165cef1391881fd32/tests/unit/PostListItem.spec.js).

After removing code duplications and making assertions more clear, let’s look back at our requirements for the post item. We need to make sure that the component redirects to the post show page (`/posts/:id`) on click.

Testing href tag
================

Instead of test if the component redirects on click we can verify the same behaviour by asserting that `href` is set correctly. For the test we have:

```javascript
import { shallowMount } from "@vue/test-utils";
import PostListItem from "@/components/PostListItem";

describe('PostListItem.vue', () => {
  // ...
  it("should render an anchor tag with href set correctly by post.id", async () => {
    const post = makePost();
    const wrapper = createComponent(post);

    expect(wrapper.find("a").attributes().href).toEqual(`/post/${post.id}`);

    await wrapper.setProps({ post: { ...post, id: 2 } });

    expect(wrapper.find("a").attributes().href).toEqual(`/post/${2}`);

    await wrapper.setProps({ post: { ...post, id: 999 } });
    expect(wrapper.find("a").attributes().href).toEqual(`/post/${999}`);
  });
});
```

To make the test pass, wrap the component with an anchor tag with `:href="'/post/' + post.id`. Before moving on, you can remove the test code duplication like the previous test, I will let you do this refactor by yourself.

You can find the refactored code [here](https://github.com/ps1312/simple_blog/blob/a67cc62d8ed25e976ed68815b4dd0c16e7b96c95/tests/unit/PostListItem.spec.js).

I think it is all good with the `PostListItem.vue` specs. Now we just need guarantee that the list component displays a correct list of provided posts.

Testing PostList
================

Let’s start by creating our spec (`PostList.spec.js`) file along with our component (`PostList.vue`). The first assertion we should make is that the component should display a empty state message, in our case, `No posts around here 🧐`, when a empty `posts` array is provided. The test will look like:

```javascript
import { shallowMount } from "@vue/test-utils";
import PostList from "@/components/PostList";

describe('PostList.vue', () => {
  it("should display an empty state message on empty array of posts", () => {
    const wrapper = shallowMount(PostList, {
      propsData: { posts: [] }
    });

    expect(wrapper.text()).toContain("No posts around here 🧐");
  })
})
```

Again we need to keep the discipline of TDD writing only the _minimal_ production code for the test to pass, in this case we just need a tag: `<span>No posts around here 🧐</span>` to get on the green state again. After that, it is a perfect time to make a commit.

Continuing our tests, we have now 2 more expectations to comply:

1.  Check if the correct number of rendered `PostListItem`.
2.  Check if `PostListItem` receives the respective `post` as prop.

To check the first expectation we can use `wrapper.findAllComponents()` and check the length. For the latter, we can loop through the components we’ve found and check their props:

```javascript
import { shallowMount } from "@vue/test-utils";
import PostList from "@/components/PostList";
import PostListItem from "@/components/PostListItem";

describe('PostList.vue', () => {
  //...
  it("should display correct number os PostListItem", () => {
    const fakePosts = [makePost({ id: 1 }), makePost({ id: 2 })];
    const wrapper = shallowMount(PostList, {
      propsData: { posts: fakePosts },
    });
    const itemsWrapper = wrapper.findAllComponents(PostListItem);

    expect(itemsWrapper.length).toEqual(2);
    itemsWrapper.wrappers.forEach((item, index) => {
      expect(item.vm.post).toStrictEqual(fakePosts[index])
    });
  });
  //...
})
```

Adapting href test to router-link
=================================

I’ve chosen [**VueRouter**](https://router.vuejs.org/installation.html#direct-download-cdn) handle the app routing so instead of using an `<a />` in `PostListItem.vue` I need to use `router-link`. The `@vue/test-utils` library provides an awesome [documentation](https://vue-test-utils.vuejs.org/guides/using-with-vue-router.html#testing-components-that-use-router-link-or-router-view) on this matter. In short you need to provide a `router-link` stub to `shallowMount` and make the assertion based on the tag `to` of `router-link` (e.g. ``wrapper.find(`[to="/posts/${postId}"]`)``). You can find my code [here](https://github.com/ps1312/simple_blog/blob/main/tests/unit/PostListItem.spec.js), look at `assertLinkUrl()`.

Final considerations
====================

It was a nice component to learn about some specific topics ✅:

1.  The TDD process (e.g. failure, success, refactor)
2.  Assertion of texts, computed properties, props, HTML attributes and tags with `@vue/test-utils`.
3.  Different selectors (e.g. `wrapper.find` and `wrapper.findAllComponents`)
4.  Stub components (e.g. `router-link`)

We still have to apply the style to the components but this has nothing to do with TDD, you can find the complete code with styles [here](https://github.com/ps1312/simple_blog/tree/feature/posts_list).

Thanks for reading ✋