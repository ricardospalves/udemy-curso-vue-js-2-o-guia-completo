<template>
  <div id="app">
    <h1>
      {{ title }}
    </h1>

    <button @click="title += '#'">Alterar</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: 'Teste `data` usando VueJS!!!'
      }
    }
  }
</script>

<style>
  #app {
    background-color: coral;
  }
</style>
