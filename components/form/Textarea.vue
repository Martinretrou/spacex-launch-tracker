<template>
  <div class="textarea-group form-group">
    <label :for="name">{{ label }}</label>
    <textarea
      :value="value"
      v-on:input="updateValue($event.target.value)"
      :name="name"
      :rows="rows"
      :cols="cols"
      :placeholder="placeholder"
    />
  </div>
</template>

<script>
export default {
  name: 'Textarea',
  props: {
    value: {
      type: String,
      default: null
    },
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
  },
  methods: {
    updateValue(value) {
      this.$emit('input', value)
    }
  }
}
</script>

<style lang="scss" scoped></style>
