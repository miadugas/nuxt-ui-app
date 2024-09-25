<template>
  <div class="relative isolate overflow-hidden">
    <div class="mx-auto max-w-7xl px-6 pb-14 pt-10 sm:pb-12 lg:flex lg:padding-top: 2.5rem">
      <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8 text-center">
        <h1 class="mt-2 text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 sm:text-6xl">
          Nice to meet you!
        </h1>
        <span class="mt-10 text-xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 sm:text-5xl">
          I'm Mia.
        </span>
        <p class="mt-4 text-lg leading-8 text-neutral-600 dark:text-neutral-400">
          Based in Denver, Colorado, I'm a full-stack & lead front-end developer with a passion for bringing innovative ideas
          to life. I have a deep love for creating seamless user experiences.
          I'm not just about writing code...I'm about building impactful, user-centric products that resonate with and
          breathe life into ideas.
        </p>
        <ContactButtonGroup class="mt-4" style="--stagger: 2" data-animate />
        <AvailablityButton class="mt-2" style="--stagger: 2" data-animate />
        <BlogPost />
        <!-- Social Icons -->
        <div class="mt-10 flex items-center gap-x-6">
          <div class="flex space-x-6 md:order-2">
          </div>
        </div>
      </div>
      <!-- Hero Image -->
      <div
        class="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-10 lg:flex lg:items-center lg:max-w-none lg:flex-none xl:ml-32">
        <div class="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
          <div
            class="m-2 rounded-xl bg-neutral-900/5 p-2 ring-1 ring-inset ring-neutral-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
            <div class="w-[40rem] h-[58rem] overflow-hidden">
              <img src="../assets/images/mia-hero-half.png" alt="App screenshot"
                class="w-full h-full object-cover rounded-md shadow-2xl ring-1 ring-neutral-900/10" />
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import BlogPost from './BlogPost.vue';
import AvailablityButton from './AvailablityButton.vue';
import ContactButtonGroup from './ContactButtonGroup.vue';

const heroNavigation = {
  social: [
    { name: 'LinkedIn', href: '#', icon: '' },
    { name: 'GitHub', href: '#', icon: '' },
    { name: 'Dribbble', href: '#', icon: '' },
    { name: 'Bluesky', href: '#', icon: '' },
  ],
};
</script>

<style scoped>
.pulse-svg {
  animation: pulse 2s infinite;
}

@keyframes pulse {

  0%,
  100% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.05);
  }
}
</style>
