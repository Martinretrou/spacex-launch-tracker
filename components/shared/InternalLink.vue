<template>
  <nuxt-link :to="target">{{ label }}</nuxt-link>
</template>

<script>
export default {
  name: 'InternalLink',
  props: {
    label: {
      type: String,
      default: 'Default label'
    },
    target: {
      type: String,
      default: '/'
    }
  }
}
</script>

<style lang="scss" scoped></style>
