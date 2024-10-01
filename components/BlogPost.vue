<template>
  <section class="rounded-2xl bg-neutral-200 dark:bg-neutral-800 mt-10">
    <div class="py-4 px-4 mx-auto max-w-screen-xl lg:py-6 lg:px-6">
      <div class="rounded-2xl mx-auto max-w-screen-sm text-center mb-6">
        <h2 class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-neutral-900 dark:text-neutral-200">{{
          title }}</h2>
        <p class="font-light text-gray-500 sm:text-medium dark:text-gray-400">
          Tutorials, writings, and musings about things I am passionate about.
        </p>
      </div>
      <div class="grid gap-8 lg:grid-cols-1">

        <article v-for="item in items" :key="item._id"
          class="p-6 bg-white rounded-lg border border-neutral-200 shadow-md dark:bg-neutral-900 dark:border-neutral-900">
          <div class="flex justify-between items-center mb-4 text-gray-500">
 
            <span v-for="category in item.categories" :key="category.title" class="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold leading-6 text-cyan-500 ring-1 ring-inset ring-cyan-500/20">
              {{ category.title }}
            </span>

            <span class="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold leading-6 text-cyan-500 ring-1 ring-inset ring-cyan-500/20">              {{
                new Date(item.publishedAt).toLocaleDateString()
              }}</span>

          </div>
          <h2 class="mb-2 text-2xl font-bold tracking-tight text-neutral-900 dark:text-white ">
            <NuxtLink :to="`/blog/${item.slug.current}`" class="hover:text-cyan-500">
            {{ item.title }}
            </NuxtLink>
          </h2>
          <p class="mb-5 font-light text-gray-500 dark:text-gray-400">{{ item.excerpt }}</p>
          <div class="flex justify-center">

          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useSanityHelper } from '~/composables/useSanityHelper'

const { fetchData } = useSanityHelper()

const title = ref('My Blog Posts')
const items = ref<Array<{
  _id: string,
  title: string,
  excerpt: string,
  slug: { current: string }, 
  publishedAt: string,
  categories: Array<{
    title: string
  }>,
  author: string
}>>([])

const loading = ref(true)
const error = ref<string | null>(null)

const postsToShow = ref(1);

const showMoreButton = computed(() => postsToShow.value );

const showMore = () => {
  window.location.href = '/writings';
};

onMounted(async () => {
  try {
    const query = `*[_type == "post"] | order(publishedAt desc) {
      _id, 
      title, 
      excerpt, 
      slug,
      categories[]->{title},
      publishedAt, 
      "author": author->name
    }`

    const result = await fetchData<typeof items.value>(query)

    if (result && result.length > 0) {
      // console.log('Query results:', JSON.stringify(result, null, 2))
      items.value = [result[0]]
    } else {
      console.log('No results returned from the query')
    }
  } catch (e) {
    console.error('Error fetching data:', e)
    error.value = e instanceof Error ? e.message : 'An unknown error occurred'
  } finally {
    loading.value = false
  }
})

</script>

<style scoped>

</style>
