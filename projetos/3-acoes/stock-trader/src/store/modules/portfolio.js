export default {
  state: {
    funds: 1000,
    stocks: []
  },
  mutations: {
    buyStock(state, { stockId, quantity, stockPrice }) {
      const record = state.stocks.find(element => element.id === stockId)

      if(record) {
        record.quantity += quantity
      }

      else {
        state.stocks.push({
          id: stockId,
          quantity
        })
      }

      state.funds -= stockPrice * quantity
    },
    sellStock(state, { stockId, quantity, stockPrice }) {
      const record = state.stocks.find(element => element.id === stockId)

      if(record.quantity > quantity) {
        record.quantity -= quantity
      }

      else {
        state.stocks.splice(state.stocks.indexOf(record), 1)
      }

      state.funds += stockPrice * quantity
    },
    setPortfolio(state, portfolio) {
      state.funds = portfolio.funds
      state.stocks = portfolio.stockPortfolio || []
    }
  },
  actions: {
    sellStock({ commit }, order) {
      commit('sellStock', order)
    }
  },
  getters: {
    stockPortfolio(state, getters) {
      return state.stocks.map(stock => {
        const { name, price } = getters.stocks.find(element => element.id === stock.id)

        return {
          id: stock.id,
          quantity: stock.quantity,
          name,
          price
        }
      })
    },
    funds(state) {
      return state.funds
    }
  }
}
