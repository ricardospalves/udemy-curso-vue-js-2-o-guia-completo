<template>
	<div id="app">
		<h1>
      Diretivas
    </h1>

    <p v-text="'Usando a diretiva <strong>v-text</strong>'"></p>

    <hr>

    <p v-html="'Usando a diretiva <strong>v-html</strong>'"></p>

    <hr>

    <p v-featured:bg="'red'">
      Usando diretiva customizada
    </p>

    <p v-featured="color">
      Usando diretiva customizada
    </p>

    <p v-featured:bg.delay="'blue'">
      Usando diretiva customizada
    </p>

    <p v-featured.delay="'indianred'">
      Usando diretiva customizada
    </p>

    <hr>

    <p v-local-featured:bg="'cyan'">
      Usando diretiva customizada
    </p>

    <p v-local-featured="color">
      Usando diretiva customizada
    </p>

    <p
      v-local-featured:bg.delay.toggle="{
        startColor: 'cyan',
        endColor: 'yellow',
        delay: 2000,
        interval: 200
      }"
    >
      Usando diretiva customizada
    </p>

    <p
      v-local-featured.delay="{
        startColor: 'red',
        delay: 5000
      }"
    >
      Usando diretiva customizada
    </p>
	</div>
</template>

<script>
export default {
  directives: {
    'local-featured': {
      bind(el, binding, vnode) {
        const hasDelay = binding.modifiers.delay
        const userColor = binding.value.startColor
        const defaultColor = binding.value.endColor
        let currentColor = userColor

        setTimeout(() => {
          if(binding.modifiers.toggle) {
            setInterval(() => {
              currentColor = (currentColor === userColor) ? defaultColor : userColor

              applyColor(currentColor)
            }, binding.value.interval)
          }

          else {
            applyColor(binding.value.startColor)
          }
        }, lagTime(hasDelay))

        function lagTime(hasLagTime) {
          if(hasLagTime) {
            return binding.value.delay
          }

          return 0
        }

        function applyColor(color) {
          if( binding.arg === 'bg' ) {
            el.style.backgroundColor = color
          }

          else {
            el.style.color = color
          }
        }
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
