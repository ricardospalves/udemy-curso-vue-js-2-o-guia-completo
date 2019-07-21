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
        ></b-form-input>

        <hr>

        <b-button
          size="lg"
          variant="primary"
          @click="save"
        >
          Salvar
        </b-button>
      </b-form-group>
    </b-card>
	</div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: '',
        email: ''
      }
    }
  },
  methods: {
    save() {
      console.log(this.user)
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
