import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.directive('featured', {
  bind(el, binding, vnode) {
    // el.style.backgroundColor = 'lightgreen'
    el.style.backgroundColor = binding.value
  }
})

new Vue({
	render: h => h(App),
}).$mount('#app')
