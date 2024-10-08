<template>
  <div class="access-denied-container flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
    <div class="text-center p-8 bg-white dark:bg-gray-800 rounded shadow-md">
      <h1 class="text-4xl font-bold text-red-600 dark:text-red-400 mb-4">Access Denied</h1>
      <p class="text-lg text-gray-500 dark:text-gray-400 mb-6">
        You do not have permission to view this page at the moment.
      </p>
      <NuxtLink
        to="/"
        class="inline-block px-4 py-2 bg-cyan-500 text-white rounded hover:bg-cyan-600 dark:bg-cyan-600 dark:hover:bg-cyan-700"
      >
        Return to Home
      </NuxtLink>
    </div>
  </div>

</template>

<script setup lang="ts">

</script>

<style scoped>

</style>
