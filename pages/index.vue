<template>
  <main class="container">
    <Hero />
    <b-row align-h="center" align-v="center">
      <b-col md="9">
        <Posts />
      </b-col>
    </b-row>
  </main>
</template>

<script>
import Hero from '@/components/molecules/Hero'
import Posts from '@/components/molecules/Posts'
export default {
  components: { Hero, Posts },
}
</script>
