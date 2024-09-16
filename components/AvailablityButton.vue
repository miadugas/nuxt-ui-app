<template>
  <div class="flex justify-center mt-6">
    <!-- Pill-shaped button with availability content -->
    <div
      class="flex items-center justify-center rounded-full bg-gray-500/10 px-5 py-2 text-sm font-semibold leading-6 text-gray-400 ring-1 ring-inset ring-gray-500/20"
      :class="{ 'bg-zinc-900/80': background }"
      style="max-width: 320px; width: 100%;"
    >
      <!-- Rounded pulse inside button -->
      <span class="relative flex size-3">
        <span
          class="absolute inline-flex size-full animate-ping rounded-full opacity-75"
          :class="currentAvailability.color"
        />
        <span
          class="relative inline-flex size-3 scale-90 rounded-full"
          :class="currentAvailability.bgColor"
        />
      </span>
      
      <!-- Text inside button -->
      <span
        class="ml-2 text-sm font-medium text-center"
        :class="currentAvailability.textColor"
      >
        {{ currentAvailability.message }}
      </span>
    </div>
  </div>
</template>
<script setup lang="ts">
const runtimeConfig = useRuntimeConfig().public
const isAvailable = ref<'true' | 'false'>(runtimeConfig.available === 'true' ? 'true' : 'false');

const availability = ref([
  // {
  //   status: 'available',
  //   message: 'Available for hire',
  //   color: 'bg-green-600/80',
  //   bgColor: 'bg-green-500/80',
  //   textColor: 'text-green-500/80',
  // },
  {
    status: 'unavailable',
    message: 'On assignment, not available for hire',
    color: 'bg-red-500',
    bgColor: 'bg-red-400',
    textColor: 'text-red-400',
  },
]);

defineProps({
  background: {
    type: Boolean,
    default: false,
  },
});

const currentAvailability = computed(() => {
  return availability.value.find((a) => a.status === isAvailable.value) || availability.value[0];
});
</script>

<style scoped></style>
