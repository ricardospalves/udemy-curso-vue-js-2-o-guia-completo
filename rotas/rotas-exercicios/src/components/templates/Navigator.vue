<template>
  <nav class="menu">
    <ul>
      <li>
        <router-link
          to="/"
          active-class="active"
          exact
        >
          Home
        </router-link>
      </li>

      <li>
        <router-link
          to="/usuario/10"
          active-class="active"
        >
          Usuário
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {

}
</script>

<style>

</style>
