<template>
    <div>
    <!-- Nuxt renders the default layout and page components here -->
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
  <!-- <UContainer> -->
    <!-- <Navbar /> -->
    <!-- <UCard class="mt-10">
      <template #header>
        <div class="flex justify-between">
          <h1 class="my-custom-style">Welcome to Nuxt UI Starter</h1> -->
          <!-- <ColorScheme>
            <USelect v-model="$colorMode.preference" :options="['system', 'light', 'dark']" />
          </ColorScheme> -->
        <!-- </div>
      </template>
      <UButton icon="i-heroicons-book-open" to="https://ui.nuxt.com" target="_blank">
        Open Nuxt UI Documentation
      </UButton>
    </UCard>
    <div>
      <h1>{{ title }}</h1>
      <p v-if="loading">Loading...</p>
      <p v-else-if="error">Error: {{ error }}</p>
      <ul v-else-if="items.length">
        <li v-for="item in items" :key="item._id">
          <h2>{{ item.title }}</h2>
          <p>By: {{ item.author }}</p> 
          <p>Published on: {{ new Date(item.publishedAt).toLocaleDateString() }}</p>
          <p>{{ item.excerpt }}</p>
        </li>
      </ul>
      <p v-else>No items found.</p>
    </div>
  </UContainer> -->
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useSanityHelper } from '~/composables/useSanityHelper'
import Navbar from './components/Navbar.vue'
// Helper for fetching data from Sanity
const { fetchData } = useSanityHelper()

const title = ref('My Blog Posts')
const items = ref<Array<{ 
  _id: string, 
  title: string, 
  excerpt: string, 
  publishedAt: string, 
  author: string // Fetching author name directly as a string
}>>([])

const loading = ref(true)
const error = ref<string | null>(null)

onMounted(async () => {
  try {
    // Updated query to fetch the author's name correctly
    const query = `*[_type == "post"] {
      _id, 
      title, 
      excerpt, 
      publishedAt, 
      "author": author->name // Dereferencing the author reference to get the name
    }`
    
    const result = await fetchData<Array<{ 
      _id: string, 
      title: string, 
      excerpt: string, 
      publishedAt: string, 
      author: string // Ensuring author is fetched as a string
    }>>(query)
    
    if (result) {
      items.value = result
    }
  } catch (e) {
    error.value = e instanceof Error ? e.message : 'An unknown error occurred'
  } finally {
    loading.value = false
  }
})
</script>
