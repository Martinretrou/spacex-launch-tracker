<template>
  <img :alt="img.alt" :src="img.url" />
</template>

<script>
export default {
  name: 'PrismicImg',
  props: {
    img: {
      type: Object,
      default: () => {
        return {
          alt: '',
          url: ''
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
img {
  max-width: 100%;
  max-height: 100%;
}
</style>
