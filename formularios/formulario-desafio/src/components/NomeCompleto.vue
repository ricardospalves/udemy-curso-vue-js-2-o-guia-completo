<template>
  <div>
    <Rotulo nome="Nome">
      <input type="text"
        :value="value.name"
        @input="changeName"
      >
    </Rotulo>

    <Rotulo nome="Sobrenome">
      <input type="text"
        :value="value.surname"
        @input="changeSurname"
      >
    </Rotulo>
  </div>
</template>

<script>
import Rotulo from './Rotulo.vue'

export default {
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  components: {
    Rotulo
  },
  methods: {
    changeName(event) {
      this.$emit('input', {
        name: event.target.value,
        surname: this.value.surname
      })
    },
    changeSurname(event) {
      this.$emit('input', {
        name: this.value.name,
        surname: event.target.value
      })
    }
  }
}
</script>

<style>

</style>
