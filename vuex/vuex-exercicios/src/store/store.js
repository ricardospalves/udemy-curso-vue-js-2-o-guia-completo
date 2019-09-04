import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    produtos: []
  },
  getters: {
    valorTotal(state) {
      return state.produtos
        .map(produto => produto.quantidade * produto.preco)
        .reduce((total, atual) => total + atual, 0)
    }
  }
})