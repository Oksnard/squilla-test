"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  state: {
    tableElement: {}
  },
  actions: {
    tableElement: function tableElement(ctx, elem) {
      ctx.commit('setTableElement', elem);
    }
  },
  mutations: {
    setTableElement: function setTableElement(state, elem) {
      state.tableElement = elem;
    }
  },
  getters: {
    getTableElement: function getTableElement(state) {
      return state.tableElement;
    }
  }
};
exports["default"] = _default;