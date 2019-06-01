import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('counterAndAppendLengthWords', sentence => {
  return sentence
    .split(' ')
    .map(word => `${word} (${word.length})`)
    .join(' ')
})

new Vue({
	render: h => h(App),
}).$mount('#app')
