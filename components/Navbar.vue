<template>
  <div class="mx-auto my-2 flex w-full items-center justify-center">
    <header class="rounded-full">
      <SpotlightButton
        rounded
        transparent
        :animate="false"
        :class="[
          'border',
          $colorMode.preference === 'dark'
            ? 'border-neutral-700 bg-neutral-800 text-neutral-50'
            : 'border-neutral-300 bg-neutral-100 text-neutral-900',
        ]"
      >
        <nav class="z-10 flex h-[50px] justify-around gap-2 p-1 transition-all duration-300 ease-in-out sm:h-[45px] sm:hover:gap-4">
          <NuxtLink
            v-for="item in navigation"
            :id="item.name.toLowerCase()"
            :key="item.name"
            :aria-label="item.name + ' navigation link'"
            :class="[
              item.to === $route.path
                ? 'border border-white/5 bg-neutral-900/10 text-white/75 shadow-2xl shadow-white/50 backdrop-blur-3xl text-shadow-sm'
                : 'text-muted',
              $colorMode.preference === 'dark'
                ? 'dark:bg-neutral-800/10 dark:text-white/75'
                : 'light:text-black'
            ]"
            :to="item.to"
            class="flex items-center rounded-full border border-transparent px-4 py-1 transition-all duration-300 ease-in-out hover:border-white/5 hover:bg-neutral-900/50 hover:text-main hover:backdrop-blur-3xl sm:px-6"
          >
            <UIcon
              :name="item.icon"
              class="size-7 font-light sm:size-6"
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

<style scoped>
/* Optional: Add transitions or hover styles to enhance the interaction */
</style>
