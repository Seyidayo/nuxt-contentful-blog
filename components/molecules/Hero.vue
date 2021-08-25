<template>
  <header>
    <h1 class="h4">Learn how to <span></span></h1>
    <small>Stuffs I wish I'd learnt earlier!</small>
  </header>
</template>

<script>
export default {
  data() {
    return {
      tutorialOptions: [
        { text: 'Repair', color: 'grey' },
        { text: 'Fix', color: 'orange' },
        { text: 'Replace', color: 'min' },
        { text: 'Change', color: 'blue' },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
header {
  inline-size: 100%;
  padding: 7rem 0;
  text-align: center;

  h1 {
    margin-block-end: 0.5em;
  }
}

span {
  margin-block: 0;

  &::before {
    content: 'Repair';
    animation: switching-text 8s infinite;
  }
}

li {
  line-height: 60px;
  &:first-of-type {
    animation: slide-text 12s infinite;
  }
}

@keyframes switching-text {
  0% {
    content: 'Repair';
  }
  25% {
    content: 'Change';
  }
  75% {
    content: 'Fix';
  }
  100% {
    content: 'Replace';
  }
}
</style>
