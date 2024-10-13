<template>
  <div class="mx-auto my-2 flex w-full items-center justify-center px-2 sm:px-4 lg:px-6 xl:px-8 mt-4">

    <header class="rounded-full">
      <SpotlightButton
        rounded
        transparent
        :animate="false"
        :class="[
          'border',
          $colorMode.preference === 'dark'
            ? 'border-neutral-700 bg-neutral-800 text-neutral-50'
            : 'border-neutral-300 bg-neutral-300 text-neutral-900',
        ]"
      >
        <nav class="z-10 flex h-12 justify-around gap-2 sm:gap-4 lg:gap-6 p-1 sm:p-2 lg:p-3 transition-all duration-300 ease-in-out">
          <NuxtLink
            v-for="item in navigation"
            :id="item.name.toLowerCase()"
            :key="item.name"
            :aria-label="`${item.name} navigation link`"
            :class="[
              item.to === $route.path
                ? $colorMode.preference === 'dark'
                  ? 'border border-neutral-700 bg-neutral-900/20 text-cyan-500 shadow-lg backdrop-blur-lg'
                  : 'border border-neutral-300 bg-neutral-300/60 dark:bg-neutral-500/60 text-cyan-500 shadow-lg backdrop-blur-lg'
                : $colorMode.preference === 'dark'
                  ? 'text-neutral-400 hover:text-neutral-200'
                  : 'text-neutral-700 hover:text-neutral-900'
            ]"
            :to="item.to"
            class="flex items-center rounded-full border border-transparent px-2 py-1 sm:px-3 sm:py-2 transition-all duration-300 ease-in-out  hover:bg-neutral-800/10 hover:backdrop-blur-xl"
          >
            <UIcon
              :name="item.icon"
              :class="[
                item.to === $route.path
                  ? 'text-cyan-500'
                  : $colorMode.preference === 'dark'
                    ? 'text-neutral-500'
                    : 'text-neutral-700'
              ]"
              class="size-5 sm:size-7 font-light"
            />
          </NuxtLink>
        </nav>
        <Darkmode />
      </SpotlightButton>
    </header>
  </div>
</template>

<script setup lang="ts">
import type { Navigation } from '@/composables/useNavigation'
import Darkmode from './Darkmode.vue'
import SpotlightButton from './SpotlightButton.vue'

defineProps({
  isText: {
    type: Boolean,
    default: false,
  },
})

const navigation = getNavigation('home') as Record<string, Navigation>
</script>
