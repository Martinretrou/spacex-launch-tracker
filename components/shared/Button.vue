<template>
  <button>{{ label }}</button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    label: {
      type: String,
      default: 'Default label'
    }
  }
}
</script>

<style lang="scss" scoped></style>
