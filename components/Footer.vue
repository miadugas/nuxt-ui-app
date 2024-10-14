<template>
  <footer class="bg-neutral-50 dark:bg-neutral-900">
    <div class="mx-auto max-w-7xl px-6 py-6 md:flex md:items-center md:justify-between lg:px-8">
      <div class="flex justify-center space-x-6 md:order-2">
        <a
          v-for="item in navigation"
          :key="item.name"
          :href="item.href"
          class="text-gray-400 hover:text-cyan-500"
        >
          <span class="sr-only">{{ item.name }}</span>
          <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
        </a>
      </div>
      <div class="mt-8 md:order-1 md:mt-0">
        <p class="text-center text-xs leading-5 text-gray-500 dark:text-gray-400">&copy; 2024 MiaCodes, All rights reserved. Made in Colorado.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { defineComponent, h } from 'vue'

interface NavigationItem {
  name: string
  href: string
  icon: ReturnType<typeof defineComponent>
}

const navigation: NavigationItem[] = [
  {
    name: 'CodePen',
    href: 'https://codepen.io/miadugas',
    icon: defineComponent({
      render: () =>
        h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
          h('path', {
            d: 'M12 2L1 7v10l11 5 11-5V7zm8.7 8.14l-3.25 2.27L20.7 15v-4.86zM12 21.09l-7.52-3.4v-4.86l3.25 2.28L12 17.81v3.28zm-.95-5.18L7.5 13.93l3.55-2.49 3.55 2.49-3.55 2.98zM4.3 10.73V15l3.25-2.27zm7.55-5.44v3.28l-3.53 2.48L4.3 9zm.95 3.28L12 4.91l7.53 3.41v4.86l-3.25-2.27zm3.53 6.49L12.95 15.9v-3.28l3.53 2.48z',
          }),
        ]),
    }),
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/miadugas/',
    icon: defineComponent({
      render: () =>
        h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
          h('path', {
            d: 'M19 3A2 2 0 0 1 21 5v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.07 9H5.91V19h2.16zm-1.08-4c-.75 0-1.37.63-1.37 1.41s.62 1.37 1.37 1.37 1.37-.63 1.37-1.37-.62-1.41-1.37-1.41zM19 19v-5.5c0-2.42-1.53-3.56-3.6-3.56a3.1 3.1 0 0 0-2.82 1.56h-.04v-1.34h-2.15V19h2.16v-5.32c0-1.39.53-2.34 1.86-2.34s1.84 1.11 1.84 2.38V19z',
          }),
        ]),
    }),
  },
  {
    name: 'Dribbble',
    href: 'https://dribbble.com/MiaInBatcountry',
    icon: defineComponent({
      render: () =>
        h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
          h('path', {
            d: "M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10c5.51 0 10-4.48 10-10S15.51 0 10 0m6.605 4.61a8.5 8.5 0 0 1 1.93 5.314c-.281-.054-3.101-.629-5.943-.271c-.065-.141-.12-.293-.184-.445a25 25 0 0 0-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362M10 1.475c2.17 0 4.154.813 5.662 2.148c-.152.216-1.443 1.941-4.48 3.08c-1.399-2.57-2.95-4.675-3.189-5A8.7 8.7 0 0 1 10 1.475m-3.633.803a54 54 0 0 1 3.167 4.935c-3.992 1.062-7.517 1.04-7.896 1.04a8.58 8.58 0 0 1 4.729-5.975M1.453 10.01v-.26c.37.01 4.512.065 8.775-1.215c.25.477.477.965.694 1.453c-.109.033-.228.065-.336.098c-4.404 1.42-6.747 5.303-6.942 5.629a8.52 8.52 0 0 1-2.19-5.705ZM10 18.547a8.48 8.48 0 0 1-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337c.022-.01.033-.01.054-.022a35.3 35.3 0 0 1 1.823 6.475a8.4 8.4 0 0 1-3.341.684m4.761-1.465c-.086-.52-.542-3.015-1.659-6.084c2.679-.423 5.022.271 5.314.369a8.47 8.47 0 0 1-3.655 5.715",
          }),
        ]),
    }),
  },
  {
    name: 'GitHub',
    href: 'https://github.com/miadugas',
    icon: defineComponent({
      render: () =>
        h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
          h('path', {
            'fill-rule': 'evenodd',
            d: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z',
            'clip-rule': 'evenodd',
          }),
        ]),
    }),
  },
  {
    name: 'BlueSky',
    href: 'https://bsky.app/profile/miaelyse.bsky.social',
    icon: defineComponent({
      render: () =>
        h('svg', { fill: 'currentColor', viewBox: '0 0 576 512' }, [
          h('path', {
            d: "M407.8 294.7c-3.3-.4-6.7-.8-10-1.3c3.4.4 6.7.9 10 1.3M288 227.1c-26.1-50.7-97.1-145.2-163.1-191.8C61.6-9.4 37.5-1.7 21.6 5.5C3.3 13.8 0 41.9 0 58.4S9.1 194 15 213.9c19.5 65.7 89.1 87.9 153.2 80.7c3.3-.5 6.6-.9 10-1.4c-3.3.5-6.6 1-10 1.4c-93.9 14-177.3 48.2-67.9 169.9C220.6 589.1 265.1 437.8 288 361.1c22.9 76.7 49.2 222.5 185.6 103.4c102.4-103.4 28.1-156-65.8-169.9c-3.3-.4-6.7-.8-10-1.3c3.4.4 6.7.9 10 1.3c64.1 7.1 133.6-15.1 153.2-80.7C566.9 194 576 75 576 58.4s-3.3-44.7-21.6-52.9c-15.8-7.1-40-14.9-103.2 29.8C385.1 81.9 314.1 176.4 288 227.1",
          }),
        ]),
    }),
  },
  {
    name: 'Substack',
    href: 'https://substack.com/@miadugas',
    icon: defineComponent({
      render: () =>
        h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
          h('path', {
            d: "M22.539 8.242H1.46V5.406h21.08zM1.46 10.812V24L12 18.11L22.54 24V10.812zM22.54 0H1.46v2.836h21.08z",
          }),
        ]),
    }),
  },
]
</script>


