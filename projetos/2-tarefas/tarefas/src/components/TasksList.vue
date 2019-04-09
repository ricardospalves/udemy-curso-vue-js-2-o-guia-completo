<template>
  <div>
    <template v-if="tasks.length">
      <ul class="tasks">
        <Task
          v-for="(task, index) in tasks"
          :key="task.name"
          :task="task"
          @taskDeleted="$emit('taskDeleted', index)"
          @taskStateChanged="$emit('taskStateChanged', index)"
        />
      </ul>
    </template>

    <p v-else>
      Você não possui tarefas!
    </p>
  </div>
</template>

<script>
import Task from './Task.vue'

export default {
  components: {
    Task
  },
  props: {
    tasks: {
      type: Array,
      required: true
    }
  }
}
</script>

<style>
  .tasks {

    text-align: center;
  }
</style>
