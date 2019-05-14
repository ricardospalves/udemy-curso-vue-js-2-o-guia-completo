<template>
	<div id="app">
		<h1>Diretivas</h1>

    <p v-text="'Usando a diretiva <strong>v-text</strong>'"></p>

    <hr>

    <p v-html="'Usando a diretiva <strong>v-html</strong>'"></p>

    <hr>

    <p v-featured:bg="'red'">Usando diretiva customizada</p>
    <p v-featured="color">Usando diretiva customizada</p>
	</div>
</template>

<script>
export default {
  data() {
    return {
      color: 'lime'
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
