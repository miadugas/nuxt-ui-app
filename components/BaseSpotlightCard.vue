<script setup lang="ts">
import { ref, computed } from 'vue'
import { useMouseInElement } from '@vueuse/core'
import type { PropType } from 'vue'

// Define the props with their types and default values
const props = defineProps({
  as: {
    type: String,
    default: 'div',
  },
  from: {
    type: String,
    default: 'rgba(255,255,255,0.8)',
  },
  via: {
    type: String as PropType<string | null>,
    default: null,
  },
  to: {
    type: String,
    default: 'transparent',
  },
  size: {
    type: Number,
    default: 400,
  },
  mode: {
    type: String as PropType<'before' | 'after'>,
    default: 'before',
  },
})

// Reference to the card element
const card = ref<HTMLElement | null>(null)

// Use the useMouseInElement composable to track mouse position within the card
const { elementX, elementY } = useMouseInElement(card)

// Compute the spotlight color stops, filtering out any null or undefined values
const spotlightColorStops = computed(() => {
  return [props.from, props.via, props.to].filter(Boolean).join(',')
})
</script>

<template>
  <component
    :is="props.as"
    ref="card"
    :style="{
      '--x': `${elementX}px`,
      '--y': `${elementY}px`,
      '--spotlight-color-stops': spotlightColorStops,
      '--spotlight-size': `${props.size}px`,
    }"
    :class="{
      'before:absolute before:inset-0 before:bg-[radial-gradient(var(--spotlight-size)_circle_at_var(--x)_var(--y),var(--spotlight-color-stops))]':
        props.mode === 'before',
      'after:absolute after:inset-0 after:bg-[radial-gradient(var(--spotlight-size)_circle_at_var(--x)_var(--y),var(--spotlight-color-stops))]':
        props.mode === 'after',
    }"
    class="relative transform-gpu overflow-hidden"
  >
    <slot />
  </component>
</template>

<style scoped>
/* You can add component-specific styles here if needed */
</style>

