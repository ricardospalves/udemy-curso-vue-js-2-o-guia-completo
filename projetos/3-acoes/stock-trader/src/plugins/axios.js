import Vue from 'vue'
import axios from 'axios'

const firebaseCredentials = require('../../credentials/firebase.json')

Vue.use({
  install(Vue) {
    Vue.prototype.$axios = axios.create({
      baseURL: firebaseCredentials.baseURL
    })
  }
})
