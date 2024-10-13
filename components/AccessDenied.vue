<!-- <template> -->
  <!-- <div
    class="access-denied-container flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900"
  >
    <div class="text-center p-8 bg-white dark:bg-gray-800 rounded shadow-md">
      <h1 class="text-4xl font-bold text-red-600 dark:text-red-400 mb-4">
        Access Denied
      </h1>
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
  </div> -->
  <template>
<main class="relative isolate h-screen w-full">

      <!-- Background Image -->
      <img
        src="https://images.unsplash.com/photo-1545972154-9bb223aac798?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3050&q=80&exp=8&con=-15&sat=-75"
        alt="Background Image"
        class="absolute inset-0 -z-10 h-full w-full object-cover object-top"
      />
  
      <!-- Overlay Content -->
      <div class="flex flex-col items-center justify-center min-h-screen px-6 py-32 text-center sm:py-40 lg:px-8">
        <p class="text-base font-semibold leading-8 text-white">403</p>
        <h1 class="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
          Access Denied
        </h1>
        <p class="mt-4 text-base text-white/70 sm:mt-6">
          You do not have permission to view this page at the moment, so here are some mountains instead.
        </p>
        <div class="mt-10">
          <NuxtLink
        to="/"
        class="inline-block px-4 py-2 bg-slate-900 text-white rounded"
      >
        Return to Home
      </NuxtLink>
        </div>
      </div>
    </main>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'NotFound',
  });
  </script>
  
  <style scoped>
  /* Optional: Add any component-specific styles here */
  </style>
  
<!-- </template> -->

<script setup lang="ts"></script>

<style scoped></style>
