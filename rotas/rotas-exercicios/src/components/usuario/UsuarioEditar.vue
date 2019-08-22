<template>
  <div class="usuario-editar">
    <h3>
      Usuário Editar
    </h3>

    <p>
      <strong>Código:</strong> {{ id }}
    </p>

    <p>
      <strong>Completo:</strong> {{ $route.query.isCompleted ? 'Sim' : 'Não' }}
    </p>

    <p>
      <strong>Linguagem:</strong> {{ $route.query.language }}
    </p>

    <button
      primario
      @click="isConfirmed = true"
    >
      Confirmar
    </button>

    <div id="rodape">
      <h3>
        Curso Vue
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'id'
  ],
  data() {
    return {
      isConfirmed: false
    }
  },
  beforeRouteLeave(to, from, next) {
    if(this.isConfirmed) {
      next()
    }

    else {
      if(confirm('Tem certeza que deseja sair?')) {
        next()
      }

      else {
        next(false)
      }
    }
  }
}
</script>

<style>
  #rodape {
    margin-top: 1000px;
  }
</style>
