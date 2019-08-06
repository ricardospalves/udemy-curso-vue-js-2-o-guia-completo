import Vue from 'vue'
import Router from 'vue-router'
import Index from './components/Index'
import Usuario from './components/usuario/Usuario'

class Route {
  constructor(path, component) {
    this.path = path
    this.component = component
  }
}

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    new Route('/', Index),
    new Route('/usuario', Usuario)
  ]
})
