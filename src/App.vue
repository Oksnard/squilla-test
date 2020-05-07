<template lang="pug">
  #app
    router-view
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'App',

  created() {
    if (localStorage.getItem('isAuth')) {
      this.setAuth(true)
    }
  },

  methods: {
    ...mapActions({
      setAuth: 'getIsAuth'
    })
  }
}
</script>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px

  .container
    width 100%
    max-width 1170px
    min-width 280px
    margin 0 auto
    padding 0 20px

  .mx-1
    margin 0 10px

  .text-danger
    color #ff1744
</style>
