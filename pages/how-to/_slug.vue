<template>
  <section class="container post__container">
    <header>
      <h1 class="h3">{{ post.fields.title }}</h1>
      <small class="author">
        Reference: {{ post.fields.author.fields.name }}
      </small>
    </header>

    <article v-html="$md.render(post.fields.body)"></article>
    <div class="post__video">
      <iframe
        :src="`https://www.youtube.com/embed/${post.fields.video}`"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </section>
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

<style lang="scss">
.post__container {
  header {
    padding: 5rem 0;
    h1 {
      margin-block-end: 0.25em;
    }
  }

  .post__video {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 */
    padding-top: 25px;
    height: 0;

    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
}

iframe {
  margin-block-start: 1rem;
}
</style>
