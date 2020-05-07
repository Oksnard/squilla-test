"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var _default = {
  state: {
    tableData: [],
    tableElement: {}
  },
  actions: {
    tableData: function tableData(ctx, _ref) {
      var vm = _ref.vm;
      vm.$axios.get('/table-data').then(function (res) {
        ctx.commit('setTableData', res.data);
        localStorage.setItem('tableData', JSON.stringify(res.data));
      })["catch"](function (e) {
        console.error(e);
      });
    },
    addNewTableData: function addNewTableData(ctx, payload) {
      ctx.commit('pushTableData', payload);
    },
    removeTableData: function removeTableData(ctx, payload) {
      ctx.commit('deleteTableData', payload.id);
    },
    tableElement: function tableElement(_ref2, id) {
      var commit = _ref2.commit,
          state = _ref2.state;
      var tableData;

      if (JSON.parse(localStorage.getItem('tableData'))) {
        tableData = JSON.parse(localStorage.getItem('tableData'));
      } else {
        tableData = _toConsumableArray(state.tableData);
      }

      tableData.forEach(function (e) {
        if (e.id === +id) {
          console.log(e);
          commit('setTableElement', e);
        }
      });
    }
  },
  mutations: {
    setTableData: function setTableData(state, data) {
      state.tableData = data;
    },
    pushTableData: function pushTableData(state, data) {
      state.tableData.push(data);
    },
    deleteTableData: function deleteTableData(state, id) {
      state.tableData.forEach(function (e, i) {
        if (e.id === id) {
          state.tableData.splice(i, 1);
        }
      });
    },
    setTableElement: function setTableElement(state, elem) {
      state.tableElement = elem;
    }
  },
  getters: {
    getTableData: function getTableData(state) {
      return state.tableData;
    },
    getTableElement: function getTableElement(state) {
      return state.tableElement;
    }
  }
};
exports["default"] = _default;