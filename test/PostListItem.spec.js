import { shallowMount } from '@vue/test-utils'
import PostListItem from '@/components/PostListItem'

describe('PostListItem.vue', () => {
  it('should display post attributes', () => {
    const post = makePost()
    const wrapper = createComponent(post)

    expect(wrapper.text()).toContain(post.title)
    expect(wrapper.text()).toContain(post.readTimeEstimate)
    expect(wrapper.text()).toContain('Published on Mar 01, 2021')
    expect(wrapper.text()).toContain(post.postContentSynopsys)
  })

  it('should display formatted date', async () => {
    await assertFormattedDate({
      newDate: '2021-03-01T03:00:00.000Z',
      expectedDate: 'Mar 01, 2021',
    })
    await assertFormattedDate({
      newDate: '2020-06-30T03:00:00.000Z',
      expectedDate: 'Jun 30, 2020',
    })
    await assertFormattedDate({
      newDate: '2005-02-15T03:00:00.000Z',
      expectedDate: 'Feb 15, 2005',
    })
  })

  it('should render an anchor tag with href set correctly by post.id', async () => {
    await assertLinkUrl({ id: 1 })
    await assertLinkUrl({ id: 5 })
    await assertLinkUrl({ id: 999 })
  })
})

async function assertLinkUrl({ id }) {
  const post = makePost()
  const wrapper = createComponent(post)

  await wrapper.setProps({ post: { ...post, id } })
  expect(wrapper.find(`[to='/posts/${id}']`)).toBeTruthy()
}

async function assertFormattedDate({ newDate, expectedDate }) {
  const post = makePost()
  const wrapper = createComponent(post)

  await wrapper.setProps({ post: { ...post, publishedAt: newDate } })
  expect(wrapper.vm.formattedDate).toBe(expectedDate)
}

function makePost() {
  return {
    id: 1,
    title: 'Test driving a list component in Vue.js.',
    readTimeEstimate: '4 minutes read.',
    publishedAt: '2021-03-01T03:00:00.000Z',
    postContentSynopsys: 'How to test drive a list component',
  }
}

function createComponent(post) {
  return shallowMount(PostListItem, {
    propsData: { post },
    stubs: ['router-link'],
  })
}
