<template>
  <div class="post-container">
    <div v-if="loading" class="loading">
      Loading post...
    </div>
    <div v-else-if="error">
      <p>{{ error }}</p>
    </div>
    <div v-else-if="post">
      <article>
        <h1 class="post-title">{{ post?.title }}</h1>
        <img :src="post?.mainImage" alt="Post image" class="post-image" />
        <div class="post-meta">
          <p>Published on: {{ post?.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : "n/a"}}</p>
          <p>Author: {{ post?.author }}</p>
        </div>
        <div v-html="post?.body" class="post-body"></div>
      </article>
    </div>
    <div v-else>
      <p>Post not found.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useSanityHelper } from '../../composables/useSanityHelper'

const route = useRoute()
const { fetchData, urlFor } = useSanityHelper()
const loading = ref(true)
const error = ref<string | null>(null)
const post = ref<{
  title: string,
  body: string,
  mainImage: string,
  publishedAt: string,
  author: string
} | null>(null)

onMounted(async () => {
  try {
    const slug = route.params.slug
    const query = `*[_type == "post" && slug.current == $slug][0] {
      title,
      body[] {
        ...,
        children[] { text }
      },
      publishedAt,
      "author": author->name,
      mainImage
    }`
    const params = { slug }
    const result = await fetchData<typeof post.value>(query, params)

    if (result) {
      post.value = result
    } else {
      error.value = 'Post not found.'
    }
  } catch (e) {
    console.error('Error fetching post:', e)
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
