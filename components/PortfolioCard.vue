<!-- <template>
  <NuxtLink
    :aria-label="project.title + ' project link'"
    :to="`/portfolio/${project.slug}`"
    target="_blank"
    class="group relative flex cursor-pointer flex-col gap-1 rounded-lg border border-white/10 bg-zinc-900/80 p-1 shadow-2xl shadow-zinc-950/50 backdrop-blur-sm"
  >
    <div class="flex gap-1 px-1 py-[2px]">
      <div class="size-2 rounded-full bg-red-500/90 transition-all duration-300 group-hover:bg-red-500/90 sm:bg-white/10" />
      <div class="size-2 rounded-full bg-yellow-500/90 transition-all duration-300 group-hover:bg-yellow-500/90 sm:bg-white/10" />
      <div class="size-2 rounded-full bg-green-500/90 transition-all duration-300 group-hover:bg-green-500/90 sm:bg-white/10" />
    </div>
    <div class="flex h-56 justify-center overflow-hidden rounded-lg">
      <NuxtImg
        :placeholder="img(project.mainImage)"
        width="1536"
        :alt="project.title + ' project image'"
        class="h-full rounded-lg object-cover transition-all duration-300 hover:scale-105"
        :src="project.mainImage"
        :aria-label="project.title + ' project image'"
      />
    </div>
    <div class="absolute bottom-0 flex w-full justify-center">
      <div class="rounded-t-lg border-x border-t border-white/10 border-b-transparent px-4 py-[5px] shadow-md backdrop-blur-md sm:w-2/3">
        <div class="flex items-center justify-between gap-2">
          <div class="flex items-center gap-2">
            <div class="flex items-center gap-2">
              <span class="whitespace-nowrap text-sm font-semibold text-white/90">
                {{ project.title }}
              </span>
              <span class="whitespace-nowrap text-xs text-neutral-500">
                {{ project.publishedAt }}
              </span>
            </div>
          </div>
          <div
            class="flex items-center justify-center rounded-full border border-transparent p-1 shadow-md backdrop-blur-md transition-all duration-500 group-hover:-rotate-45 group-hover:border-white/10"
          >
            <UIcon
              name="i-heroicons-arrow-right"
              class="size-3 text-white"
            />
          </div>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'

defineProps({
  project: {
    type: Object as PropType<{
      title: string;
      slug: string;
      mainImage: string;
      publishedAt: string;
    }>,
    required: true,
  },
})

const img = useImage()
</script> -->

<!-- 

<template>
<NuxtLink
    :aria-label="project.title + ' project link'"
    :to="/portfolio/${project.slug}"
    target="_blank"
    class="group relative flex cursor-pointer flex-col gap-1 rounded-lg border border-white/10 bg-zinc-900/80 p-1 shadow-2xl shadow-zinc-950/50 backdrop-blur-sm"
  >
    <div class="flex gap-1 px-1 py-[2px]">
      <div class="size-2 rounded-full bg-red-500/90 transition-all duration-300 group-hover:bg-red-500/90 sm:bg-white/10" />
      <div class="size-2 rounded-full bg-yellow-500/90 transition-all duration-300 group-hover:bg-yellow-500/90 sm:bg-white/10" />
      <div class="size-2 rounded-full bg-green-500/90 transition-all duration-300 group-hover:bg-green-500/90 sm:bg-white/10" />
    </div>
    <div class="flex h-56 justify-center overflow-hidden rounded-lg">
      <NuxtImg
        :placeholder="img(project.mainImage)"
        width="1536"
        :alt="project.title + ' project image'"
        class="h-full rounded-lg object-cover transition-all duration-300 hover:scale-105"
        :src="project.mainImage"
        :aria-label="project.title + ' project image'"
      />
    </div>
    <div class="absolute bottom-0 flex w-full justify-center">
      <div class="rounded-t-lg border-x border-t border-white/10 border-b-transparent px-4 py-[5px] shadow-md backdrop-blur-md sm:w-2/3">
        <div class="flex items-center justify-between gap-2">
          <div class="flex items-center gap-2">
            <div class="flex items-center gap-2">
              <span class="whitespace-nowrap text-sm font-semibold text-white/90">
                {{ project.title }}
              </span>
              <span class="whitespace-nowrap text-xs text-neutral-500">
                {{ project.publishedAt }}
              </span>
            </div>
          </div>
          <div
            class="flex items-center justify-center rounded-full border border-transparent p-1 shadow-md backdrop-blur-md transition-all duration-500 group-hover:-rotate-45 group-hover:border-white/10"
          >
            <UIcon
              name="i-heroicons-arrow-right"
              class="size-3 text-white"
            />
          </div>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'

