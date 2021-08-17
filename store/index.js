import client from '~/plugins/contentful'

export const state = () => {
  return {
    posts: [],
  }
}

export const mutations = {
  SET_POSTS_MUTATION(state, posts) {
    state.posts = posts
  },
}

export const actions = {
  async GET_POSTS({ commit }) {
    try {
      if (!client) return
      const response = await client.getEntries({
        content_type: 'blogPost',
      })
      if (response.items.length > 0)
        commit('SET_POSTS_MUTATION', response.items)
    } catch (err) {
      console.error(err)
    }
  },
}
