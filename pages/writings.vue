<template>
  <div class="writings-container flex w-full flex-col gap-8 px-4 md:px-8">
    <section class="mx-auto mt-4 flex max-w-6xl flex-col py-12">
      <h1 class="text-neutral-900 dark:text-neutral-50 text-center text-4xl mb-4">Writings</h1>
      <h2 class="text-center text-lg font-extralight text-neutral-600 dark:text-neutral-400 mb-12">
        Tutorials, writings, and musings about things I am passionate about
      </h2>

      <div class="mx-auto max-w-6xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:max-w-4xl">
          <article
            v-for="item in items"
            :key="item._id"
            class="writing-item rounded-2xl bg-neutral-50 dark:bg-neutral-900 relative isolate flex flex-col lg:flex-row mb-12 ring-1 ring-neutral-200 dark:ring-neutral-600 overflow-hidden"
          >
            <div class="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
              <div v-if="item.mainImage" class="w-full h-full">
                <img
                  width="1536"
                  :alt="item.title + ' project image'"
                  class="writing-item-image rounded-tl-2xl rounded-bl-2xl"
                  :src="urlFor(item.mainImage).width(800).url()"
                  :aria-label="item.title + ' project image'"
                />
              </div>
              <div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
            </div>
            <div class="writing-item-content py-4 lg:py-2">
              <div class="flex items-center justify-between gap-x-4 text-xs p-4">
                <div class="writing-item-categories">
                  <span
                    v-for="category in item.categories"
                    :key="category.title"
                    class="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold leading-6 text-cyan-500 ring-1 ring-inset ring-cyan-500/20"
                  >
                    {{ category.title }}
                  </span>
                </div>
                <time
                  :datetime="item.publishedAt"
                  class="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold leading-6 text-cyan-500 ring-1 ring-inset ring-cyan-500/20"
                >
                  {{ new Date(item.publishedAt).toLocaleDateString() }}
                </time>
              </div>
              <div class="group relative max-w-xl px-4 py-2">
                <h3 class="mt-1 border-gray-900/5 dark:border-neutral-200 text-xl font-semibold leading-6 text-gray-900 dark:text-gray-100 group-hover:text-cyan-500">
                  <NuxtLink :to="`/blog/${item.slug.current}`">
                    {{ item.title }}
                  </NuxtLink>
                </h3>
                <p class="mt-5 leading-6 text-gray-600 dark:text-gray-300 text-md">
                  {{ item.excerpt }}
                </p>
              </div>
              <div class="border-t border-gray-900/5 dark:border-neutral-200 pt-6 px-4">
                <div class="relative flex items-center gap-x-4">
                  <img
                    :src="item.authorImage"
                    alt=""
                    class="h-10 w-10 rounded-full bg-gray-50 dark:bg-gray-500"
                  />
                  <div class="text-sm leading-6">
                    <p class="font-semibold text-gray-900 dark:text-gray-100">
                      {{ item.author }}
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
  slug: { current: string },  
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
  slug,
  categories[]->{title},
  publishedAt, 
  "author": author->name,
  "authorImage": author->image.asset->url,
  "authorTitle": author->title,
  mainImage
}`

    const result = await fetchData<typeof items.value>(query)
    // console.log(result)
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

<style scoped>
.writing-item {
  box-sizing: border-box;
  overflow: hidden;
  width: 100%;
}

.writing-item-content {
  box-sizing: border-box;
  overflow: hidden;
  padding: 1rem;
}

.writing-item-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.writing-item-categories span {
  box-sizing: border-box;
}

/* Accessibility focus styles */
button:focus,
a:focus {
  outline: 2px solid #4b5563; /* Tailwind's gray-700 */
  outline-offset: 2px;
}
</style>
