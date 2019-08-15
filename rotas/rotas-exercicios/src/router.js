import Vue from 'vue'
import Router from 'vue-router'
import Index from './components/Index'
import Navigator from './components/templates/Navigator'
import NavigatorEn from './components/templates/NavigatorEn'
import Usuario from './components/usuario/Usuario'
import UsuarioLista from './components/usuario/UsuarioLista'
import UsuarioDetalhe from './components/usuario/UsuarioDetalhe'
import UsuarioEditar from './components/usuario/UsuarioEditar'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'index',
      path: '/',
      // component: Index
      components: {
        default: Index,
        navigator: Navigator
      }
    },
    {
      path: '/usuario',
      // component: Usuario,
      components: {
        default: Usuario,
        navigator: NavigatorEn,
        navigatorBottom: NavigatorEn
      },
      props: true,
      children: [
        {
          path: '',
          component: UsuarioLista
        },
        {
          path: ':id',
          component: UsuarioDetalhe,
          props: true
        },
        {
          name: 'editarUsuario',
          path: ':id/editar',
          component: UsuarioEditar,
          props: true
        }
      ]
    },
    {
      path: '/redirecionar',
      redirect: '/usuario'
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
