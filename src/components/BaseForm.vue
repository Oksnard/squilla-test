<template lang="pug">
    form.base-form(@submit.prevent='typeSubmitMethod')
      BaseInput(v-model.number='submitFormData.min' name='Минимальная сумма' type="number")
      BaseInput(v-model.number='submitFormData.max' name='Максимальная сумма' type="number")
      BaseInput(v-model.number='submitFormData.percent' name='Процентная ставка' type="number")
      BaseSelect(v-model.number='submitFormData.freq')
      p.text-danger(v-if="submitError") {{submitError}}
      div.form-actions
        BaseButton(:type='submitType' color='success' :name='buttonName' :disabled="submitError")
        BaseButton( color='error' name='Cancel' @click.native="$router.push('/')")
</template>

<script>
import { mapActions } from 'vuex'
import BaseButton from '@/components/BaseButton'
import BaseInput from '@/components/BaseInput'
import BaseSelect from '@/components/BaseSelect'

export default {
  components: {
    BaseButton,
    BaseInput,
    BaseSelect
  },

  props: {
    buttonName: {
      type: String
    },
    submitType: {
      type: String
    },
    tableData: {
      type: Object
    }
  },

  data: () => ({
    formData: {
      min: null,
      max: null,
      percent: null,
      freq: null
    }
  }),

  computed: {
    submitFormData() {
      if (!this.tableData) {
        return this.formData
      }
      return this.tableData
    },

    submitError() {
      if (!Number.isInteger(this.submitFormData.min)) {
        return 'Минимальная сумма должна быть целым числом'
      }
      if (!Number.isInteger(this.submitFormData.max)) {
        return 'Максимальная сумма должна быть целым числом'
      }
      if (!Number.isInteger(this.submitFormData.percent)) {
        return 'Процентная ставка должна быть целым числом'
      }
      if (
        !this.submitFormData.min ||
        !this.submitFormData.max ||
        !this.submitFormData.percent ||
        !this.submitFormData.freq
      ) {
        return 'Все поля обязательны для заполнения'
      }

      return false
    }
  },

  methods: {
    ...mapActions({
      addNewTableData: 'addNewTableData'
    }),

    typeSubmitMethod() {
      if (this.submitType === 'added') {
        this.addTableData()
      } else {
        this.editTableData()
      }
    },

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
    },

    editTableData() {
      this.$axios
        .put(`/table-data/${this.submitFormData.id}`, this.submitFormData)
        .then(res => {
          if (res.status === 200) {
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

<style lang="stylus" scoped>
.base-form
  display: flex;
  flex-direction: column;
  width: min-content;
  padding: 20px;
  align-items: center;
  margin: auto;

  .form-actions
    display flex
    justify-content space-between
    width 100%
</style>
