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
  import NavigationDrawer from '@/components/NavigationDrawer.vue'
  import Footer from '@/components/Footer.vue'
  import Carousel from '@/widget/Carousel.vue'
  import Toolbar from '@/components/Toolbar.vue'

  export default {
    components: {
      'app-navigation': NavigationDrawer,
      'app-footer': Footer,
      'app-carousel': Carousel,
      'app-toolbar': Toolbar
    }
  }
</script>
