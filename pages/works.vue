<template>
  <div class="portfolio-container flex w-full flex-col gap-8 px-4 md:px-8">
    <section class="mx-auto mt-4 flex max-w-6xl flex-col py-12">
      <h1 class="text-neutral-900 dark:text-neutral-50 text-center text-4xl mb-4">
        Selected Works
      </h1>
      <h2 class="text-center text-lg font-extralight text-neutral-600 dark:text-neutral-400 mb-12">
        Projects I've worked on
      </h2>

      <!-- Platform Selector -->
      <div class="mb-8 flex justify-center">
        <div class="w-full max-w-[400px] text-center">
          <label for="platform-selector" class="block text-sm font-medium leading-6 text-gray-900 dark:text-neutral-50">
            Filter by Platform:
          </label>
          <select id="platform-selector" v-model="selectedPlatform" name="platform"
            class="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 dark:bg-neutral-700 dark:text-neutral-50 dark:ring-neutral-600 sm:text-sm sm:leading-6">
            <option value="">All Platforms</option>
            <option
              v-for="platform in platformOptions"
              :key="platform"
              :value="platform"
            >
              {{ platform }}
            </option>
          </select>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
        <!-- Portfolio Cards -->
        <article
          v-for="item in portfolio"
          :key="item._id"
          class="portfolio-item group w-full mx-auto bg-neutral-200 dark:bg-neutral-800 rounded-lg shadow-md flex flex-col"
        >

          <!-- Browser-like Header -->
          <div class="flex gap-1 px-2 py-1 bg-neutral-200 dark:bg-neutral-600 rounded-t-lg">
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
                class="portfolio-item-image rounded-t-lg"
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
          <div class="portfolio-item-footer p-6">
            <NuxtLink
              :to="`${item.github || ''}`"
              class="block"
            >
              <div
                class="portfolio-card rounded-lg border border-white/10 px-4 py-4 shadow-md backdrop-blur-md w-full mb-4 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition"
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
                  <div>
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
                        d="M8.81 7.35v5.74c0 .04-.01.11-.06.13c0 0-1.25.89-3.31.89c-2.49 0-5.44-.78-5.44-5.92S2.58 1.99 5.1 2c2.18 0 3.06.49 3.2.58c.04.05.06.09.06.14L7.94 4.5c0 .09-.09.2-.2.17c-.36-.11-.9-.33-2.17-.33c-1.47 0-3.05.42-3.05 3.73s1.5 3.7 2.58 3.7c.92 0 1.25-.11 1.25-.11v-2.3H4.88c-.11 0-.19-.08-.19-.17V7.35c0-.09.08-.17.19-.17h3.74c.11 0 .19.08.19.17m35.85 2.33c0 3.43-1.11 4.41-3.05 4.41c-1.64 0-2.52-.83-2.52-.83s-.04.46-.09.52c-.03.06-.08.08-.14.08h-1.48c-.1 0-.19-.08-.19-.17l.02-11.11c0-.09.08-.17.17-.17h2.13c.09 0 .17.08.17.17v3.77s.82-.53 2.02-.53l-.01-.02c1.2 0 2.97.45 2.97 3.88M27.68 2.43c.09 0 .17.08.17.17v11.11c0 .09-.08.17-.17.17h-2.13c-.09 0-.17-.08-.17-.17l.02-4.75h-3.31v4.75c0 .09-.08.17-.17.17h-2.13c-.08 0-.17-.08-.17-.17V2.6c0-.09.08-.17.17-.17h2.13c.09 0 .17.08.17.17v4.09h3.31V2.6c0-.09.08-.17.17-.17Zm8.26 3.64c.11 0 .19.08.19.17l-.02 7.47c0 .09-.06.17-.17.17H34.6c-.07 0-.14-.04-.16-.09c-.03-.06-.08-.45-.08-.45s-1.13.77-2.52.77c-1.69 0-2.92-.55-2.92-2.75V6.25c0-.09.08-.17.17-.17h2.14c.09 0 .17.08.17.17V11c0 .75.22 1.09.97 1.09s1.3-.39 1.3-.39V6.26c0-.11.06-.19.17-.19Z"
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

    <!-- Modal -->
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
  platform: Array<{ title: string }>;
  author: string;
  mainImage: any;
  categories: Array<{ title: string }>;
  publishedAt: string;
  excerpt: string;
  body: Array<any>;
}

const { fetchData, urlFor } = useSanityHelper();

const portfolio = ref<PortfolioItem[]>([]);
const selectedPlatform = ref<string>(''); // Store the selected platform
const platformOptions = ref<string[]>([]); // Store available platforms


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
      platform[]->{title},
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
            // Extract unique platform titles for the dropdown
            const platforms = new Set(result.flatMap(item => item.platform.map(p => p.title)));
      platformOptions.value = Array.from(platforms);

      // Debugging: Log the result and platforms
      console.log('Portfolio:', result);
      console.log('Platforms:', platformOptions.value);
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

// Computed property to filter portfolio items based on the selected platform
const filteredPortfolio = computed(() => {
  if (!selectedPlatform.value) {
    return portfolio.value; // Show all items if no platform is selected
  }
  return portfolio.value.filter(item =>
    item.platform.some(platform => platform.title === selectedPlatform.value)
  );
});
</script>

<style scoped>
.portfolio-item {
  min-height: 640px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
}

.portfolio-item-footer {
  padding: 1rem; /* equivalent to p-4 */
  box-sizing: border-box;
  overflow: hidden; /* Prevent content overflow */
  width: 100%;
}

portfolio-item-stack {
  margin-top: 1rem; /* equivalent to mt-4 */
  padding: 10px;
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

