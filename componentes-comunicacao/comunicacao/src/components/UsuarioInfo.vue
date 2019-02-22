<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do usuário: <strong>{{ inverterNome() }}</strong></p>
        <button @click="reiniciarNome">Reiniciar nome</button>
        <button @click="reiniciarFn">Reiniciar nome (Callback)</button>
    </div>
</template>

<script>
export default {
  props: {
    nome: {
      type: String,
      // required: true,
      // default() {
      //   return 'Anônimo'
      // },
      default: 'Anônimo'
    },
    reiniciarFn: Function
  },
  methods: {
    inverterNome() {
      return this.nome
        .split('')
        .reverse()
        .join('')
    },
    reiniciarNome() {
      this.nome = 'Ricardo'
      this.$emit('nomeMudou', this.nome)
    }
  }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
