<template>
	<v-app>
    <app-navigation/>

		<app-toolbar/>

		<v-content>
			<app-carousel/>
		</v-content>

    <app-footer/>
	</v-app>
</template>

<script>
  import NavigationDrawer from './NavigationDrawer.vue'
  import Footer from './Footer.vue'
  import Carousel from './Carousel.vue'
  import Toolbar from './Toolbar.vue'

  export default {
    components: {
      'app-navigation': NavigationDrawer,
      'app-footer': Footer,
      'app-carousel': Carousel,
      'app-toolbar': Toolbar
    }
  }
</script>
