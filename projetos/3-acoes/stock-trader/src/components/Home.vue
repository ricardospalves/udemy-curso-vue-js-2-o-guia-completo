<template>
  <div>
    <h1 class="display-3 mb-4">
      Negocie e consulte suas ações
    </h1>

    <v-sheet :elevation="6" class="pa-2 primary white--text">
      <v-icon class="white--text mr-3">
        info
      </v-icon>

      <span class="headline">
        Você pode Salvar e Carregar os Dados
      </span>
    </v-sheet>

    <v-sheet :elevation="6" class="pa-2 success darken-1 mt-3 white--text">
      <v-icon class="white--text mr-3">
        info
      </v-icon>

      <span class="headline">
        Você pode Salvar e Carregar os Dados
      </span>
    </v-sheet>

    <v-divider class="my-4"/>

    <p class="display-1">
      <strong>Seu saldo é:</strong> {{ funds | currency }}
    </p>
  </div>
</template>

<script>
export default {
  computed: {
    funds() {
      return this.$store.getters.funds
    }
  }
}
</script>

<style>

</style>
