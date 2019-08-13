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
  </div>
</template>

<script>
export default {
  props: [
    'id'
  ]
}
</script>

<style>

</style>
