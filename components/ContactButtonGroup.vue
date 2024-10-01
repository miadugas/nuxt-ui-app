<template>
  <div>
    <div class="flex flex-col items-center justify-center gap-4 sm:gap-2">
      <div class="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-2">
        <div class="flex">
        </div>

        <div class="flex">
        <button @click="showCalendlyWidget"
                  class="inline-flex items-center gap-x-2 rounded-md bg-cyan-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600">
                  Schedule a Call
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="lucide lucide-calendar-search">
                    <path d="M16 2v4" />
                    <path d="M21 11.75V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.25" />
                    <path d="m22 22-1.875-1.875" />
                    <path d="M3 10h18" />
                    <path d="M8 2v4" />
                    <circle cx="18" cy="18" r="3" />
                  </svg>
                </button>
      </div>
    </div>
  </div>
  </div>

</template>

<script setup lang="ts">
// import SpotlightButton from './SpotlightButton.vue'
const showCalendlyWidget = () => {
  const calendlyURL = 'https://calendly.com/miadugas/30min';
  const windowFeatures =
    'width=800,height=600,status=yes,toolbar=no,menubar=no,location=no,scrollbars=yes';
  const newWindow = window.open('', '_blank', windowFeatures);

  if (newWindow) {
    newWindow.document.write(
      `<html><head><title>Calendly</title></head><body><iframe src="${calendlyURL}" frameborder="0" width="100%" height="100%"></iframe></body></html>`
    );
    newWindow.document.close();
  }
  return false;
};
// function goToLink(link: string) {
//   window.open(link, '_blank', 'noopener,noreferrer');
// }

</script>

<style scoped></style>
