<template>
  <div class="contador">
    <span>{{ contador }}</span>

    <button @click="decrementar">-</button>

    <button @click="incrementar">+</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        contador: 0
      }
    },
    methods: {
      decrementar() {
        this.contador--;
      },
      incrementar() {
        this.contador++;
      }
    }
  }
</script>

<style scoped>
  button {
    border: 1px solid;
    background-color: grey;
  }
</style>
