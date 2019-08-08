<template>
  <div>
    <h2>Usuários</h2>

    <p>
      <strong>Código:</strong> {{ id }}
    </p>

    <br>

    <button sucesso @click="goToHome">Voltar para a página inicial</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id
    }
  },
  watch: {
    $route(to) {
      this.id = to.params.id
    }
  },
  methods: {
    goToHome() {
      // this.$router.push('/')
      this.$router.push({
        path: '/'
      })
    }
  }
}
</script>

<style>

</style>