defineProps({
  project: {
    type: Object as PropType<{
      title: string;
      slug: string;
      mainImage: string;
      publishedAt: string;
    }>,
    required: true,
  },
})

const img = useImage()
</script>


<template>
  <div class="flex w-full flex-col gap-4">




    <section class="mx-auto mt-4 flex max-w-4xl flex-col p-7 sm:mt-20">
      <h1 class="font-newsreader italic text-black dark:text-white text-center text-4xl">Selected Works</h1>
      <h2 class="text-center text-lg font-extralight italic text-neutral-600 dark:text-neutral-400 sm:text-medium">
        Projects I've worked on.
      </h2>



      <PortfolioCard 
        v-for="item in portfolio"
        :key="item._id"
        :project="{
          title: item.title,
          slug: item.slug,
          mainImage: item.mainImage,
          publishedAt: item.publishedAt
        }"
        :github="item.github"
        :url="item.url"
        :author="item.author"
        :categories="item.categories"
        :body="item.body"
      />
    </section>
    <div class="rounded-2xl bg-neutral-100 dark:bg-neutral-900 py-6 sm:py-6">
      <div class="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <ul
          role="list"
          class="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
        >
          <li
            v-for="person in people"
            :key="person.name"
            class="rounded-2xl bg-neutral-50 dark:bg-neutral-800 px-8 py-10"
          >
            <img
              class="mx-auto h-48 w-48 rounded-full md:h-56 md:w-56"
              :src="person.imageUrl"
              alt=""
            />
            <h3 class="mt-6 text-base font-semibold leading-7 tracking-tight text-black dark:text-white">
              {{ person.name }}
            </h3>
            <p class="text-sm leading-6 text-neutral-600 dark:text-neutral-400">
              {{ person.role }}
            </p>
            <ul role="list" class="mt-6 flex justify-center gap-x-6">
              <li>
                <a
                  :href="person.githubUrl"
                  class="text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200"
                >
                  <span class="sr-only">Github</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                </a>
              </li>
              <li>
                <a
                  :href="person.siteUrl"
                  class="text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200"
                >
                  <span class="sr-only">Live Demo</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevrons-left-right-ellipsis"><path d="m18 8 4 4-4 4"/><path d="m6 8-4 4 4 4"/><path d="M8 12h.01"/><path d="M12 12h.01"/><path d="M16 12h.01"/></svg>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div> 
  </div>


</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useSanityHelper } from '~/composables/useSanityHelper'
import PortfolioCard from '~/components/PortfolioCard.vue'

const { fetchData } = useSanityHelper()

// const people = [
//   {
//     name: 'L. Krasner',
//     role: 'Senior Designer',
//     imageUrl:
//     'https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
//     githubUrl: '#',
//     siteUrl: '#',
//   },
//   // More people...
// ]

const portfolio = ref<Array<{
  _id: string,
  title: string,
  slug: string,
  github: string,
  url: string,
  author: string,
  mainImage: string,
  categories: Array<{
    title: string
  }>,
  publishedAt: string,
  body: string,
}>>([])

const loading = ref(true)
const error = ref<string | null>(null)
onMounted(async () => {
  try {
    const query = 
*[_type == "portfolio"] {
  _id,
  title,
  slug {
    current
  },
  url,
  github,
  "mainImage": mainImage.asset->_ref,
  _createdAt,
  _updatedAt,
  publishedAt,
  body[] {
    ...,
    children[] {
      text
    }
  }
}

    // *[_type == "portflio"] {
    //   _id, 
    //   title, 
    //   slug, 
    //   github,
    //   url,
    //   "author": author->name,
    //   mainImage,
    //   categories[]->{title},
    //   publishedAt, 
    //   body
    // }

    const result = await fetchData<typeof portfolio.value>(query)

    if (result) {
      console.log('Query results:', JSON.stringify(result, null, 2))
      portfolio.value = result
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
<script setup lang="ts">
const people = [
  {
    name: 'L. Krasner',
    role: 'Senior Designer',
    imageUrl:
    'https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    githubUrl: '#',
    siteUrl: '#',
  },
  // More people...
]
</script>

<style scoped>

</style>






-->