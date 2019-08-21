<template>
  <div class="usuario-detalhe">
    <h3>
      Usuário Detalhe
    </h3>

    <p>
      <strong>Código:</strong> {{ id }}
    </p>

    <!-- :to="`/usuario/${id}/editar`" -->
    <router-link
      tag="button"
      :to="{
        name: 'editarUsuario',
        param: {
          id
        },
        query: {
          isCompleted: true,
          language: 'pt-BR'
        },
        hash: '#rodape'
      }"
      primario
    >
      Editar
    </router-link>
  </div>
</template>

<script>
export default {
  props: [
    'id'
  ],
  beforeRouteEnter(to, from, next) {
    console.log('Dentro do componente -> usuário detalhe')

    next()
  }
  // data() {
  //   return {
  //     id: this.$route.params.id
  //   }
  // },
  // watch: {
  //   $route(to) {
  //     this.id = to.params.id
  //   }
  // },
}
</script>

<style>

</style>
