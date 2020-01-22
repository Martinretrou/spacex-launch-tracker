<template>
  <div class="checkbox-group form-group">
    <div v-for="(option, index) of options" :key="index" class="checkbox">
      <input
        :id="option.name"
        v-model="checked"
        :value="option.value"
        type="checkbox"
      />
      <label :for="option.name">{{ option.label }}</label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Checkbox',
  props: {
    options: {
      type: Array,
      default: () => {
        return [
          { value: 'Value test', label: 'Label test', name: 'checkbox-test' }
        ]
      }
    }
  },
  data() {
    return {
      checked: []
    }
  },
  watch: {
    checked(val) {
      this.$emit('on-change', val)
    }
  }
}
</script>

<style lang="scss" scoped></style>
