<template>
	<div id="app">
		<h1>Tarefas</h1>

    <Progress
      :progress="progress"
    />

    <NewTask
      @taskAdded="addTask"
    />

    <TasksList
      :tasks="tasks"
      @taskDeleted="deleteTask"
      @taskStateChanged="toggleTaskState"
    />
	</div>
</template>

<script>
import Progress from './components/Progress.vue'
import NewTask from './components/NewTask.vue'
import TasksList from './components/TasksList.vue'

export default {
  components: {
    NewTask,
    TasksList,
    Progress
  },
  data() {
    return {
      tasks: []
    }
  },
  watch: {
    tasks: {
      deep: true,
      handler() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks))
      }
    }
  },
  computed: {
    progress() {
      const totalTasks = this.tasks.length
      const completedTasks = this.tasks.filter(task => !task.pending).length

      return Math.round(completedTasks / totalTasks * 100) || 0
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
    },
    deleteTask(index) {
      this.tasks.splice(index, 1)
    },
    toggleTaskState(index) {
      this.tasks[index].pending = !this.tasks[index].pending
    }
  },
  created() {
    const json = localStorage.getItem('tasks')

    this.tasks = JSON.parse(json) || []
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
