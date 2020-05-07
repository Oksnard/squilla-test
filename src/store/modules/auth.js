export default {
  state: {
    isAuth: null
  },

  actions: {
    getIsAuth(ctx, data) {
      ctx.commit('setAuth', data)
    }
  },

  mutations: {
    setAuth(state, data) {
      state.isAuth = data
    }
  },

  getters: {
    isAuth: state => {
      return state.isAuth
    }
  }
}
