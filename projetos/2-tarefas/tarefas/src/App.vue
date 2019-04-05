<template>
	<div id="app">
		<h1>Tarefas</h1>

    <NewTask
      @taskAdded="addTask"
    />

    <TasksContainer
      :tasks="tasks"
    />
	</div>
</template>

<script>
import NewTask from './components/NewTask.vue'
import TasksContainer from './components/TasksContainer.vue'

export default {
  components: {
    NewTask,
    TasksContainer
  },
  data() {
    return {
      tasks: [
        {
          name: 'Lorem',
          pending: false
        },
        {
          name: 'Ipsum',
          pending: true
        }
      ]
    }
  },
  methods: {
    addTask(task) {
      const isThereATask = !this.tasks.some(localTask => localTask.name === task.name)

      if(isThereATask) {
        this.tasks.push({
          name: task.name,
          pending: task.pending || true
        })
      }
    }
  }
}
</script>

<style>
  html {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", sans-serif;
    line-height: 1.4;
    box-sizing: border-box;
  }

  *,
  ::before,
  ::after {
    padding: 0;
    margin: 0;
    box-sizing: inherit;
  }
</style>
