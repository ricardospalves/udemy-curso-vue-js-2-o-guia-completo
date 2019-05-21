<template>
	<div id="app">
		<h1>Diretivas (Desafio)</h1>
		<hr>
		<!-- Exercício -->
		<!-- Escreva uma diretiva que funcione com o v-on (escute eventos) -->
    <button v-quando:click="handleClick">Click</button>

    <h2
      v-quando:mouseenter="handleMouseEnter"
      v-quando:mouseleave="handleMouseLeave"
    >
      Mouse
    </h2>
	</div>
</template>

<script>
export default {
  directives: {
    quando: {
      bind(element, binding) {
        const eventType = binding.arg
        const fn = binding.value

        element.addEventListener(eventType, fn)
      }
    }
  },
  methods: {
    handleClick() {
      console.log('Click!')
    },
    handleMouseEnter() {
      console.log('Mouse Enter!')
    },
    handleMouseLeave() {
      console.log('Mouse Leave!')
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

button {
	margin: 10px 0px;
	padding: 10px 20px;
	font-size: 1.4rem;
	border-radius: 5px;
	color: #FFF;
	background-color: #2196F3;
}
</style>
