<template>
  <div class="portfolio-container flex w-full flex-col gap-4">
    <section class="mx-auto mt-4 flex max-w-7xl flex-col py-10">
      <h1 class="text-neutral-900 dark:text-neutral-50 text-center text-4xl mb-2">
        Selected Works
      </h1>
      <h2 class="text-center text-lg font-extralight text-neutral-600 dark:text-neutral-400 sm:text-medium mb-14">
        Projects I've worked on
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        <!-- Portfolio Cards -->
        <article
          v-for="item in portfolio"
          :key="item._id"
          class="portfolio-item group w-full mx-auto bg-neutral-200 dark:bg-neutral-800 rounded-lg shadow-md flex flex-col min-h-[480px]"
        >
          <!-- Browser-like Header -->
          <div class="flex gap-1 px-1 py-[2px] bg-neutral-200 dark:bg-neutral-600 rounded-t-lg">
            <span class="status-dot status-dot-red" />
            <span class="status-dot status-dot-yellow" />
            <span class="status-dot status-dot-green" />
          </div>

          <!-- Portfolio Image -->
          <div class="portfolio-item-image-container flex-grow">
            <button
              v-if="item.mainImage"
              @click="openModal(item)"
              class="w-full h-full cursor-pointer focus:outline-none"
              aria-label="Open image modal"
            >
              <img
                :alt="`${item.title} project image`"
                class="portfolio-item-image"
                :src="urlFor(item.mainImage).width(800).url()"
              />
            </button>

            <div
              v-else
              class="flex h-64 justify-center items-center rounded-lg bg-gray-200 dark:bg-gray-800"
            >
              <span class="text-sm text-gray-600 dark:text-gray-400">
                No Image Available
              </span>
            </div>
          </div>

          <!-- Portfolio Item Footer -->
          <div class="portfolio-item-footer p-4">
            <NuxtLink
              :to="`${item.github || ''}`"
              class="block"
            >
              <div
                class="portfolio-card rounded-lg border border-white/10 px-3 py-3 shadow-md backdrop-blur-md w-full mb-4 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition"
              >
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-3">
                    <h3 class="portfolio-item-title font-semibold text-lg">
                      {{ item.title }}
                    </h3>
                    <time
                      class="portfolio-item-date text-sm text-neutral-500"
                      :datetime="item.publishedAt"
                    >
                      {{ new Date(item.publishedAt).toDateString() }}
                    </time>
                  </div>

                  <!-- Right Content: Arrow with Color Change on Hover -->
                  <div >
                    <!-- SVG Arrow Icon -->
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="90"
                      height="32"
                      viewBox="0 0 45 16"
                      class="arrow-icon"
                      aria-hidden="true"
                    >
                      <path
                        fill="currentColor"
                        d="M8.81 7.35v5.74c0 .04-.01.11-.06.13c0 0-1.25.89-3.31.89c-2.49 0-5.44-.78-5.44-5.92S2.58 1.99 5.1 2c2.18 0 3.06.49 3.2.58c.04.05.06.09.06.14L7.94 4.5c0 .09-.09.2-.2.17c-.36-.11-.9-.33-2.17-.33c-1.47 0-3.05.42-3.05 3.73s1.5 3.7 2.58 3.7c.92 0 1.25-.11 1.25-.11v-2.3H4.88c-.11 0-.19-.08-.19-.17V7.35c0-.09.08-.17.19-.17h3.74c.11 0 .19.08.19.17m35.85 2.33c0 3.43-1.11 4.41-3.05 4.41c-1.64 0-2.52-.83-2.52-.83s-.04.46-.09.52c-.03.06-.08.08-.14.08h-1.48c-.1 0-.19-.08-.19-.17l.02-11.11c0-.09.08-.17.17-.17h2.13c.09 0 .17.08.17.17v3.77s.82-.53 2.02-.53l-.01-.02c1.2 0 2.97.45 2.97 3.88M27.68 2.43c.09 0 .17.08.17.17v11.11c0 .09-.08.17-.17.17h-2.13c-.09 0-.17-.08-.17-.17l.02-4.75h-3.31v4.75c0 .09-.08.17-.17.17h-2.13c-.08 0-.17-.08-.17-.17V2.6c0-.09.08-.17.17-.17h2.13c.09 0 .17.08.17.17v4.09h3.31V2.6c0-.09.08-.17.17-.17Zm8.26 3.64c.11 0 .19.08.19.17l-.02 7.47c0 .09-.06.17-.17.17H34.6c-.07 0-.14-.04-.16-.09c-.03-.06-.08-.45-.08-.45s-1.13.77-2.52.77c-1.69 0-2.92-.55-2.92-2.75V6.25c0-.09.08-.17.17-.17h2.14c.09 0 .17.08.17.17V11c0 .75.22 1.09.97 1.09s1.3-.39 1.3-.39V6.26c0-.11.06-.19.17-.19Zm-17.406 5.971h.005a.18.18 0 0 1 .141.179v1.5c0 .07-.03.14-.09.16c-.1.05-.74.22-1.27.22c-1.16 0-2.86-.25-2.86-2.69V8.13h-1.11c-.09 0-.17-.08-.17-.19V6.58c0-.08.05-.15.13-.17c.07-.01 1.16-.28 1.16-.28V3.96c0-.08.05-.13.14-.13h2.16c.09 0 .14.05.14.13v2.11h1.59c.08 0 .16.08.16.17v1.7c0 .11-.07.19-.16.19h-1.59v3.131c0 .47.27.83 1.05.83c.247 0 .481-.049.574-.05M12.24 6.06c.09 0 .17.08.17.17v7.37c0 .18-.05.27-.25.27h-1.92c-.17 0-.3-.07-.3-.27V6.26c0-.11.08-.2.17-.2Zm29.99 3.78c0-1.81-.73-2.05-1.5-1.97c-.6.04-1.08.34-1.08.34v3.52s.49.34 1.22.36c1.03.03 1.36-.34 1.36-2.25M11.19 2.68c.75 0 1.36.61 1.36 1.38s-.61 1.38-1.36 1.38c-.77 0-1.38-.61-1.38-1.38s.61-1.38 1.38-1.38m7.34 9.35l.01.01h-.001l-.005-.001v.001c-.009-.001-.015-.011-.024-.011Z"
                      />
                    </svg>
                  </div>
                </div>
                <p class="portfolio-item-body mt-4">
                  {{ item.excerpt }}
                </p>
              </div>
            </NuxtLink>
            <!-- Stack -->
            <div class="portfolio-item-stack mt-4">
              <ul class="flex flex-wrap items-center gap-3">
                <li
                  v-for="category in item.categories"
                  :key="category.title"
                  class="portfolio-item-category text-sm text-neutral-600 dark:text-neutral-400"
                >
                  {{ category.title }}
                </li>
              </ul>
            </div>
          </div>
        </article>
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

