<template>
  <div>
    <div class="flex flex-col items-center justify-center gap-4 sm:gap-2">
      <div class="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-2">
        <!-- <SpotlightButton > -->
        <!-- <SpotlightButton class="border border-cyan/20 dark:border-cyan/10 backdrop-blur-3xl"> -->
        <!-- <NuxtLink class="cyan-gradient relative flex items-center justify-center gap-2 transition-all duration-200"
            to="/contact"> -->
        <!-- <a
              href="/contact"
              class="font-mona relative flex items-center justify-center gap-2 bg-gradient-to-b from-cyan/25 to-cyan bg-clip-text text-lg font-medium text-transparent transition-all duration-200">
              Let's Talk -->
        <!-- <UIcon name="heroicons:calendar-days" class="size-5 text-cyan/80" /> -->
        <!-- </a>
            Let's Talk -->
        <!-- <UIcon name="heroicons-phone" class="size-5 text-cyan/80" aria-hidden="true" /> -->
        <!-- </NuxtLink> -->
        <div class="flex">
          <!-- <button 
      type="button" 
      class="flex items-center text-white dark:text-black bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      @click="goToLink('your-link-here')">
      Let's Talk
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 ml-2">
        <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
      </svg>
    </button> -->
          <button
            class="rounded-md bg-cyan-500 dark:bg-cyan-400
            dark:text-neutral-900 px-3.5 py-2.5 text-sm font-semibold text-neutral-50 shadow-sm hover:bg-cyan-400
            dark:hover:bg-cyan-500 
            dark:hover:text-neutral-900
            focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500">
            Let's Talk
          </button>
        </div>

        <div class="flex">
          <!-- <button 
      type="button" 
      class="flex items-center text-white dark:text-black bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      @click="goToLink('your-schedule-link-here')">
      Schedule a meeting
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 ml-2">
        <path d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
        <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z" clipRule="evenodd" />
      </svg>
    </button> -->
          <button
            class="rounded-md bg-cyan-500 dark:bg-cyan-400
            dark:text-neutral-900 px-3.5 py-2.5 text-sm font-semibold text-neutral-50 shadow-sm hover:bg-cyan-400 dark:hover:bg-cyan-500
            dark:hover:text-neutral-900
            focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500">
            Schedule a meeting
          </button>
        </div>

        <!-- <SpotlightButton class="border border-cyan/20 dark:border-cyan/10 backdrop-blur-3xl"> -->
        <!-- The button now links directly to Cal with target _blank -->
        <!-- <a
              href="https://cal.com/miadugas/15min"
              target="_blank"
              rel="noopener noreferrer"
              class="font-mona relative flex items-center justify-center gap-2 bg-gradient-to-b from-cyan/25 to-cyan bg-clip-text text-lg font-medium text-transparent transition-all duration-200">
              Schedule a meeting -->
        <!-- <UIcon name="heroicons:calendar-days" class="size-5 text-cyan/80" /> -->
        <!-- </a> -->
        <!-- </SpotlightButton> -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SpotlightButton from './SpotlightButton.vue'

function goToLink(link: string) {
  window.location.href = link;
}
</script>

<style scoped></style>
