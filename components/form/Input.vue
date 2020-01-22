<template>
  <div class="input-group form-group">
    <label :for="name">{{ label }}</label>
    <input :name="name" :type="type" :placeholder="placeholder" />
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    name: {
      type: String,
      required: true,
      default: 'input'
    },
    type: {
      type: String,
      default: 'text'
    },
    label: {
      type: String,
      default: 'Default label'
    },
    placeholder: {
      type: String,
      default: 'Enter text here...'
    }
  }
}
</script>

<style lang="scss" scoped></style>
