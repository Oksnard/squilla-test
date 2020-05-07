<template lang="pug">
  .container
    BaseButton(color="info" name="add" @click.native="$router.push('/add')")
    table.table
      thead
        tr
          th(@click="sortTableData('min')") Минимальная сумма
          th(@click="sortTableData('max')") Максимальная сумма
          th(@click="sortTableData('percent')") Процентная ставка
          th(@click="sortTableData('freq')") Частота выплат
      tbody
        tr(v-for='elem in sortedTableData')
          td {{elem.min}}
          td {{elem.max}}
          td {{elem.percent}}
          td {{elem.freq}}
          td
            BaseButton(color="success" name="Edit" @click.native="$router.push(`/edit/${elem.id}`)")
          td
            BaseButton(color="error" name="Remove" @click.native="removeElem(elem)")
    p
      BaseButton.mx-1(color="info" name="Previous" @click.native='prevPage')
      BaseButton.mx-1(color="info" name="Next" @click.native='nextPage')
</template>

<script>
import BaseButton from '@/components/BaseButton'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Home',

  components: { BaseButton },

  data: () => ({
    currentSort: 'min',
    currentSortDir: 'asc',
    pageSize: 10,
    currentPage: 1
  }),

  computed: {
    ...mapGetters({
      tableData: 'getTableData'
    }),

    sortedTableData() {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      return this.tableData
        .sort((a, b) => {
          let modifier = 1
          if (this.currentSortDir === 'desc') modifier = -1
          if (a[this.currentSort] < b[this.currentSort]) return -1 * modifier
          if (a[this.currentSort] > b[this.currentSort]) return 1 * modifier
          return 0
        })
        .filter((row, index) => {
          let start = (this.currentPage - 1) * this.pageSize
          let end = this.currentPage * this.pageSize
          if (index >= start && index < end) return true
        })
    }
  },

  created() {
    this.getTableData({ vm: this })
  },

  methods: {
    ...mapActions({
      getTableData: 'tableData',
      removeTableElem: 'removeTableData'
    }),

    sortTableData(s) {
      s === this.currentSort
        ? (this.currentSortDir = this.currentSortDir === 'asc' ? 'desc' : 'asc')
        : (this.currentSort = s)
    },

    removeElem(elem) {
      this.$axios
        .delete(`/table-data/${elem.id}`)
        .then(res => {
          if (res.status === 200) {
            this.removeTableElem(elem)
          }
        })
        .catch(e => {
          console.error(e)
        })
    },

    nextPage() {
      if (this.currentPage * this.pageSize < this.tableData.length)
        this.currentPage++
    },

    prevPage() {
      if (this.currentPage > 1) this.currentPage--
    }
  }
}
</script>

<style lang="stylus" scoped>
.table
  width 100%
  margin 40px auto

  thead
    tr
      th
        cursor pointer
</style>
