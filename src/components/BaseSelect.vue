<template lang="pug">
  select.base-select(
    :value="value"
    @input="$emit('input', $event.target.value)"
  )
    option(
      v-for="option in options"
      :value="option"
    ) {{ option }}
</template>

<script>
export default {
  props: {
    value: {
      type: String
    }
  },

  data: () => ({
    options: ['каждые две недели', 'ежемесячно', 'единовременно']
  }),

  methods: {
    handleSelect() {
      this.$emit('select', this.$refs.baseSelect.value)
    }
  }
}
</script>

<style lang="stylus" scoped>
.base-select
  padding: 10px;
  border-radius: 4px;
  border: 1px solid lightgray;
  margin: 10px 0;
  width 100%
  min-width: 250px;
</style>
