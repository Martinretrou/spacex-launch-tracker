<template>
  <select :value="value" @input="$emit('input', $event.target.value)">
    <option :value="null">– Select a ... –</option>
    <option
      v-for="(option, index) in options"
      :key="index"
      :value="option.value"
      >{{ option.label }}</option
    >
  </select>
</template>

<script>
export default {
  name: 'Select',
  props: {
    value: {
      type: String,
      default: ''
    },
    options: {
      type: Array,
      default: () => {
        return [{ value: 'Value test', label: 'Label test' }]
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
