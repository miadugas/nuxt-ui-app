<template>
  <component
    :is="as"
    :class="`group relative inline-flex items-center overflow-hidden transition ${
      rounded ? 'rounded-full' : 'rounded-md px-8 py-1'
    } ${
      transparent ? '' : 'bg-neutral-50  dark:bg-neutral-900'
    }`"
  >
    <div
      v-if="animate"
      class="absolute inset-0 flex items-center [container-type:inline-size]"
    >
      <div
        class="absolute size-[100cqw] animate-spin bg-[conic-gradient(from_0_at_50%_50%,rgba(255,255,255,0.5)_0deg,transparent_60deg,transparent_300deg,rgba(255,255,255,0.5)_360deg)] opacity-0 transition duration-300 group-hover:opacity-100"
      />
    </div>

    <div
      class="absolute inset-0.5 bg-neutral-100 dark:bg-neutral-900 sm:bg-neutral-100 sm:backdrop-blur-md"
      :class="`${transparent ? '' : 'bg-neutral-100 dark:bg-neutral-800'} ${rounded ? 'rounded-full' : 'rounded-md'}`"
    />

    <div
      class="absolute bottom-0 left-1/2 h-1/3 w-4/5 -translate-x-1/2 bg-neutral-900/10 dark:bg-neutral/10 opacity-50 blur-md transition-all duration-500 group-hover:h-2/3 group-hover:opacity-100"
      :class="rounded ? 'rounded-full' : 'rounded-md'"
    />

    <slot />
  </component>
</template>

<script setup lang="ts">
defineProps({
  as: {
    type: String,
    default: 'button',
  },
  rounded: {
    type: Boolean,
    default: false,
  },
  animate: {
    type: Boolean,
    default: true,
  },
  transparent: {
    type: Boolean,
    default: false,
  },
})
</script>
