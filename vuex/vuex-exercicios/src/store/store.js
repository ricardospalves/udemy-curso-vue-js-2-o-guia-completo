import Vue from 'vue'
import Vuex from 'vuex'

import carrinho from './modules/carrinho'
import parametros from './modules/parametros'

import * as getters from './getters.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: 'Lorem',
    surname: 'Ipsum'
  },
  getters,
  modules: {
    carrinho,
    parametros
  }
})
