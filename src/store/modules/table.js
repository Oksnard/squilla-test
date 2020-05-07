export default {
  state: {
    tableData: [],
    tableElement: {}
  },

  actions: {
    tableData(ctx, { vm }) {
      vm.$axios
        .get('/table-data')
        .then(res => {
          ctx.commit('setTableData', res.data)
          localStorage.setItem('tableData', JSON.stringify(res.data))
        })
        .catch(e => {
          console.error(e)
        })
    },

    addNewTableData(ctx, payload) {
      ctx.commit('pushTableData', payload)
    },

    removeTableData(ctx, payload) {
      ctx.commit('deleteTableData', payload.id)
    },

    tableElement({ commit, state }, id) {
      let tableData
      if (JSON.parse(localStorage.getItem('tableData'))) {
        tableData = JSON.parse(localStorage.getItem('tableData'))
      } else {
        tableData = [...state.tableData]
      }
      tableData.forEach(e => {
        if (e.id === +id) {
          console.log(e)
          commit('setTableElement', e)
        }
      })
    }
  },

  mutations: {
    setTableData(state, data) {
      state.tableData = data
    },

    pushTableData(state, data) {
      state.tableData.push(data)
    },

    deleteTableData(state, id) {
      state.tableData.forEach((e, i) => {
        if (e.id === id) {
          state.tableData.splice(i, 1)
        }
      })
    },

    setTableElement(state, elem) {
      state.tableElement = elem
    }
  },

  getters: {
    getTableData: state => {
      return state.tableData
    },

    getTableElement: state => {
      return state.tableElement
    }
  }
}
