/* eslint-disable vue/no-v-html */
<template>
  <div class="container py-5 my-5">
    <b-row align-h="center">
      <b-col md="9">
        <h1>{{ post.fields.title }}</h1>
        <small class="author">By {{ post.fields.author.fields.name }}</small>

        <picture v-if="post.fields.heroImage">
          <img
            class="my-5"
            :src="post.fields.heroImage.fields.file.url"
            :alt="post.fields.title"
            width="100%"
            height="500px"
          />
        </picture>

        <article v-html="$md.render(post.fields.body)"></article>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slug: this.$route.params.slug,
    }
  },

  head() {
    return {
      title: this.post.fields.title,
    }
  },

  computed: {
    post() {
      const post = this.$store.state.posts.filter(
        (el) => el.fields.slug === this.slug
      )
      return post[0]
    },
  },
}
</script>
