<template>
  <main class="container">
    <Hero />
    <Posts />
  </main>
</template>

<script>
import Hero from '@/components/molecules/Hero'
import Posts from '@/components/molecules/Posts'
export default {
  components: { Hero, Posts },
}
</script>
