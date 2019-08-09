import Vue from 'vue'
import Router from 'vue-router'
import Index from './components/Index'
import Usuario from './components/usuario/Usuario'

class Route {
  constructor(path, component, props = false) {
    this.path = path
    this.component = component
    this.props = props
  }
}

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    new Route('/', Index),
    new Route('/usuario/:id', Usuario, true)
  ]
})
