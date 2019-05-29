<template>
	<div id="app">
		<h1>Filtros & Mixins</h1>

    <hr>

    <p>
      {{ cpf | formatCPF | reverse }}
    </p>

    <input type="text" :value="cpf | formatCPF | reverse">

    <hr>

    <Fruits/>

    <hr>

    <div>
      <ul>
        <li
          v-for="fruit in fruits" :key="fruit"
        >
          {{ fruit }}
        </li>
      </ul>

      <input type="text" v-model="fruit" @keydown.enter="add">
    </div>
	</div>
</template>

<script>
import mixinFruit from './mixinFruit'
import Fruits from './Fruits.vue'

export default {
  components: {
    Fruits
  },
  mixins: [
    mixinFruit
  ],
  filters: {
    formatCPF(cpf) {
      return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
    }
  },
  data() {
    return {
      cpf: '01245823695'
    }
  }
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}
</style>
