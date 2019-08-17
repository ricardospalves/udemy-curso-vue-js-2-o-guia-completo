<template>
	<div id="app">
		<h1>Rotas com VueRouter</h1>

      <!-- <Navigator/> -->

      <router-view name="navigator"/>

      <transition
        mode="out-in"
        enter-active-class="animated rubberBand"
        leave-active-class="animated rollOut"
      >
        <router-view/>
      </transition>

      <router-view name="navigatorBottom"/>
	</div>
</template>

<script>
// import Navigator from './components/templates/Navigator'

// export default {
//   components: {
//     Navigator
//   }
// }
</script>

<style>
	#app {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
