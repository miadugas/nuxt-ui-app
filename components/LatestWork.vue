<!-- <template>
  <div class="relative isolate overflow-hidden mx-5"> 
    <div class="relative">
      <div class="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24">
        <div class="mt-12 sm:mt-16 lg:mt-0">
          <div class="-ml-48 pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
            <div class="aspect-w-16 aspect-h-9 lg:aspect-none lg:h-full"> 
              <img class="w-full h-full object-cover rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:w-auto lg:max-w-none" src="../assets/images/fdt.png" alt="Inbox user interface" />
            </div>
          </div>
        </div>
        <div class="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:px-0 lg:py-16">
          <div>
            <div class="mt-6">
              <h2 class="text-3xl lg:text-4xl tracking-tight font-extrabold text-neutral-900 dark:text-neutral-200">
              Latest Work...What's In Flight?
            </h2>
              <p class="text-lg leading-8 text-gray-500 dark:text-gray-400 border-b border-gray-700 pb-4 mt-4">
              When I have time to work on passion projects, I like to build things that I find to be fun, interesting, and useful. This is a showcase of some of my not quite done "in flight" projects that I'm working on right now.
            </p>
            </div>
          </div>
          <div class="mt-8 border-t border-gray-200">
            <blockquote>
              <div>
                <p class="text-base text-gray-500">&ldquo;Cras velit quis eros eget rhoncus lacus ultrices sed diam. Sit orci risus aenean curabitur donec aliquet. Mi venenatis in euismod ut.&rdquo;</p>
              </div>
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
                        class="absolute left-0 flex items-center justify-center text-white -translate-x-10 rounded-full cursor-pointer xl:-translate-x-24 2xl:-translate-x-32 bg-white/10 w-14 h-14 hover:bg-white/20">
                        <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                          stroke-width="1.5" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                      </div>
                      <img v-if="imageGalleryOpened" :src="imageGalleryActiveUrl ?? undefined" alt=""
                        class="object-contain object-center w-full h-full select-none cursor-zoom-out">
                      <div @click.stop="imageGalleryNext"
                        class="absolute right-0 flex items-center justify-center text-white -translate-x-10 rounded-full cursor-pointer xl:translate-x-24 2xl:-translate-x-32 bg-white/10 w-14 h-14 hover:bg-white/20">
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
            </blockquote>
          </div>
          <div class="mt-6">
            <a href="#" class="inline-flex rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700">Get started</a>
          </div>
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


 -->






