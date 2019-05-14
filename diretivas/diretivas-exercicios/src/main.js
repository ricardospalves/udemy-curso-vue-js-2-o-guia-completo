import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.directive('featured', {
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
})

new Vue({
	render: h => h(App),
}).$mount('#app')
