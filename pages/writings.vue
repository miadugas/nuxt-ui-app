<template>
  <div class="flex w-full flex-col gap-4">
    <section class="mx-auto mt-4 flex max-w-7xl flex-col p-10">
      <h1 class="text-neutral-900 dark:text-neutral-50 text-center text-4xl mb-2">Writings</h1>
      <h2 class="text-center text-lg font-extralight text-neutral-600 dark:text-neutral-400 sm:text-medium mb-14">
        Tutorials, writings, and musings about things I am passionate about
      </h2>

      <!-- <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        <div v-for="item in items" :key="item._id" class="portfolio-item group w-full mx-auto">
          <div class="flex gap-1 px-1 py-[2px]">
            <div class="status-dot status-dot-red" />
            <div class="status-dot status-dot-yellow" />
            <div class="status-dot status-dot-green" />
          </div>

          <div class="portfolio-item-image-container">
            <div v-if="item.mainImage" class="w-full h-full">
              <NuxtImg width="1536" :alt="item.title + ' project image'" class="portfolio-item-image"
                :src="urlFor(item.mainImage).width(800).url()" :aria-label="item.title + ' project image'" />
            </div>
            <div v-else class="flex h-64 justify-center items-center rounded-lg bg-gray-200 dark:bg-gray-800">
              <span class="text-sm text-gray-600 dark:text-gray-400">No Image Available</span>
            </div>
          </div>

          <div class="portfolio-item-footer">
            <div
              class="rounded-t-lg border-x border-t border-white/10 border-b-transparent px-6 py-3 shadow-md backdrop-blur-md w-full">
              <div class="flex items-center justify-between gap-3">
                <div class="flex items-center gap-3">
                  <span class="portfolio-item-title">
                    {{ item.title }}
                  </span>
                  <span class="portfolio-item-date">
                    {{ new Date(item.publishedAt).toLocaleDateString() }}
                  </span>
                </div>
                <div class="portfolio-item-arrow">
                  <UIcon name="i-heroicons-arrow-right" class="w-3 h-3 text-neutral-400 dark:text-gray-600" />
                </div>
              </div>
            </div>
          </div>

          <div class="portfolio-item-stack">
            <div class="flex items-center gap-3">
              <div class="portfolio-item-categories">
                <span v-for="category in item.categories" :key="category.title" class="portfolio-item-category">
                  {{ category.title }}
                </span>
              </div>
            </div>
          </div>
        
          <div class="flex items-center gap-3 mt-2">
            <div v-if="item.authorImage" class="w-10 h-10 rounded-full overflow-hidden">
              <img :src="item.authorImage" alt="Author's Image" class="w-full h-full object-cover" />
            </div>
            <span class="text-sm">{{ item.author }}</span>
            <span class="text-sm text-gray-500 dark:text-gray-400">{{ item.authorTitle }}</span>
          </div>
        </div>
      </div> -->
      <!-- New Section -->
      <!-- <div class="bg-white py-24 sm:py-32"> -->
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:max-w-4xl">
          <!-- <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
        <p class="mt-2 text-lg leading-8 text-gray-600">Learn how to grow your business with our expert advice.</p> -->
          <article v-for="item in items" :key="item._id"
            class="rounded-2xl bg-neutral-50 dark:bg-neutral-900 relative isolate flex flex-col gap-8 lg:flex-row mb-12 ring-1 ring-neutral-200 dark:ring-neutral-600 ">
            <div class="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
              <div v-if="item.mainImage" class="w-full h-full">
                <NuxtImg width="1536" :alt="item.title + ' project image'"
                  class="portfolio-item-image rounded-tl-2xl rounded-bl-2xl"
                  :src="urlFor(item.mainImage).width(800).url()" :aria-label="item.title + ' project image'" />
              </div>
              <!-- <img :src="item.mainImage" alt=""
                class="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover" /> -->
              <div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
            </div>
            <div class="py-6">
              <div class="flex items-center justify-between gap-x-4 text-xs pr-4">
                <!-- <div class="portfolio-item-stack"> -->
                <!-- <div class="flex items-center gap-3"> -->
                  <div class="portfolio-item-categories">
                    <span v-for="category in item.categories" :key="category.title" class="portfolio-item-category">
                      {{ category.title }}
                    </span>
                  </div>
                <time :datetime="item.publishedAt" class="text-gray-500">{{ new
                  Date(item.publishedAt).toLocaleDateString() }}</time>
                <!-- </div> -->

                <!-- </div> -->
                <!-- <a class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">{{ item.categories }}</a> -->
              </div>
              <div class="group relative max-w-xl">
                <h3
                  class="mt-3 text-xl font-semibold leading-6 text-gray-900 dark:text-gray-100 group-hover:text-cyan-500">
                  <!-- <a :href="post.href"> -->
                  <span class="absolute inset-0" />
                  {{ item.title }}
                  <!-- </a> -->
                </h3>
                <p class="mt-5 leading-6 text-gray-600 dark:text-gray-300 pr-4 text-md">{{ item.excerpt }}</p>
              </div>
              <div class="mt-6 flex border-t border-gray-900/5 pt-6">
                <div class="relative flex items-center gap-x-4">
                  <img :src="item.authorImage" alt="" class="h-10 w-10 rounded-full bg-gray-50 dark:bg-gray-500" />
                  <div class="text-sm leading-6">
                    <p class="font-semibold text-gray-900 dark:text-gray-100">
                      <!-- <a :href="post.author.href"> -->
                      <span class="absolute inset-0" />
                      {{ item.author }}
                      <!-- </a> -->
                    </p>
                    <p class="text-gray-600 dark:text-gray-200">{{ item.authorTitle }}</p>
                  </div>
                </div>
              </div>
            </div>
          </article>

        </div>
      </div>
    </section>
  </div>


  <!-- </div> -->
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useSanityHelper } from '~/composables/useSanityHelper'

const { fetchData, urlFor } = useSanityHelper()
const loading = ref(true)
const error = ref<string | null>(null)

const items = ref<Array<{
  _id: string,
  title: string,
  body: string,
  excerpt: string,
  publishedAt: string,
  categories: Array<{
    title: string
  }>,
  author: string,
  authorImage: string,
  authorTitle: string,
  mainImage: string
}>>([])

onMounted(async () => {
  try {
    const query = `*[_type == "post"] {
      _id, 
      title, 
      body[] {
        ...,
        children[] { text }
      },
      excerpt,
      categories[]->{title},
      publishedAt, 
      "author": author->name,
      "authorImage": author->image.asset->url,
      "authorTitle": author->title,
      mainImage
    }`

    const result = await fetchData<typeof items.value>(query)

    if (result) {
      items.value = result
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

<style scoped></style>