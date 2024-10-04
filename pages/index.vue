<template>
  <main>
    <h1>Ma To Do List</h1>
    <p>Créer une liste de tâches</p>

    <div class="create-new">
      <input v-model="newTache" @keydown.enter="handleAddTask" />
      <button @click="handleAddTask">Ajouter</button>
    </div>
    <div class="tasks">
      <tache
        v-for="(task, i) in tasks"
        :key="i"
        :task="task"
        :i="i"
        :toggleStatus="toggleStatus"
        :deleteTask="deleteTask"
      />
    </div>
  </main>
</template>

<script setup>
const { tasks, addTask, deleteTask, toggleStatus } = useTasks();
const newTache = ref("");

function handleAddTask() {
  if (newTache.value.trim()) {
    addTask(newTache.value);
    console.log(tasks.value);
    newTache.value = "";
  }
}
</script>
