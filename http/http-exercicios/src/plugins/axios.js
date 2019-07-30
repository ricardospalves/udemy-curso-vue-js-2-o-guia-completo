import axiosConfigs from './axiosConfigs.json'
import Vue from 'vue'
import axios from 'axios'

// axios global
// axios.defaults.baseURL = axiosConfigs.baseURL
// axios.defaults.headers.commom['Authorization'] = 'abc123'
// axios.defaults.headers.get['Accepts'] = 'application/json'

Vue.use({
  install(Vue) {
    // axios global
    // Vue.prototype.$http = axios

    Vue.prototype.$http = axios.create({
      baseURL: axiosConfigs.baseURL,
      headers: {
        'Authorization': 'abc123'
      }
    })

    Vue.prototype.$http.interceptors.request.use(config => {
      console.log(config.method)

      return config
    }, error => Promise.reject(error))

    Vue.prototype.$http.interceptors.response.use(response => {
      // const users = []

      // for(let key in response.data) {
      //   users.push({
      //     id: key,
      //     ...response.data[key]
      //   })
      // }

      // response.data = users

      return response
    }, error => Promise.reject(error))
  }
})
