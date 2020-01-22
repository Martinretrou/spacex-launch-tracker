<template>
  <div class="textarea-group form-group">
    <label :for="name">{{ label }}</label>
    <textarea
      :name="name"
      :rows="rows"
      :cols="cols"
      :placeholder="placeholder"
    />
  </div>
</template>

<script>
export default {
  name: 'Textare',
  props: {
    name: {
      type: String,
      required: true,
      default: 'input'
    },
    rows: {
      type: Number,
      default: 5
    },
    cols: {
      type: Number,
      default: 30
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
