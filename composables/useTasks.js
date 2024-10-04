import { ref } from 'vue'

export const useTasks = () => {
  const tasks = ref([])

  const addTask = (task) => {
    tasks.value = [{ titre: task, status: false }, ...tasks.value]
  }

  const deleteTask = (index) => {
    tasks.value.splice(index, 1)
  }

  const toggleStatus = (index) => {
    tasks.value[index].status = !tasks.value[index].status
  }

  return {
    tasks,
    addTask,
    deleteTask,
    toggleStatus
  }
}