<!-- <template>
  <div class="mx-auto max-w-7xl">
    <section
      class="bg-neutral-200 rounded-lg border border-gray-200 shadow-md dark:bg-neutral-800 dark:border-gray-700">
      <div class="mx-auto">
        <div class="flex flex-col md:flex-row justify-between items-stretch">
          <div class="w-full md:w-1/2 h-full"> 
            <div class="rounded-full shadow-md dark:bg-neutral-900 dark:border-gray-600 dark:shadow-lg "> 
              <img src="../assets/images/flight.png" alt="flight" class="w-full h-full object-cover rounded-md" />
            </div>
          </div>
          <div class="w-full md:w-1/2 p-4 pb-4 flex flex-col justify-between text-center">
            <h2 class="text-3xl lg:text-4xl tracking-tight font-extrabold text-neutral-900 dark:text-neutral-200">
              Latest Work...What's In Flight?
            </h2>
            <p class="text-lg leading-8 text-gray-500 dark:text-gray-400 border-b border-gray-700 pb-4">
              When I have time to work on passion projects, I like to build things that I find to be fun, interesting, and useful. This is a showcase of some of my not quite done "in flight" projects that I'm working on right now.
            </p>
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
                        class="absolute left-0 flex items-center justify-center text-white -translate-x-10 rounded-full cursor-pointer xl:-translate-x-24 2xl:-translate-x-32 bg-white/10 w-14 h-14 hover:bg-white/20">
                        <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                          stroke-width="1.5" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                      </div>
                      <img v-if="imageGalleryOpened" :src="imageGalleryActiveUrl ?? undefined" alt=""
                        class="object-contain object-center w-full h-full select-none cursor-zoom-out">
                      <div @click.stop="imageGalleryNext"
                        class="absolute right-0 flex items-center justify-center text-white -translate-x-10 rounded-full cursor-pointer xl:translate-x-24 2xl:-translate-x-32 bg-white/10 w-14 h-14 hover:bg-white/20">
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
            <div class="mt-8 flex items-center gap-x-6 justify-center">
          <a href="/about"
            class="rounded-md bg-cyan-500 dark:bg-cyan-400 dark:text-neutral-900 px-3.5 py-2.5 text-sm font-semibold text-neutral-50 shadow-sm hover:bg-cyan-400 dark:hover:bg-cyan-500 dark:hover:text-neutral-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500">
            My Story...So Far
          </a>
        </div>

          </div>
          
        </div>
      </div>
    </section>
  </div>




  <div class="py-12 sm:py-12">
    <section>
      <div class="w-full h-full select-none">
        <div class="max-w-6xl mx-auto duration-1000 delay-300 opacity-0 select-none ease animate-fade-in-view"
          style="translate: none; rotate: none; scale: none; opacity: 1; transform: translate(0px, 0px);">
          <ul ref="gallery" id="gallery" class="grid grid-cols-2 gap-5 lg:grid-cols-5">
            <li v-for="(image, index) in images" :key="index">
              <img @click="imageGalleryOpen(index)" :src="image.src" :alt="image.alt"
                class="object-cover select-none w-full h-auto bg-gray-200 rounded cursor-zoom-in aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4]">
            </li>
          </ul>
        </div>
        <Teleport to="body">
          <div v-if="imageGalleryOpened" @click="imageGalleryClose" @keydown.esc="imageGalleryClose"
            class="fixed inset-0 z-[99] flex items-center justify-center bg-black bg-opacity-50 select-none cursor-zoom-out">
            <div class="relative flex items-center justify-center w-11/12 xl:w-4/5 h-11/12">
              <div @click.stop="imageGalleryPrev"
                class="absolute left-0 flex items-center justify-center text-white translate-x-10 rounded-full cursor-pointer xl:-translate-x-24 2xl:-translate-x-32 bg-white/10 w-14 h-14 hover:bg-white/20">
                <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </div>
              <img v-if="imageGalleryOpened" :src="computedImageGalleryActiveUrl" alt="" class="object-contain object-center w-full h-full select-none cursor-zoom-out">
              <div @click.stop="imageGalleryNext"
                class="absolute right-0 flex items-center justify-center text-white -translate-x-10 rounded-full cursor-pointer xl:translate-x-24 2xl:translate-x-32 bg-white/10 w-14 h-14 hover:bg-white/20">
                <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </div>
            </div>
          </div>
        </Teleport>
      </div>
    </section>
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
</style> -->







<!-- <template> -->
  <!-- <div class="mx-auto max-w-7xl py-3 sm:px-6 sm:py-16 lg:px-0">  -->
    <!-- Removed lg:px-8 to lg:px-0 -->
    <!-- <div class="relative isolate overflow-hidden bg-neutral-200 dark:bg-neutral-800 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-0 lg:pt-0">  -->
      <!-- Changed lg:px-24 to lg:px-0 -->
      
      <!-- SVG Background -->
      <!-- <svg viewBox="0 0 1024 1024" class="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0" aria-hidden="true">
        <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fill-opacity="0.7" />
        <defs>
          <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
            <stop stop-color="#7775D6" />
            <stop offset="1" stop-color="#E935C1" />
          </radialGradient>
        </defs>
      </svg> -->
      
      <!-- Text Content -->
      <!-- <div class="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
        <h2 class="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 sm:text-4xl">
          Latest Personal Build.<br />Start using our app today.
        </h2>
        <p class="mt-6 text-lg leading-8 text-gray-500 dark:text-gray-400">
          Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla.
        </p>
        <div class="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
          <a href="#" class="rounded-md bg-cyan-500 dark:bg-cyan-400 dark:text-neutral-900 px-3.5 py-2.5 text-sm font-semibold text-neutral-50 shadow-sm hover:bg-cyan-400 dark:hover:bg-cyan-500 dark:hover:text-neutral-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500">
            Get started
          </a>
          <a href="#" class="text-sm font-semibold leading-6 text-white">
            Learn more <span aria-hidden="true">→</span>
          </a>
        </div>
      </div> -->
    


