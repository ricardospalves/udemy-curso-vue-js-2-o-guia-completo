<template>
  <div>
    <input type="text" autofocus v-model="name" @keydown.enter="add">
    <button @click="add">Add</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: ''
    }
  },
  methods: {
    add() {
      this.$emit('taskAdded', { name: this.name })
      this.name = ''
    }
  }
}
</script>

<style>

</style>
