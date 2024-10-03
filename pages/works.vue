<template>
  <div class="flex w-full flex-col gap-4">
    <section class="mx-auto mt-4 flex max-w-7xl flex-col py-10">
      <h1 class="text-neutral-900 dark:text-neutral-50 text-center text-4xl mb-2">
        Selected Works
      </h1>
      <h2 class="text-center text-lg font-extralight text-neutral-600 dark:text-neutral-400 sm:text-medium mb-14">
        Projects I've worked on
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        <!-- Cards -->
        <div v-for="item in portfolio" :key="item._id" class="portfolio-item group w-full mx-auto bg-neutral-200 dark:bg-neutral-800 rounded-lg shadow-md flex flex-col min-h-[480px]">
          <!-- Mac like browser -->
          <div class="flex gap-1 px-1 py-[2px] bg-neutral-200 dark:bg-neutral-600 rounded-t-lg">
            <div class="status-dot status-dot-red" />
            <div class="status-dot status-dot-yellow" />
            <div class="status-dot status-dot-green" />
          </div>

          <div class="portfolio-item-image-container flex-grow">
            <div v-if="item.mainImage" @click="openModal(item)" class="w-full h-full cursor-pointer">
              <img
                width="1536"
                :alt="item.title + ' project image'"
                class="portfolio-item-image"
                :src="urlFor(item.mainImage).width(800).url()"
                :aria-label="item.title + ' project image'"
              />
            </div>

            <div v-else class="flex h-64 justify-center items-center rounded-lg bg-gray-200 dark:bg-gray-800">
              <span class="text-sm text-gray-600 dark:text-gray-400">No Image Available</span>
            </div>
          </div>

          <div class="portfolio-item-footer p-4">
            <NuxtLink :to="`/portfolio/${item.slug?.current || ''}`" target="_blank" class="block">
              <div class="rounded-lg border border-white/10 px-3 py-3 shadow-md backdrop-blur-md w-full mb-4">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-3">
                    <span class="portfolio-item-title font-semibold text-lg">
                      {{ item.title }}
                    </span>
                    <span class="portfolio-item-date text-sm text-neutral-500">
                      {{ new Date(item.publishedAt).toDateString() }}
                    </span>
                  </div>

                  <!-- Right Content: Arrow -->
                  <div class="portfolio-item-arrow">
                    <UIcon name="i-heroicons-arrow-right" class="w-3 h-3 text-neutral-400 dark:text-gray-200 hover:bg-cyan-500 "  />
                  </div>
                </div>
                <div class="portfolio-item-body mt-4">
                  <span class="block">
                    {{ item.excerpt }}
                  </span>
                </div>
              </div>
            </NuxtLink>
            <!-- Stack -->
            <div class="portfolio-item-stack mt-4">
              <div class="flex flex-wrap items-center gap-3">
                <div class="portfolio-item-categories">
                  <span v-for="category in item.categories" :key="category.title" class="portfolio-item-category text-sm text-neutral-600 dark:text-neutral-400">
                    {{ category.title }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div v-if="modalImage" class="fixed inset-0 bg-neutral-800 bg-opacity-50 flex items-center justify-center z-[1000] px-4 py-4" @click="closeModal">
      <div class="relative bg-neutral-50 dark:bg-neutral-800 p-4 rounded-lg shadow-lg max-w-4xl max-h-[90vh] overflow-auto" @click.stop>
        <button @click="closeModal" class="absolute top-0 right-0 p-2 text-neutral-900 hover:text-neutral-700 dark:text-neutral-200">
          <!-- Close icon -->
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <img :src="urlFor(modalImage).url()" alt="Full size image" class="max-w-full max-h-full object-contain" />
        <div class="mt-6">
          <span class="text-neutral-600 dark:text-neutral-400 text-sm">
            {{ getBodyText(modalBody) }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useSanityHelper } from '~/composables/useSanityHelper';

const { fetchData, urlFor } = useSanityHelper();

const portfolio = ref<Array<{
  _id: string;
  title: string;
  slug: { current: string };
  github: string;
  url: string;
  author: string;
  mainImage: any;
  categories: Array<{ title: string }>;
  publishedAt: string;
  excerpt: string,
  body: Array<any>;
}>>([]);

const loading = ref(true);
const error = ref<string | null>(null);
const modalImage = ref<any>(null);
const modalBody = ref<any>(null);

onMounted(async () => {
  try {
    const query = `*[_type == "portfolio"] {
      _id,
      title,
      slug,
      url,
      github,
      mainImage{
        asset->
      },
      publishedAt,
      categories[]->{title},
      body[] {
        ...,
        children[] { text }
      },
      excerpt,
    }`;

    const result = await fetchData<typeof portfolio.value>(query);
    if (result) {
      portfolio.value = result;
    }
  } catch (e) {
    error.value = e instanceof Error ? e.message : 'An unknown error occurred';
  } finally {
    loading.value = false;
  }
});

const openModal = (item: any) => {
  modalImage.value = item.mainImage;
  modalBody.value = item.body;
};

const closeModal = () => {
  modalImage.value = null;
};

const getBodyText = (body: Array<any>) => {
  if (!body || body.length === 0) return 'No content available';
  return body
    .map(block => {
      if (block.children && Array.isArray(block.children)) {
        return block.children.map((child: { text: string }) => child.text).join(' ');
      }
      return '';
    })
    .join(' ');
};
</script>

<style scoped>
.portfolio-item {
    min-height: 640px; /* Maintain the minimum height */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.portfolio-item-arrow {
    flex-shrink: 0; 
}
</style>
