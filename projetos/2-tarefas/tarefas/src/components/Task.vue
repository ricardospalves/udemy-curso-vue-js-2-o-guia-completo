<template>
  <li
    class="tasks__item"
    :class="stateClass"
    @click="$emit('taskStateChanged', task)"
  >
    {{ task.name }}
    <button
      @click.stop="$emit('taskDeleted', task)"
    >
      Delete
    </button>
  </li>
</template>

<script>
export default {
  props: {
    task: {
      type: Object,
      required: true
    }
  },
  computed: {
    stateClass() {
      return {
        pending: this.task.pending,
        done: !this.task.pending
      }
    }
  }
}
</script>

<style>
  .tasks__item.done {
    text-decoration: line-through;
  }
</style>
