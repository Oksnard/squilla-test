<template lang="pug">
    BaseForm(buttonName="Added" submitType="added")
</template>

<script>
import { mapActions } from 'vuex'
import BaseForm from '@/components/BaseForm'

export default {
  name: 'Added',

  components: {
    BaseForm
  },

  data: () => ({
    formData: {
      min: null,
      max: null,
      percent: null,
      freq: null
    }
  }),

  methods: {
    ...mapActions({
      addNewTableData: 'addNewTableData'
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
