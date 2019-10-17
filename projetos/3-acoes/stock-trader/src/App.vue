<template>
	<v-app>
    <Header/>
    <v-content>
      <v-container>
        <transition
          name="slide"
          mode="out-in"
        >
          <router-view/>
        </transition>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Header from './components/Header'

export default {
  components: {
    Header
  },
  created() {
    this.$store.dispatch('initStocks')
  }
}
</script>

<style>
  @keyframes slide {
    from {
      transform: translateY(-30px);
      opacity: 0;
    }

    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  .slide-enter-active {
    animation: slide .2s ease;
  }

  .slide-leave-active {
    animation: slide .2s ease reverse;
  }
</style>

