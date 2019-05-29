<template>
  <div>
    <ul>
      <li
        v-for="fruit in fruits" :key="fruit"
      >
        {{ fruit }}
      </li>
    </ul>

    <input type="text" v-model="fruit" @keydown.enter="add">
  </div>
</template>

<script>
import mixinFruit from './mixinFruit'

export default {
  mixins: [
    mixinFruit
  ]
}
</script>

<style>

</style>
