<template>
  <div class="flex w-full flex-col gap-4">
    <section class="mx-auto mt-4 flex max-w-7xl flex-col py-10">
      <h1 class=" text-neutral-900 dark:text-neutral-50 text-center text-4xl mb-2">
        Selected Works
      </h1>
      <h2 class="text-center text-lg font-extralight text-neutral-600 dark:text-neutral-400 sm:text-medium mb-14">
        Projects I've worked on
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 ">
        <!-- Cards -->
        <div v-for="item in portfolio" :key="item._id" class="portfolio-item group w-full mx-auto bg-neutral-200 dark:bg-neutral-800">
          <!-- Mac like browser -->
          <div class="flex gap-1 px-1 py-[2px] bg-neutral-200 dark:bg-neutral-600 rounded-t-lg ">
            <div class="status-dot status-dot-red" />
            <div class="status-dot status-dot-yellow" />
            <div class="status-dot status-dot-green" />
          </div>

          <div class="portfolio-item-image-container">
            <div v-if="item.mainImage" @click="openModal(item.mainImage)" class="w-full h-full">
              <NuxtImg width="1536" :alt="item.title + ' project image'" class="portfolio-item-image"
                :src="urlFor(item.mainImage).width(800).url()" :aria-label="item.title + ' project image'" />
            </div>
            <div v-else class="flex h-64 justify-center items-center rounded-lg bg-gray-200 dark:bg-gray-800">
              <span class="text-sm text-gray-600 dark:text-gray-400">No Image Available</span>
            </div>
          </div>

          <div class="portfolio-item-footer">
            <NuxtLink :to="`/portfolio/${item.slug?.current || ''}`" target="_blank" class="block">
              <div
                class="rounded-t-lg border-x border-t border-white/10 border-b-transparent px-6 py-3 shadow-md backdrop-blur-md w-full">
                <div class="flex items-center justify-between gap-3">
                  <div class="flex items-center gap-3">
                    <span class="portfolio-item-title">
                      {{ item.title }}
                    </span>
                    <span class="portfolio-item-date">
                      {{ new Date(item.publishedAt).toDateString() }}
                    </span>
                  </div>
                  <div class="portfolio-item-arrow">
                    <UIcon name="i-heroicons-arrow-right" class="w-3 h-3 text-neutral-400 dark:text-gray-600" />
                  </div>
                </div>
              </div>
            </NuxtLink>
          </div>
          <!-- Stack -->
          <div class="portfolio-item-stack">
            <div class="flex items-center gap-3">
              <div class="portfolio-item-categories">
                <span v-for="category in item.categories" :key="category.title" class="portfolio-item-category">
                  {{ category.title }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>

    <!-- Image Modal -->
    <div v-if="modalImage" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      @click="closeModal">
      <div class="max-w-4xl max-h-[90vh] overflow-auto">
        <NuxtImg :src="urlFor(modalImage).url()" alt="Full size image" class="max-w-full max-h-full object-contain"
          @click.stop />
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
  mainImage: string;
  categories: Array<{ title: string }>;
  publishedAt: string;
  body: string;
}>>([]);

const loading = ref(true);
const error = ref<string | null>(null);
const modalImage = ref<string | null>(null);

onMounted(async () => {
  try {
    const query = `*[_type == "portfolio"] {
      _id,
      title,
      slug,
      url,
      github,
      mainImage,
      publishedAt,
      categories[]->{title},
      body[] {
        ...,
        children[] { text }
      }
    }`;

    const result = await fetchData<typeof portfolio.value>(query);
    // console.log('Query results:', result);
    if (result) {
      portfolio.value = result;
    } else {
      console.log('No results returned from the query');
    }
  } catch (e) {
    error.value = e instanceof Error ? e.message : 'An unknown error occurred';
  } finally {
    loading.value = false;
  }
});

const openModal = (image: string) => {
  modalImage.value = image;
};

const closeModal = () => {
  modalImage.value = null;
};
</script>

<style scoped>
/* Add any scoped styles here */
.font-newsreader {
  font-family: "Newsreader", serif;
}

.text-neutral-600 {
  color: "#718096";
}


/* Add more styles as needed */
</style>