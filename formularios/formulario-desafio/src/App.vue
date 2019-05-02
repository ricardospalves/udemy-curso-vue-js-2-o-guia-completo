<template>
	<div id="app">
		<h1>Formulário Desafio</h1>

		<div class="conteudo">
			<form class="painel" v-if="!isSent">
				<div class="cabecalho">Formulário</div>

        <NomeCompleto v-model="user.fullName"/>

        <Rotulo nome="E-mail">
          <input type="email" v-model="user.email">
        </Rotulo>

        <Rotulo nome="Senha">
          <input type="password" v-model="user.password">
        </Rotulo>

        <Rotulo nome="Armazenar Dados?">
          <input type="checkbox" v-model="user.storage">
        </Rotulo>

        <button @click.prevent="submit">
          Enviar
        </button>
			</form>

			<div class="painel" v-else>
				<div class="cabecalho">Resultado</div>

        <Rotulo nome="Nome">
          <span>{{ user.fullName.name }}</span>
        </Rotulo>

        <Rotulo nome="Sobrenome">
          <span>{{ user.fullName.surname }}</span>
        </Rotulo>

        <Rotulo nome="E-mail">
          <span>{{ user.email }}</span>
        </Rotulo>

        <Rotulo nome="Senha">
          <span>{{ user.password }}</span>
        </Rotulo>

        <Rotulo nome="Armazenar Dados?">
          <span>{{ user.storage }}</span>
        </Rotulo>
			</div>
		</div>
	</div>
</template>

<script>
import NomeCompleto from './components/NomeCompleto.vue'
import Rotulo from './components/Rotulo.vue'

export default {
	name: 'app',
	components: {
    Rotulo,
    NomeCompleto
  },
  methods: {
    submit() {
      this.isSent = true
    }
  },
  data() {
    return {
      isSent: false,
      user: {
        fullName: {
          name: '',
          surname: '',
        },
        email: '',
        password: '',
        storage: true
      }
    }
  }
}
</script>

<style>

body {
	background-color: #ECECEC;
}

#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;

	display: flex;
	flex-direction: column;
}

.conteudo {
	display: flex;
}

.painel {
	flex: 1;
	background: #FFF;
	margin: 0px 10px;
	padding: 20px;
	border: 1px solid #AAA;
	border-radius: 5px;
}

.painel .cabecalho {
	width: 100%;
	background-color: #DDD;
	padding: 10px 0px;
	border-radius: 5px;
	font-size: 1.4rem;
}

#app form button {
	float: right;
	margin: 10px 0px;
	padding: 10px 20px;
	font-size: 1.4rem;
	border-radius: 5px;
	color: #FFF;
	background-color: #2196F3;
}

#app h1 {
	font-weight: 200;
	margin: 20px;
	padding: 0;
}

.mr-4 {
	margin-right: 40px;
}
</style>
