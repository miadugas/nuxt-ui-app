<template>
  <div class="flex flex-col min-h-screen relative">
    <!-- Background color for light and dark mode -->
    <div class="absolute inset-0 -z-20 bg-neutral-50 dark:bg-neutral-900"></div>
    
    <!-- Background SVG -->
    <svg
      class="pulse-svg absolute inset-0 -z-10 h-full w-full stroke-neutral-200 dark:stroke-neutral-600 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
          width="200"
          height="200"
          x="50%"
          y="-1"
          patternUnits="userSpaceOnUse"
        >
          <path d="M.5 200V.5H200" fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        stroke-width="0"
        fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"
      />
    </svg>

    <!-- Header -->
    <Navbar />

    <!-- Page content -->
    <main class="flex-grow container mx-auto px-6 py-8">
      <NuxtPage />
    </main>

    <!-- Footer -->
     <Footer />
  </div>
</template>

<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
</script>

<style scoped>
.pulse-svg {
  animation: pulse 8s infinite;
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
