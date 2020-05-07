<template lang="pug">
  input.base-input(@input="handleInput" :placeholder="name" :value="value" ref="baseInput" :type="type")
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    value: {
      required: false
    },
    type: {
      type: String
    }
  },

  methods: {
    handleInput() {
      this.$emit('input', this.$refs.baseInput.value)
    }
  }
}
</script>

<style lang="stylus" scoped>
.base-input
  padding: 10px;
  border-radius: 4px;
  border: 1px solid lightgray;
  margin: 10px 0;
  min-width: 250px;
</style>
