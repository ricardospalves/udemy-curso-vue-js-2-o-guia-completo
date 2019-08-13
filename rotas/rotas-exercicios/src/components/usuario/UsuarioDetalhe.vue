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
        }
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
