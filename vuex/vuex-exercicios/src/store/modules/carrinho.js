export default {
  namespaced: true,
  state: {
    produtos: []
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
}
