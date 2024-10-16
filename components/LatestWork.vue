
<template>
  <div
    class="mx-auto max-w-7xl py-6 px-4 bg-neutral-200 dark:bg-neutral-800 rounded-2xl lg:flex lg:items-center lg:justify-center lg:gap-x-10"
  >
    <div
      class="lg:mx-auto lg:max-w-7xl lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24 lg:px-8"
    >
      <div class="mx-auto max-w-xl px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:px-0">
        <h2
          class="text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-200 lg:text-4xl"
        >
          Latest Personal Build...What's In Flight?
        </h2>
        <p
          class="mt-4 px-4 pb-4 text-lg leading-8 text-neutral-500 dark:text-neutral-400 border-b border-gray-700"
        >
          When I have time to work on passion projects, I like to build things that I find to be fun,
          interesting, and useful. This is a snapshot of some of my not quite done "in flight"
          projects that I'm working on right now.
        </p>
        <section class="mt-4">
          <div class="container mx-auto px-6">
            <h3
              class="mb-4 text-xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-200"
            >
              Frequently Asked Questions
            </h3>
            <div>
              <div v-for="(item, index) in faqItems" :key="index">
                <button @click="toggleFAQ(index)" class="flex w-full items-center focus:outline-none">
                  <svg
                    :class="[
                      'w-6 h-6 flex-shrink-0 text-cyan-500',
                      { 'transform rotate-45': !item.isOpen }
                    ]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
                  </svg>
                  <h1
                    class="mt-4 px-4 pb-4 text-lg leading-8 text-neutral-500 dark:text-neutral-400"
                  >
                    {{ item.question }}
                  </h1>
                </button>
                <div v-if="item.isOpen" class="flex mt-2 md:mx-10">
                  <span class="border border-cyan-500"></span>
                  <p class="max-w-3xl px-4 text-neutral-500 dark:text-neutral-300 mb-4">
                    {{ item.answer }}
                  </p>
                </div>
                <hr class="my-2 border-gray-200 dark:border-gray-700" />
              </div>
            </div>
          </div>
        </section>
      </div>
      <div class="mt-12 lg:col-start-1 lg:mt-0 sm:mt-16">
        <div class="lg:relative lg:h-full">
          <div class="mx-auto max-w-xl px-6 lg:px-0">
            <div class="overflow-hidden rounded-xl shadow-xl ring-1 ring-black ring-opacity-5">
              <img
                class="w-full h-auto object-cover lg:h-full lg:w-full"
                src="../assets/images/flight.png"
                alt="Customer profile user interface"
              />
            </div>
          </div>
          <!-- Image Gallery -->
          <section class="mt-6">
            <div
              class="w-full h-full p-2 bg-neutral-900/5 border rounded-lg shadow-md select-none dark:bg-neutral-800 dark:border-gray-900 dark:shadow-lg"
            >
              <div
                class="mx-auto max-w-6xl opacity-0 animate-fade-in-view duration-1000 delay-300 ease select-none"
                style="opacity: 1; transform: translate(0px, 0px);"
              >
                <ul ref="gallery" id="gallery" class="grid grid-cols-2 gap-3 lg:grid-cols-3">
                  <li v-for="(image, index) in images" :key="index">
                    <img
                      @click="imageGalleryOpen(index)"
                      :src="image.src"
                      :alt="image.alt"
                      class="w-full h-full p-2 bg-white rounded-xl shadow-md object-cover cursor-pointer aspect-[16/9] select-none hover:opacity-40 dark:bg-neutral-800 lg:aspect-[4/3] xl:aspect-[3/2]"
                    />
                  </li>
                </ul>
              </div>
              <Teleport to="body">
                <div
                  v-if="imageGalleryOpened"
                  @click="imageGalleryClose"
                  @keydown.esc="imageGalleryClose"
                  class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 cursor-zoom-out select-none"
                >
                  <div class="relative flex items-center justify-center w-11/12 h-11/12 xl:w-4/5">
                    <div
                      @click.stop="imageGalleryPrev"
                      class="absolute left-0 flex items-center justify-center w-14 h-14 bg-white/10 rounded-full cursor-pointer text-white -translate-x-10 hover:bg-white/20 xl:-translate-x-24 2xl:-translate-x-32"
                    >
                      <svg
                        class="w-6 h-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                      >
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                      </svg>
                    </div>
                    <img
                      v-if="imageGalleryOpened"
                      :src="computedImageGalleryActiveUrl"
                      alt=""
                      class="w-full h-full object-contain cursor-zoom-out select-none"
                    />
                    <div
                      @click.stop="imageGalleryNext"
                      class="absolute right-0 flex items-center justify-center w-14 h-14 bg-white/10 rounded-full cursor-pointer text-white -translate-x-10 hover:bg-white/20 xl:translate-x-24 2xl:-translate-x-32"
                    >
                      <svg
                        class="w-6 h-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                      >
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Teleport>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import { ref, onMounted } from 'vue';
import image01 from '../assets/images/wif-01.png';
import image02 from '../assets/images/wif-02.png';

