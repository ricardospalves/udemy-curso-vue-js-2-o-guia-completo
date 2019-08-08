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
          to="/usuario/1"
          active-class="active"
        >
          Usuário 1
        </router-link>
      </li>

      <li>
        <router-link
          to="/usuario/2"
          active-class="active"
        >
          Usuário 2
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
