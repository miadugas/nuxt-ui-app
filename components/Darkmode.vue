<template>
  <div class="flex justify-center items-center">
    <ColorScheme>
      <USelect
        color: bg-neutral-900

        v-model="$colorMode.preference"
        :options="options"
        class="pill-button"
      >
        <template #option="{ option }">
          <span v-if="option.value === 'light'">🌞</span>
          <span v-else-if="option.value === 'dark'">🌙</span>
          <span v-else>🖥️</span> <!-- For 'system' mode -->
          <span class="ml-2">{{ option.label }}</span>
        </template>
      </USelect>
    </ColorScheme>
  </div>
</template>

<script setup lang="ts">
// Array of options with labels and values
const options = [
  { value: 'system', label: 'System' },
  { value: 'light', label: 'Light' },
  { value: 'dark', label: 'Dark' }
]
</script>

<style scoped>
/* Styles for the pill-shaped button */
.pill-button {
  background-color: var(--u-select-bg, #f0f0f0); /* Optional: Adjust the background color */
  /* border: 2px solid var(--u-select-border, #ccc);  */
  /* Optional: Adjust the border */
  border-radius: 9999px; /* Makes the button pill-shaped */
  margin-right: 1rem;
  /* padding: 0.5rem 1.5rem; */
   /* Adjust padding for the pill effect */
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  cursor: pointer;
  transition: background-color 0.3s, border-color 0.3s;
}

.pill-button:hover {
  background-color: var(--u-select-bg-hover, #e0e0e0); /* Optional: Hover state background color */
  border-color: var(--u-select-border-hover, #bbb); /* Optional: Hover state border color */
}

.ml-2 {
  margin-left: 0.5rem;
}
</style>