<!-- 
      <section class="overflow-hidden bg-neutral-200 dark:bg-neutral-800 sm:grid sm:grid-cols-2 ">
        <div class="p-8 md:p-12 lg:px-16 lg:py-24">
          <div class="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h2
              class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-neutral-900 dark:text-neutral-50 text-center">
              Latest Work...What's In Flight?
            </h2>

            <p class="info-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam
              sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat
              quisque ut interdum tincidunt duis.
            </p>


            <div class="info-buttons">
              <button type="button" class="button-primary">Let's Talk</button>
              <button type="button" class="button-primary">Learn More</button>
            </div>
          </div>
        </div>
        <div class="info-image">
          <Carousel>
            <Slide v-for="slide in 10" :key="slide">
              <div class="carousel__item">{{ slide }}</div>
            </Slide>

            <template #addons>
              <Navigation />
              <Pagination />
            </template>
          </Carousel>
          <img alt=""
            src="../assets/images/flight.png"
             /> 
        </div>
      </section>

    </div>
  </div>
</template>


<script setup lang="ts">
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'





</script>

<style scoped>
.showcase-container {
  background-color: #e5e7eb;
  /* Gray-200 */
  margin-top: 5rem;
  padding-bottom: 5rem;
  padding-top: 2.5rem;
}

.showcase-header {
  margin: 0 2.5rem;
}

.showcase-title {
  margin-bottom: 1rem;
  font-size: 2rem;
  font-weight: 800;
  color: #111827;
  /* Neutral-900 */
  text-align: center;
}

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
  object-fit: contain;
  /* Ensures the images are fully visible */
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

.content-wrapper {
  max-width: 112rem;
  margin: 0 auto;
  padding: 0.75rem 1.5rem 4rem 1.5rem;
}

.content-container {
  position: relative;
  overflow: hidden;
  background-color: #e5e7eb;
  /* Gray-200 */
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.25);
  padding: 4rem 1.5rem;
  border-radius: 1.5rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.info-section {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  background-color: #e5e7eb;
  /* Gray-200 */
}

.info-text {
  padding: 2rem;
}

.info-text-wrapper {
  max-width: 40rem;
  margin: 0 auto;
}

.info-title {
  margin-bottom: 1rem;
  font-size: 2rem;
  font-weight: 800;
  color: #111827;
  /* Neutral-900 */
  text-align: center;
}

.info-description {
  margin-top: 1.5rem;
  font-size: 1.125rem;
  line-height: 2rem;
  color: #6b7280;
  /* Gray-500 */
}

.info-buttons {
  margin-top: 1rem;
}

.button-primary {
  margin: 0.5rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 0.375rem;
  background-color: #06b6d4;
  /* Cyan-500 */
  padding: 0.625rem 1.375rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: #ffffff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: background-color 0.2s ease-in-out;
}

.button-primary:hover {
  background-color: #0891b2;
  /* Cyan-400 */
}

.info-image {
  position: relative;
  width: 100%;
  height: 100%;
}

.info-image img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
}
</style> -->

<!-- <template> -->
  <!-- <div class="mx-auto max-w-7xl py-3 sm:px-6 sm:py-16 lg:px-0">  -->
    <!-- Removed lg:px-8 to lg:px-0 -->
    <!-- <div class="relative isolate overflow-hidden bg-neutral-200 dark:bg-neutral-800 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-0 lg:pt-0">  -->
      <!-- Changed lg:px-24 to lg:px-0 -->
      
      <!-- SVG Background -->
      <!-- <svg viewBox="0 0 1024 1024" class="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0" aria-hidden="true">
        <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fill-opacity="0.7" />
        <defs>
          <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
            <stop stop-color="#7775D6" />
            <stop offset="1" stop-color="#E935C1" />
          </radialGradient>
        </defs>
      </svg> -->
      
      <!-- Text Content -->
      <!-- <div class="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
        <h2 class="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 sm:text-4xl">
          Latest Personal Build.<br />Start using our app today.
        </h2>
        <p class="mt-6 text-lg leading-8 text-gray-500 dark:text-gray-400">
          Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla.
        </p>
        <div class="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
          <a href="#" class="rounded-md bg-cyan-500 dark:bg-cyan-400 dark:text-neutral-900 px-3.5 py-2.5 text-sm font-semibold text-neutral-50 shadow-sm hover:bg-cyan-400 dark:hover:bg-cyan-500 dark:hover:text-neutral-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500">
            Get started
          </a>
          <a href="#" class="text-sm font-semibold leading-6 text-white">
            Learn more <span aria-hidden="true">→</span>
          </a>
        </div>
      </div> -->
      
      <!-- Updated Image Container -->
      <!-- <div class="relative sm:mt-16 flex-1 overflow-hidden">
        <div class="w-full h-full">
          <img 
          class="w-full h-full object-contain rounded-md bg-white/5 ring-1 ring-white/10" 
            src="../assets/images/wif2.png" 
            alt="App screenshot" 
          />
        </div>
      </div>
      
    </div>
  </div> -->
