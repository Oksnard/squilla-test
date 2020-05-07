<template lang="pug">
    BaseForm(buttonName="Edit" submitType="edit" :tableData="tableElement")
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import BaseForm from '@/components/BaseForm'

export default {
  name: 'Edit',

  components: {
    BaseForm
  },
  computed: {
    ...mapGetters({
      tableElement: 'getTableElement'
    })
  },

  created() {
    this.getTableElement(this.$route.params.id)
  },

  methods: {
    ...mapActions({
      addNewTableData: 'addNewTableData',
      getTableElement: 'tableElement'
    }),

    addTableData() {
      this.$axios
        .post('/table-data', {
          min: this.formData.min,
          max: this.formData.max,
          percent: this.formData.percent,
          freq: this.formData.freq
        })
        .then(res => {
          if (res.status === 201) {
            this.addNewTableData(this.formData)
            this.$router.push('/table')
          }
        })
        .catch(e => {
          console.error(e)
        })
    }
  }
}
</script>
