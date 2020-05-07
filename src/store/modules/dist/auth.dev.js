"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  state: {
    isAuth: null
  },
  actions: {
    getIsAuth: function getIsAuth(ctx, data) {
      ctx.commit('setAuth', data);
    }
  },
  mutations: {
    setAuth: function setAuth(state, data) {
      state.isAuth = data;
    }
  },
  getters: {
    isAuth: function isAuth(state) {
      return state.isAuth;
    }
  }
};
exports["default"] = _default;