<!-- <template> -->
  <!-- <footer class="bg-neutral-50 dark:bg-neutral-900">
    <div class="mx-auto max-w-7xl overflow-hidden px-6 py-6 sm:py-12 lg:px-6"> -->
      <!-- Social Icons Section -->
      <!-- <div class="mt-10 flex justify-center space-x-10">
        <a
          v-for="item in icons"
          :key="item.name"
          :href="item.href"
          class="icon-container"
          aria-label="item.name"
        >
          <img
            :src="item.iconUrl"
            :alt="item.name"
            class="h-6 w-6 transition-all duration-200 ease-in-out hover:fill-cyan-500 hover:brightness-75 "
            aria-hidden="true"
          />
        </a>
      </div> -->

      <!-- Footer Text Section -->
      <!-- 
      <div class="mt-10 flex justify-center space-x-10 text-gray-500">
        <span>Just a Denver Colorado developer, creating awesome one application at a time.</span>
      </div> 
      -->

      <!-- Copyright Section -->
      <!-- <p class="mt-6 text-center text-xs leading-5 text-gray-700">
        &copy; 2024 MiaCodes, All rights reserved. Made in Colorado.
      </p>
    </div>
  </footer>
</template> -->

<!-- <script setup lang="ts">
import { defineComponent } from 'vue';

interface Social {
  name: string;
  href: string;
  iconUrl: string;
}

const icons: Social[] = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/miadugas',
    iconUrl: new URL('../assets/images/linkedin.svg', import.meta.url).href,
  },
  {
    name: 'Github',
    href: '#',
    iconUrl: new URL('../assets/images/github.svg', import.meta.url).href,
  },
  {
    name: 'Dribbble',
    href: '#',
    iconUrl: new URL('../assets/images/dribbble.svg', import.meta.url).href,
  },
  {
    name: 'BlueSky',
    href: '#',
    iconUrl: new URL('../assets/images/bluesky.svg', import.meta.url).href,
  },
  {
    name: 'CodePen',
    href: '#',
    iconUrl: new URL('../assets/images/DeviconCodepen.svg', import.meta.url).href,
  },
];
</script>

<style scoped>
.icon-container img:hover {
  filter: brightness(0) invert(1) sepia(1) saturate(10) hue-rotate(180deg);
}
</style> -->
