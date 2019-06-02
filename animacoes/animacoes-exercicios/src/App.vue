<template>
	<div id="app" class="container-fluid">
		<h1>Animações</h1>

    <hr>

    <b-button
      class="mb-4"
      variant="primary"
      @click="isShow = !isShow"
    >
      Alternar alerta
    </b-button>

    <transition>
      <b-alert
        show
        v-if="isShow"
      >
        {{ message }}
      </b-alert>
    </transition>
	</div>
</template>

<script>
export default {
	data() {
    return {
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, quisquam!',
      isShow: false
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
	font-size: 1.5rem;
}
</style>
