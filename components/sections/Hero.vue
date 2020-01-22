<template>
  <section class="hero">
    <div class="hero-wrapper">
      <h1>{{ title }}</h1>
      <p v-if="description">{{ description }}</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero',
  props: {
    title: {
      type: String,
      default: 'hero title'
    },
    description: {
      type: String,
      default: 'hero description'
    }
  }
}
</script>

<style lang="scss" scoped>
.hero {
  background-color: $white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  &-wrapper {
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }
  h1 {
    font-size: 2.35em;
    font-weight: bold;
    margin-bottom: 0.5em;
  }
  p {
    font-size: 1.25em;
    color: $black;
  }
}
</style>
