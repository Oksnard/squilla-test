<template lang="pug">
  form.login-form(@submit.prevent='Login')
    BaseInput(v-model='login' name='Login')
    BaseInput(v-model='password' name='Password')
    BaseButton(type="submit" color='success' name='Login')
    p.text-danger {{loginError}}
</template>

<script>
import BaseButton from '@/components/BaseButton'
import BaseInput from '@/components/BaseInput'

export default {
  name: 'Logn',

  components: {
    BaseButton,
    BaseInput
  },

  data: () => ({
    login: '',
    password: '',
    loginError: ''
  }),

  methods: {
    Login() {
      this.$axios.get('users').then(res => {
        res.data.forEach(e => {
          if (e.login === this.login) {
            if (e.password === this.password) {
              localStorage.setItem('isAuth', true)
              this.$router.push('/table')
            } else {
              this.loginError = 'Пароли не совпадают'
            }
          } else {
            this.loginError = 'Такого пользователя не найдено'
          }
        })
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.login-form
  display: flex;
  flex-direction: column;
  width: min-content;
  padding: 20px;
  align-items: center;
  margin: auto;
</style>
