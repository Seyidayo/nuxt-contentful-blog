<template>
  <div>
    <ul v-if="posts.length" class="post-link__container">
      <li v-for="post in posts" :key="post.fields.slug">
        <nuxt-link :to="`how-to/${post.fields.slug}`">
          <section class="post-link">
            <picture>
              <img
                v-if="!!post.fields.heroImage.fields"
                width="100%"
                height="auto"
                :src="post.fields.heroImage.fields.file.url"
                :alt="post.fields.title"
              />
            </picture>

            <article>
              <h2 class="title">
                <nuxt-link :to="`/how-to/${post.fields.slug}`">{{
                  post.fields.title
                }}</nuxt-link>
              </h2>
              <p class="description">
                {{ post.fields.description }}
              </p>
              <nuxt-link :to="`how-to/${post.fields.slug}`" class="more"
                >Read more</nuxt-link
              >
            </article>
          </section>
        </nuxt-link>
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
.post-link {
  border: 1.5px solid transparent;
  transition: all 0.25s;
  margin-block-end: 1rem;

  picture {
    display: block;
    block-size: 200px;
    max-block-size: 200px;
    background: yellow;

    img {
      block-size: 100%;
      object-fit: cover;
    }
  }

  .title {
    font-size: 1.25rem;
    font-weight: bold;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    line-height: 1.5rem;
    margin-block-start: 1rem;
  }

  p {
    margin-block-end: 0.25rem;
  }

  article {
    padding: 0 1em 1em;
  }

  &:hover,
  &:focus {
    border-color: var(--secondary);
    box-shadow: 3px 3px 2px 4px rgba(0, 0, 0, 0.2);
    transform: translate3d(-3px, -3px, 0);
  }
}

@media screen and (min-width: 768px) {
  .post-link__container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2em;
  }
  li:first-of-type {
    grid-column: span 3;

    .post-link {
      display: grid;
      grid-template-columns: 3fr 1fr;
      gap: 1rem;

      picture {
        block-size: 350px;
        max-block-size: 350px;
      }
    }
  }
}
</style>
