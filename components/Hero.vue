<template>
  <div class="relative isolate overflow-hidden">
    <div class="mx-auto max-w-7xl pb-14 pt-10 sm:pb-12 lg:flex lg:justify-center lg:items-center lg:gap-x-10 lg:pt-10">
      <!-- Text Content -->
      <div class="flex-1 max-w-2xl text-center lg:max-w-xl lg:flex-shrink-0 lg:pt-8 ">
        <h1 class="mt-2 text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 sm:text-6xl">
          Nice to meet you!
        </h1>
        <span class="mt-10 text-xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 sm:text-5xl">
          I'm Mia.
        </span>
        <p class="mt-4 text-lg leading-8 text-neutral-600 dark:text-neutral-400">
          Based in Denver, Colorado, I'm a full-stack & lead front-end developer with a passion for bringing innovative
          ideas
          to life. I have a deep love for creating seamless user experiences.
          I'm not just about writing code...I'm about building impactful, user-centric products that resonate with and
          breathe life into ideas.
        </p>
        <div class="mt-4 flex flex-col items-center gap-4">
          <ContactButtonGroup class="mt-4" style="--stagger: 2" data-animate />
          <AvailablityButton class="my-4" style="--stagger: 2" data-animate />
        </div>

        <BlogPost class="mt-4" />
        <!-- Social Icons -->
      </div>
      <!-- Hero Image -->
      <div class="flex-1 mt-12 max-w-2xl sm:mt-24 lg:mt-10 lg:flex lg:items-center lg:max-w-none lg:flex-none">
        <div class="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
          <div class="rounded-xl bg-neutral-900/5 p-2 ring-1 ring-inset ring-neutral-900/10">
            <!-- Adjusted Image Container -->
            <div class="w-full h-80 sm:h-96 md:h-[58rem] overflow-hidden">
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
