<template>
  <div>
    <ul v-if="posts.length" class="list-unstyled">
      <li v-for="post in posts" :key="post.fields.slug">
        <section class="post-link__container">
          <b-row>
            <b-col cols="4">
              <picture>
                <img
                  v-if="!!post.fields.heroImage.fields"
                  width="100%"
                  height="auto"
                  :src="post.fields.heroImage.fields.file.url"
                  :alt="post.fields.title"
                />
              </picture>
            </b-col>
            <b-col cols="8">
              <p class="title">
                <nuxt-link :to="`/how-to/${post.fields.slug}`">{{
                  post.fields.title
                }}</nuxt-link>
              </p>
              <p class="description">
                {{ post.fields.description }}
              </p>
              <nuxt-link :to="`how-to/${post.fields.slug}`" class="more"
                >Read more</nuxt-link
              >
            </b-col>
          </b-row>
        </section>
      </li>
    </ul>
    <p v-else class="text-center p-4">No posts yet!</p>
  </div>
</template>

<script>
export default {
  computed: {
    posts() {
      return this.$store.state.posts
    },
  },
}
</script>

<style lang="scss">
.post-link__container {
  border: 1.5px solid transparent;
  margin-block-end: 4rem;
  padding: 1.5em 1em;
  transition: all 0.25s;

  &:hover,
  &:focus {
    border-color: var(--secondary);
    box-shadow: 3px 3px 2px 4px rgba(0, 0, 0, 0.2);
    transform: translate3d(-3px, -3px, 0);
  }

  .title {
    font-size: 1.5rem;
  }

  .tags {
    display: flex;
    align-items: center;

    .tag {
      font-size: 0.825rem;
      padding: 1em 1.25em;
      border: 1px solid var(--secondary);
      margin-inline-end: 1em;
    }
  }
}
</style>
