<template>
  <div :class="`task ${task.status ? 'is-complete' : ''}`">
    <div class="content">{{ task.titre }}</div>
    <div class="buttons">
      <button @click="toggleStatus(i)">
        {{ task.status ? "Annuler" : "Terminer" }}
      </button>
      <button @click="deleteTask(i)">Supprimer</button>
    </div>
  </div>
</template>

<script setup>
const { task, i, toggleStatus, deleteTask } = defineProps([
  "task",
  "i",
  "toggleStatus",
  "deleteTask",
]);
</script>
