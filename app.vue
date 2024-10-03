<template>
    <div>
    <!-- Nuxt renders the default layout and page components here -->
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
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
  author: string
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
