import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('reverse', value => {
  return value.split('').reverse().join('')
})

new Vue({
	render: h => h(App)
}).$mount('#app')
