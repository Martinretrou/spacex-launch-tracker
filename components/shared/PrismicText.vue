<template>
  <div v-html="$prismic.asHtml(text)" class="prismic-rich-field"></div>
</template>

<script>
export default {
  name: 'PrismicText',
  props: {
    text: {
      type: Array,
      default: () => {
        return null
      }
    }
  }
}
</script>

<style lang="scss" scoped>
div {
  max-width: 100%;
  img {
    max-width: 100%;
  }
}
</style>
