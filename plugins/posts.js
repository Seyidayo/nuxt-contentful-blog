export default async ({ store }) => {
  await store.dispatch('GET_POSTS')
}