interface Image {
  src: string;
  alt: string;
}

const imageGalleryOpened = ref(false);
const imageGalleryActiveUrl = ref<string | null>(null);
const imageGalleryImageIndex = ref<number | null>(null);
const gallery = ref<HTMLElement | null>(null);

const computedImageGalleryActiveUrl = computed(() => imageGalleryActiveUrl.value || undefined);

const images: Image[] = [
  { src: image01, alt: "photo gallery image 01" },
  { src: image02, alt: "photo gallery image 07" },
  // ... add all other images here
];

const imageGalleryOpen = (index: number) => {
  imageGalleryImageIndex.value = index;
  imageGalleryActiveUrl.value = images[index].src;
  imageGalleryOpened.value = true;
};

const imageGalleryClose = () => {
  imageGalleryOpened.value = false;
  setTimeout(() => imageGalleryActiveUrl.value = null, 300);
};

const imageGalleryNext = () => {
  if (imageGalleryImageIndex.value === null) return;

  if (imageGalleryImageIndex.value === images.length - 1) {
    imageGalleryImageIndex.value = 0;

  } else {
    imageGalleryImageIndex.value! += 1;
  }

  imageGalleryActiveUrl.value = images[imageGalleryImageIndex.value].src;
};

const imageGalleryPrev = () => {
  if (imageGalleryImageIndex.value === null) return;

  if (imageGalleryImageIndex.value === 0) {
    imageGalleryImageIndex.value = images.length - 1;
  } else {
    imageGalleryImageIndex.value! -= 1;
  }
  imageGalleryActiveUrl.value = images[imageGalleryImageIndex.value].src;
};

interface FAQItem {
  question: string;
  answer: string;
  isOpen: boolean;
}

const faqItems = ref<FAQItem[]>([
  {
    question: 'What is it and why did you build it?',
    answer: 'I have a finance background and currently work in financial tech so I wanted to build a sort of "know your financing options" type of application. I also wanted to build something that was fun and engaging for users to interact with.',
    isOpen: false
  },
  {
    question: 'What technologies did you use to build this?',
    answer: 'I used Vue 3, Tailwind CSS, and Vite for the front end. For the backend I plan to use Node.js, Express, and MongoDB. I also plan to use the Plaid API for the banking data.',
    isOpen: false
  },
  // {
  //   question: 'What are your opening hours ?',
  //   answer: 'Our opening hours are...',
  //   isOpen: false
  // },
  // {
  //   question: 'Do I need a referral ?',
  //   answer: 'Information about referrals...',
  //   isOpen: false
  // },
  // {
  //   question: 'Is the cost of the appointment covered by private health insurance ?',
  //   answer: 'Information about health insurance coverage...',
  //   isOpen: false
  // }
]);

const toggleFAQ = (index: number) => {
  faqItems.value[index].isOpen = !faqItems.value[index].isOpen;
};

onMounted(() => {
  window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') imageGalleryNext();
    if (e.key === 'ArrowLeft') imageGalleryPrev();
  });
});
</script>


<style scoped>
/* Chevrons inside the carousel (Teleport section) */
.absolute.left-0, .absolute.right-0 {
  top: 50%; /* Align them vertically in the middle of the image */
  transform: translateY(-50%);
}

.absolute.left-0 {
  left: 0.5rem; /* Adjust spacing from the left */
}

.absolute.right-0 {
  right: 0.5rem; /* Adjust spacing from the right */
}

.hover\:opacity-40:hover {
  opacity: 0.6; /* Slightly increase opacity on hover for better contrast */
}

/* Additional layout and style improvements for the showcase */
.showcase-items {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.showcase-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.5rem;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
}

.showcase-item:hover {
  transform: scale(1.05);
}

.showcase-item img {
  width: 100%;
  max-width: 350px;
  margin-bottom: 0.5rem;
}

.showcase-item h1 {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.showcase-item p {
  text-align: center;
  margin-bottom: 0.5rem;
}

.showcase-item a {
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  background-color: #0d47a1;
  color: #fff;
  margin-bottom: 0.5rem;
  transition: background-color 0.2s ease-in-out;
}

.showcase-item a:hover {
  background-color: #0b3e87;
}

@media (max-width: 767px) {
  .showcase-items {
    justify-content: center;
  }

  .showcase-item {
    margin-right: 0;
  }
}

/* Add this new style for aspect ratio support */
.aspect-w-16 {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
}

.aspect-w-16 > img {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  object-fit: cover;
}

@media (min-width: 1024px) {
  .lg\:aspect-none {
    position: static;
    padding-bottom: 0;
  }
  
  .lg\:aspect-none > img {
    position: absolute;
    height: 100%;
    width: auto;
    max-width: none;
  }
}

</style> 