interface PortfolioItem {
  _id: string;
  title: string;
  slug: { current: string };
  github: string;
  url: string;
  author: string;
  mainImage: any;
  categories: Array<{ title: string }>;
  publishedAt: string;
  excerpt: string;
  body: Array<any>;
}

const { fetchData, urlFor } = useSanityHelper();

const portfolio = ref<PortfolioItem[]>([]);

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

    const result = await fetchData<PortfolioItem[]>(query);
    if (result) {
      // Sort by publishedAt in descending order
      portfolio.value = result.sort((a, b) => {
        return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
      });
    }
  } catch (e) {
    error.value =
      e instanceof Error ? e.message : 'An unknown error occurred';
  } finally {
    loading.value = false;
  }
});


const openModal = (item: PortfolioItem) => {
  modalImage.value = item.mainImage;
  modalBody.value = item.body;
};

const closeModal = () => {
  modalImage.value = null;
};

const getBodyText = (body: Array<any>) => {
  if (!body || body.length === 0) return 'No content available';
  return body
    .map((block) => {
      if (block.children && Array.isArray(block.children)) {
        return block.children
          .map((child: { text: string }) => child.text)
          .join(' ');
      }
      return '';
    })
    .join(' ');
};
</script>

<style scoped>
.portfolio-item {
  min-height: 640px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.portfolio-item-arrow {
  flex-shrink: 0;
}

/* Add color change on hover to the arrow icon */
.arrow-icon {
  transition: color 0.3s ease;
  height: 18px;
}

.portfolio-card:hover .arrow-icon {
  color: #00bcd4; /* Change color on hover */
}

/* Accessibility focus styles */
button:focus,
a:focus {
  outline: 2px solid #4b5563; /* Tailwind's gray-700 */
  outline-offset: 2px;
}
</style>
