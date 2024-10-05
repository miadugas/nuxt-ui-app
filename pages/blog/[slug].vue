<template>
  <div v-if="post" class="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
    <h1 class="text-4xl sm:text-3xl font-bold mb-4">{{ post.title }}</h1>
    <img
      v-if="post.mainImage"
      :src="urlFor(post.mainImage).width(800).url()"
      :alt="post.title"
      class="w-full h-auto mb-6 rounded-lg"
    />
    <div class="flex flex-wrap items-center justify-between mb-6">
      <div class="flex items-center mb-4 sm:mb-0">
        <img
          v-if="post.authorImage"
          :src="post.authorImage"
          :alt="post.author"
          class="w-10 h-10 rounded-full mr-4"
        />
        <div>
          <p class="font-semibold text-neutral-600 dark:text-neutral-50">{{ post.author }}</p>
          <p class="text-sm text-neutral-600 dark:text-neutral-50">{{ post.authorTitle }}</p>
        </div>
      </div>
      <p
        class="inline-flex items-center justify-center min-w-[120px] rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold leading-6 text-cyan-500 ring-1 ring-inset ring-cyan-500/20
        md:px-2 md:py-0.5 md:text-xs sm:text-[10px] sm:px-1.5 sm:py-0.5">
        {{ new Date(post.publishedAt).toLocaleDateString() }}
      </p>
    </div>
    <div class="prose dark:prose-invert max-w-none">
      <PortableText :value="post.body" />
    </div>
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>



<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useSanityHelper } from '~/composables/useSanityHelper'
import { PortableText } from '@portabletext/vue'

const route = useRoute()
const { fetchData, urlFor } = useSanityHelper()

interface PostData {
  title: string;
  mainImage: any;  // Update this to match the actual type of mainImage
  body: any[];
  author: string;
  publishedAt: string,
  authorImage: string;
  authorTitle: string;
}

const post = ref<PostData | null>(null)
const loading = ref(true)
const error = ref<string | null>(null)

onMounted(async () => {
  try {
    const query = `*[_type == "post" && slug.current == $slug][0]{
      title,
      mainImage,
      body,
       publishedAt, 
      "author": author->name,
      "authorImage": author->image.asset->url,
      "authorTitle": author->title,
    }`
    const params = { slug: route.params.slug }
    const result = await fetchData<PostData | null>(query, params)

    if (result) {
      post.value = result as PostData
    } else {
      console.log('No post found for this slug')
    }
  } catch (e) {
    console.error('Error fetching post data:', e)
    error.value = e instanceof Error ? e.message : 'An unknown error occurred'
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>
.post-container {
  padding: 2rem;
}

.post-title {
  font-size: 2rem;
  font-weight: bold;
}

.post-image {
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  margin-bottom: 1rem;
}

.post-meta {
  font-size: 0.9rem;
  color: #666;
}

.post-body {
  margin-top: 1rem;
  line-height: 1.6;
}
</style>
