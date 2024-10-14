
<template>
  <div class="mx-auto max-w-7xl py-6 px-4 lg:flex lg:justify-center lg:items-center lg:gap-x-10 rounded-2xl bg-neutral-200 dark:bg-neutral-800">
    <div class="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
      <div class="mx-auto max-w-xl px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:px-0 ">
        <div>
          <div class="">
            <h2 class="text-3xl lg:text-4xl tracking-tight font-extrabold text-neutral-900 dark:text-neutral-200">
              Latest Personal Build...What's In Flight?
            </h2>
            <p class="text-lg leading-8 text-gray-500 dark:text-gray-400 border-b border-gray-700 pb-4 mt-4 px-4">
              When I have time to work on passion projects, I like to build things that I find to be fun, interesting, and useful. This is a snapshot of some of my not quite done "in flight" projects that I'm working on right now.
            </p>

          </div>
        </div>
      </div>
      <div class="mt-12 sm:mt-16 lg:col-start-1 lg:mt-0">
        <div class="lg:relative lg:h-full">
          <div class="mx-auto max-w-xl px-6 lg:px-0">
            <div class="overflow-hidden rounded-xl shadow-xl ring-1 ring-black ring-opacity-5">
              
              <img class="w-full h-auto object-cover lg:h-full lg:w-full" src="../assets/images/flight.png" alt="Customer profile user interface" />
            </div>
          </div>
          <!-- image gallery -->
          <section class="mt-2">
              <div class="w-full h-full select-none p-2 bg-neutral-900/5 border rounded-lg shadow-md dark:bg-neutral-800 dark:border-gray-900 dark:shadow-lg">
                <div class="max-w-6xl mx-auto duration-1000 delay-300 opacity-0 select-none ease animate-fade-in-view"
                  style="translate: none; rotate: none; scale: none; opacity: 1; transform: translate(0px, 0px);">
                  <ul ref="gallery" id="gallery" class="grid grid-cols-2 gap-3 lg:grid-cols-3">
                    <li v-for="(image, index) in images" :key="index">
                      <img @click="imageGalleryOpen(index)" :src="image.src" :alt="image.alt"
                        class="object-cover select-none w-full h-full cursor-pointer aspect-[16/9] lg:aspect-[4/3] xl:aspect-[3/2] p-2 bg-white dark:bg-neutral-800 rounded-xl shadow-md hover:opacity-40">
                    </li>
                  </ul>
                </div>
                <Teleport to="body">
                  
                  <div v-if="imageGalleryOpened" @click="imageGalleryClose" @keydown.esc="imageGalleryClose"
                    class="fixed inset-0 z-[99] flex items-center justify-center bg-black bg-opacity-50 select-none cursor-zoom-out">
                    <div class="relative flex items-center justify-center w-11/12 xl:w-4/5 h-11/12">
                      <div @click.stop="imageGalleryPrev"
                        class="absolute left-0 flex items-center justify-center text-white -translate-x-10 rounded-full cursor-pointer xl:-translate-x-24 2xl:-translate-x-32 bg-white/10 w-14 h-14 hover:bg-white/20 bg-cyan-300">
                        <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                          stroke-width="1.5" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                      </div>
                      <img v-if="imageGalleryOpened" :src="imageGalleryActiveUrl ?? undefined" alt=""
                        class="object-contain object-center w-full h-full select-none cursor-zoom-out">
                      <div @click.stop="imageGalleryNext"
                        class="absolute right-0 flex items-center justify-center text-white -translate-x-10 rounded-full cursor-pointer xl:translate-x-24 2xl:-translate-x-32 bg-white/10 w-14 h-14 hover:bg-white/20 bg-cyan-300">
                        <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                          stroke-width="1.5" stroke="currentColor">
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
