<template lang="pug">
  button.base-button(:style="buttonStyle" :type="type") {{name}}
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    type: {
      type: String
    },
    color: {
      type: String,
      required: false,
      default: 'info'
    }
  },

  computed: {
    buttonStyle() {
      switch (this.color) {
        case 'error':
          return 'background: #ff1744'
        case 'success':
          return 'background: #00e676'
        default:
          return 'background: #00b0ff'
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.base-button
  border none
  padding 10px 20px
  border-radius 4px
  color #FFFFFF
  cursor pointer
  text-transform uppercase
  transition all .2s
  position relative

  &:disabled
    cursor no-drop

  &:hover
    box-shadow 0px 8px 24px 0px rgba(0,0,0,0.2)
</style>
