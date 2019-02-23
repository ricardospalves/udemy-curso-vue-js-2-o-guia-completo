<template>
    <div class="container">
        <h1>Componente Usuário</h1>
        <p>Esse é um componente muito legal!</p>
        <p>Nome é <strong>{{ nome }}</strong></p>
        <p>Idade do usário: <strong>{{ idade }}</strong></p>
        <button @click="editarNome">Alterar nome</button>
        <hr>
        <div class="componentes">
            <app-usuario-info
              :nome="nome"
              :reiniciarFn="reiniciarNome"
              :idade="idade"
              @nomeMudou="nome = $event"
            />
            <app-usuario-editar
              :idade="idade"
            />
        </div>
    </div>
</template>

<script>
import AppUsuarioInfo from './UsuarioInfo'
import AppUsuarioEditar from './UsuarioEditar'

export default {
    components: { AppUsuarioInfo, AppUsuarioEditar },
    data() {
      return {
        nome: 'Ricardo',
        idade: 21
      }
    },
    methods: {
      editarNome() {
        this.nome = 'Ana'
      },
      reiniciarNome() {
        this.nome = 'Ricardo'
      }
    }
}
</script>

<style scoped>
    .container {
        background-color: #27363b;
        color: #fff;
        padding: 10px;
    }

    .container hr {
        margin: 20px 10px;
    }

    .componentes {
        display: flex;
    }

    .componentes > * {
        margin: 10px;
    }
</style>
