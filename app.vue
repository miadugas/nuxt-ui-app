<!-- components/ExampleComponent.vue -->
<template>
  <UContainer>
    <UCard class="mt-10">
      <template #header>
        <div class="flex justify-between">
          <h1>Welcome to Nuxt UI Starter</h1>
          <ColorScheme>
            <USelect v-model="$colorMode.preference" :options="['system', 'light', 'dark']" />
          </ColorScheme>
        </div>
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
        <li v-for="item in items" :key="item._id">{{ item.title }}</li>
        <li v-for="item in items" :key="item._id">{{ item.description }}</li>
      </ul>
      <p v-else>No items found.</p>
    </div>
  </UContainer>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useSanityHelper } from '~/composables/useSanityHelper'

const { fetchData } = useSanityHelper()

const title = ref('My Items')
const items = ref<Array<{ _id: string, title: string, description: string }>>([])
const loading = ref(true)
const error = ref<string | null>(null)

onMounted(async () => {
  try {
    console.log('Mounting component and fetching data')
    const query = '*[_type == "item"] { _id, title , description }'
    console.log('Query:', query)
    
    const result = await fetchData<Array<{ _id: string, title: string , description: string}>>(query)
    console.log('Result from fetchData:', result)
    
    if (result) {
      items.value = result
      console.log('Items set:', items.value)
    } else {
      console.log('No items returned from Sanity')
    }
  } catch (e) {
    console.error('Error in onMounted:', e)
    error.value = e instanceof Error ? e.message : 'An unknown error occurred'
  } finally {
    loading.value = false
  }
})
</script>