import Vue from 'vue'
import Router from 'vue-router'
import Index from './components/Index'
import Navigator from './components/templates/Navigator'
import NavigatorEn from './components/templates/NavigatorEn'
// import Usuario from './components/usuario/Usuario'
// import UsuarioLista from './components/usuario/UsuarioLista'
// import UsuarioDetalhe from './components/usuario/UsuarioDetalhe'
// import UsuarioEditar from './components/usuario/UsuarioEditar'

const Usuario = () => import(/* webpackChunkName: "usuario" */ './components/usuario/Usuario')
const UsuarioLista = () => import(/* webpackChunkName: "usuario" */ './components/usuario/UsuarioLista')
const UsuarioDetalhe = () => import(/* webpackChunkName: "usuario" */ './components/usuario/UsuarioDetalhe')
const UsuarioEditar = () => import(/* webpackChunkName: "usuario" */ './components/usuario/UsuarioEditar')

Vue.use(Router)

const router = new Router({
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if(savedPosition) {
      return savedPosition
    }

    if(to.hash) {
      return {
        selector: to.hash
      }
    }

    return {
      x: 0,
      y: 1000
    }
  },
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
          props: true,
          beforeEnter: (to, from, next) => {
            console.log('Antes da rota -> usuário detalhe')

            next()
          }
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

router.beforeEach((to, from, next) => {
  console.log('Antes das rotas -> global')

  next()
})

export default router
