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
        <p class="text-center text-xs leading-5 text-gray-500">&copy; 2024 MiaCodes, All rights reserved. Made in Colorado.</p>
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
    href: 'https://codepen.io/',
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
    href: 'https://linkedin.com/',
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
    href: 'https://dribbble.com/',
    icon: defineComponent({
      render: () =>
        h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
          h('path', {
            d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5.94 4.96c2.23 2.08 3.53 5.14 3.25 8.41-.42-.14-2.34-.79-4.48-1.23a14.864 14.864 0 0 0-.29-1.27c-.45-1.38-1.1-2.85-1.9-4.3 1.17-.5 2.07-1.05 2.42-1.61zm-4.97-1.27c.96.95 1.81 2.11 2.53 3.4-.99.34-2.08.75-3.26 1.24a33.62 33.62 0 0 0-2.68-4.28c1.17-.2 2.36-.26 3.41-.36zm-4.9.44a28.44 28.44 0 0 1 2.7 4.27c-3.38 1.08-6.7 2.6-9.2 4.31a8.006 8.006 0 0 1 6.5-8.58zm-5.15 11.7a7.936 7.936 0 0 1-1.32-4.29c2.03-1.43 5.12-2.92 8.62-4.11.35.63.67 1.29.97 1.95-.12.04-.25.08-.37.13-2.48 1.05-4.7 2.26-6.5 3.59.1.68.25 1.35.46 2.03zm2.28 1.65c-.36-.4-.68-.82-.97-1.26 1.63-1.15 3.74-2.3 6.22-3.31.39 1.21.67 2.5.81 3.86-2.25-.23-4.33-.85-6.06-1.89zm7.62 2.27c-.1-1.52-.35-2.98-.76-4.38 1.98.43 3.9.99 5.3 1.5a7.944 7.944 0 0 1-4.54 2.88z',
          }),
        ]),
    }),
  },
  {
    name: 'GitHub',
    href: 'https://github.com/',
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
    href: 'https://bsky.app/',
    icon: defineComponent({
      render: () =>
        h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
          h('path', {
            d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5.94 4.96c2.23 2.08 3.53 5.14 3.25 8.41-.42-.14-2.34-.79-4.48-1.23a14.864 14.864 0 0 0-.29-1.27c-.45-1.38-1.1-2.85-1.9-4.3 1.17-.5 2.07-1.05 2.42-1.61zm-4.97-1.27c.96.95 1.81 2.11 2.53 3.4-.99.34-2.08.75-3.26 1.24a33.62 33.62 0 0 0-2.68-4.28c1.17-.2 2.36-.26 3.41-.36zm-4.9.44a28.44 28.44 0 0 1 2.7 4.27c-3.38 1.08-6.7 2.6-9.2 4.31a8.006 8.006 0 0 1 6.5-8.58zm-5.15 11.7a7.936 7.936 0 0 1-1.32-4.29c2.03-1.43 5.12-2.92 8.62-4.11.35.63.67 1.29.97 1.95-.12.04-.25.08-.37.13-2.48 1.05-4.7 2.26-6.5 3.59.1.68.25 1.35.46 2.03zm2.28 1.65c-.36-.4-.68-.82-.97-1.26 1.63-1.15 3.74-2.3 6.22-3.31.39 1.21.67 2.5.81 3.86-2.25-.23-4.33-.85-6.06-1.89zm7.62 2.27c-.1-1.52-.35-2.98-.76-4.38 1.98.43 3.9.99 5.3 1.5a7.944 7.944 0 0 1-4.54 2.88z',
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
