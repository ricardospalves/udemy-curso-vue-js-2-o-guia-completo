<template>
	<div id="app">
		<h1>Tarefas</h1>

    <TasksContainer
      :tasks="tasks"
    />
	</div>
</template>

<script>
import TasksContainer from './components/TasksContainer.vue'

export default {
  components: {
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