<!-- </template> -->

<!-- <template>
  <div class="mx-auto max-w-7xl py-3 sm:px-6 sm:py-16 lg:px-8"> 
    <div
      class="relative isolate overflow-hidden bg-neutral-200 dark:bg-neutral-800 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-0 lg:pt-0"> -->
      <!-- Changed lg:px-24 to lg:px-0 -->

      <!-- SVG Background -->
      <!-- <svg viewBox="0 0 1024 1024" class="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0" aria-hidden="true">
        <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fill-opacity="0.7" />
        <defs>
          <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
            <stop stop-color="#7775D6" />
            <stop offset="1" stop-color="#E935C1" />
          </radialGradient>
        </defs>
      </svg> -->
<!-- 
      <section class="overflow-hidden bg-neutral-200 dark:bg-neutral-800 sm:grid sm:grid-cols-2 ">
        <div class="p-8 md:p-12 lg:px-16 lg:py-24">
          <div class="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h2
              class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-neutral-900 dark:text-neutral-50 text-center">
              Latest Work...What's In Flight?
            </h2>

            <p class="info-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam
              sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat
              quisque ut interdum tincidunt duis.
            </p>


            <div class="info-buttons">
              <button type="button" class="button-primary">Let's Talk</button>
              <button type="button" class="button-primary">Learn More</button>
            </div>
          </div>
        </div>
        <div class="info-image">
          <Carousel>
            <Slide v-for="slide in 10" :key="slide">
              <div class="carousel__item">{{ slide }}</div>
            </Slide>

            <template #addons>
              <Navigation />
              <Pagination />
            </template>
          </Carousel>
          <img alt=""
            src="../assets/images/flight.png"
             /> 
        </div>
      </section>

    </div>
  </div>
</template>


<script setup lang="ts">
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'





</script>

<style scoped>
.showcase-container {
  background-color: #e5e7eb;
  /* Gray-200 */
  margin-top: 5rem;
  padding-bottom: 5rem;
  padding-top: 2.5rem;
}

.showcase-header {
  margin: 0 2.5rem;
}

.showcase-title {
  margin-bottom: 1rem;
  font-size: 2rem;
  font-weight: 800;
  color: #111827;
  /* Neutral-900 */
  text-align: center;
}

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
  object-fit: contain;
  /* Ensures the images are fully visible */
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

.content-wrapper {
  max-width: 112rem;
  margin: 0 auto;
  padding: 0.75rem 1.5rem 4rem 1.5rem;
}

.content-container {
  position: relative;
  overflow: hidden;
  background-color: #e5e7eb;
  /* Gray-200 */
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.25);
  padding: 4rem 1.5rem;
  border-radius: 1.5rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.info-section {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  background-color: #e5e7eb;
  /* Gray-200 */
}

.info-text {
  padding: 2rem;
}

.info-text-wrapper {
  max-width: 40rem;
  margin: 0 auto;
}

.info-title {
  margin-bottom: 1rem;
  font-size: 2rem;
  font-weight: 800;
  color: #111827;
  /* Neutral-900 */
  text-align: center;
}

.info-description {
  margin-top: 1.5rem;
  font-size: 1.125rem;
  line-height: 2rem;
  color: #6b7280;
  /* Gray-500 */
}

.info-buttons {
  margin-top: 1rem;
}

.button-primary {
  margin: 0.5rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 0.375rem;
  background-color: #06b6d4;
  /* Cyan-500 */
  padding: 0.625rem 1.375rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: #ffffff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: background-color 0.2s ease-in-out;
}

.button-primary:hover {
  background-color: #0891b2;
  /* Cyan-400 */
}

.info-image {
  position: relative;
  width: 100%;
  height: 100%;
}

.info-image img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
}
</style> -->