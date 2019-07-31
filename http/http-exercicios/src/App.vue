<template>
	<div id="app" class="container">
		<h1>HTTP com Axios</h1>

    <b-card>
      <b-form-group
        label="Nome:"
      >
        <b-form-input
          type="text"
          size="lg"
          v-model="user.name"
          placeholder="ex.: Maria"
          autofocus
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        label="E-mail:"
      >
        <b-form-input
          type="email"
          size="lg"
          v-model="user.email"
          placeholder="ex.: maria@exemplo.com"
          required
        ></b-form-input>

        <hr>

        <b-button
          size="lg"
          variant="primary"
          @click="save"
        >
          Salvar
        </b-button>

        <b-button
          size="lg"
          variant="success"
          class="ml-2"
          @click="getUsers"
        >
          Obter usuários
        </b-button>
      </b-form-group>
    </b-card>

    <hr>

    <b-list-group>
      <b-list-group-item
        v-for="(user, id) in registeredUsers"
        :key="id"
      >
        <strong>ID:</strong> {{ id }}<br>
        <strong>Nome:</strong> {{ user.name }}<br>
        <strong>E-mail:</strong> {{ user.email }}<br>

        <b-button
          variant="primary"
          size="lg"
          @click="load(id)"
        >
          Carregar
        </b-button>

        <b-button
          variant="danger"
          size="lg"
          class="ml-2"
          @click="del(id)"
        >
          Deletar
        </b-button>
      </b-list-group-item>
    </b-list-group>
	</div>
</template>

<script>
export default {
  data() {
    return {
      registeredUsers: [],
      id: null,
      user: {
        name: '',
        email: ''
      }
    }
  },
  methods: {
    clear() {
      this.id = null
      this.user.email = ''
      this.user.name = ''
    },
    load(id) {
      this.id = id
      this.user = { ...this.registeredUsers[id] }
    },
    del(id) {
      this.$http.delete(`/user/${id}.json`)
        .then(() => this.clear())
    },
    save() {
      const method = this.id ? 'patch' : 'post'
      const endUrl = this.id ? `/${this.id}.json` : '.json'

      this.$http[method](`/user${endUrl}`, this.user)
        .then(() => this.clear())
    },
    getUsers() {
      this.$http.get('user.json')
        .then(response => {
          this.registeredUsers = response.data
        })
    }
  }
  // created() {
  //   this.$http.post('user.json', {
  //     name: 'Maria',
  //     email: 'maria@maria.maria'
  //   })
  //     .then(response => console.log(response))
  // }
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	font-size: 1.5rem;
}

#app h1 {
	text-align: center;
	margin: 50px;
}
</style>
