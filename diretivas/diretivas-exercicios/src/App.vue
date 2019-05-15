<template>
	<div id="app">
		<h1>Diretivas</h1>

    <p v-text="'Usando a diretiva <strong>v-text</strong>'"></p>

    <hr>

    <p v-html="'Usando a diretiva <strong>v-html</strong>'"></p>

    <hr>

    <p v-featured:bg="'red'">Usando diretiva customizada</p>
    <p v-featured="color">Usando diretiva customizada</p>
    <p v-featured:bg.delay="'blue'">Usando diretiva customizada</p>
    <p v-featured.delay="'indianred'">Usando diretiva customizada</p>

    <hr>

    <p v-local-featured:bg="'cyan'">Usando diretiva customizada</p>
    <p v-local-featured="color">Usando diretiva customizada</p>
    <p v-local-featured:bg.delay="'magenta'">Usando diretiva customizada</p>
    <p v-local-featured.delay="'yellow'">Usando diretiva customizada</p>
	</div>
</template>

<script>
export default {
  directives: {
    'local-featured': {
      bind(el, binding, vnode) {
        const lagTime = hasLagTime => {
          if(hasLagTime) {
            return 3000
          }

          return 0
        }
        const hasDelay = binding.modifiers.delay

        setTimeout(() => {
          if( binding.arg === 'bg' ) {
            el.style.backgroundColor = binding.value
          }

          else {
            el.style.color = binding.value
          }
        }, lagTime(hasDelay))
      }
    }
  },
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
