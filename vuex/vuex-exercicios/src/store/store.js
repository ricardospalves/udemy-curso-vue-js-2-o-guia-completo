import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    produtos: [],
    quantidade: 2,
    preco: 19.99
  },
  getters: {
    valorTotal(state) {
      return state.produtos
        .map(produto => produto.quantidade * produto.preco)
        .reduce((total, atual) => total + atual, 0)
    }
  },
  mutations: {
    adicionarProduto(state, payload) {
      state.produtos.push(payload)
    },
    setQuantidade(state, payload) {
      state.quantidade = payload
    },
    setPreco(state, payload) {
      state.preco = payload
    }
  },
  actions: {
    adicionarProduto({ commit }, produto) {
      // Simulando uma função assíncrona
      setTimeout(() => {
        // context.commit('adicionarProduto', produto)

        commit('adicionarProduto', produto)
      }, 1000)
    }
  }
})
