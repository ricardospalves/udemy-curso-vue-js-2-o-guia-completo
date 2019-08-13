<template>
  <div>
    <h2>Usuários</h2>

    <hr>

    <router-view/>

    <button sucesso @click="goToHome">Voltar para a página inicial</button>
  </div>
</template>

<script>
export default {
  methods: {
    goToHome() {
      // this.$router.push('/')
      // this.$router.push({
      //   path: '/'
      // })
      this.$router.push({
        name: 'index'
      })
    }
  }
}
</script>

<style>

</style>
