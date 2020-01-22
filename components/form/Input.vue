<template>
  <div class="input-group form-group">
    <label :for="name">{{ label }}</label>
    <input
      :value="value"
      v-on:input="updateValue($event.target.value)"
      :name="name"
      :type="type"
      :placeholder="placeholder"
    />
  </div>
</template>

<script>
export default {
  name: 'Input',
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
  },
  methods: {
    updateValue(value) {
      this.$emit('input', value)
    }
  }
}
</script>

<style lang="scss" scoped></style>
