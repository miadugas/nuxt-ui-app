<template>
  <div>
    <div class="flex flex-col items-center justify-center gap-4 sm:gap-2">
      <div class="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-2">
        <div class="flex"></div>
        <button @click="goToLink('https://github.com/miadugas')"
          class="inline-flex min-w-[180px] items-center justify-center gap-x-2 rounded-md border-2 border-cyan-500 transition duration-150 
          px-3.5 py-2.5 text-sm font-semibold ease-in-out hover:border-cyan-accent-300 hover:bg-cyan-50/50 hover:text-cyan-accent-300 focus:border-cyan-600 focus:bg-cyan-50/50 focus:text-cyan-600 focus:outline-none focus:ring-0 active:border-cyan-700 active:text-cyan-700 motion-reduce:transition-none text-cyan-600 dark:text-cyan-500 dark:hover:bg-cyan-950 dark:focus:bg-cyan-950">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32" class="flex-shrink-0">
            <path fill="currentColor"
              d="M28.436 15.1c-1.2-.203-2.45-.336-3.466-.372l-.18-.006c.042-.09.073-.15.083-.16c.022-.018.04-.094.042-.168c0-.04.018-.174.046-.35c.276.01.64.018 1.04.02c1.536.013 3.144.137 4.247.332c.657.116.874.112.39-.006c-.492-.12-1.948-.294-3.108-.37a36 36 0 0 0-2.555-.062l.064-.37c.092-.504.123-1.01.125-2.017c.002-1.56-.082-1.99-.59-3.024a5 5 0 0 0-.725-1.104c.247-.73.24-1.858-.015-2.848c-.21-.812-.285-.864-1.02-.708c-.625.133-1.125.314-1.766.637c-.304.153-.722.39-1.025.578c-.79-.277-1.607-.46-2.48-.56c-.883-.1-3.05-.044-3.82.098q-1.124.21-2.04.51c-.307-.188-.75-.443-1.068-.603c-.644-.324-1.144-.504-1.77-.637c-.734-.157-.81-.104-1.02.708c-.26 1.003-.262 2.15-.005 2.878c.03.083.048.142.055.188c-1.042 1.312-1.382 2.78-1.156 4.83c.06.533.15 1.023.278 1.472c-.665-.004-1.61.02-2.294.064c-1.162.077-2.618.25-3.11.37c-.483.117-.268.12.39.006c1.103-.194 2.712-.32 4.248-.33c.29-.002.56-.008.794-.014q.105.355.24.678H7.26c-1.015.036-2.264.17-3.465.37c-.9.152-2.23.454-2.386.54c-.164.092-.03.072.667-.105c1.273-.322 2.928-.57 4.978-.74l.23-.02c.44 1.02 1.117 1.8 2.075 2.41c.586.372 1.525.755 1.998.815c.13.016.508.094.84.172c.333.078.984.195 1.446.262h.01l-.024.016c-.56.29-.924.744-1.17 1.457c-.11.033-.246.078-.394.13c-.53.18-.735.216-1.27.22c-.557.004-.69-.02-1.02-.176a2.97 2.97 0 0 1-1.234-1.134c-.5-.826-1.367-1.41-2.09-1.41c-.616 0-.733.25-.287.615c.672.55 1.174 1.11 1.38 1.538l.397.824c.11.227.342.535.564.748c.522.498 1.026.736 1.778.848c.504.074.628.074 1.223-.002c.287-.035.53-.076.746-.127v.854c0 1.766-.02 2.334-.09 2.5c-.133.316-.43.64-.717.787s-.376.308-.255.456c.068.08.197.094.63.066c.822-.05 1.403-.355 1.7-.89c.094-.173.116-.52.146-2.32c.032-1.952.046-2.14.173-2.42c.076-.165.187-.345.25-.394c.103-.086.11.084.11 2.42c0 2.578-.027 2.89-.285 3.385c-.058.113-.168.26-.245.33c-.135.123-.192.438-.098.533c.155.154.932-.088 1.356-.422c.722-.572.808-1.045.814-4.46l.003-2.005l.22.02l.218.02l.036 2.62c.04 2.952.046 2.995.548 3.565c.285.322.572.5 1.04.64c.624.187.812-.103.392-.606c-.457-.548-.48-.757-.454-3.995c.017-2.076.017-2.076.15-1.955c.283.256.337.676.337 2.623c0 2.418.07 2.648.923 3.07c.4.195.51.22 1.022.22c.544.003.577-.005.597-.147c.017-.115-.05-.193-.304-.348a1.74 1.74 0 0 1-.708-.797c-.055-.126-.092-.958-.117-2.67c-.036-2.394-.044-2.503-.193-2.878c-.2-.504-.508-.902-.897-1.166c-.1-.066-.202-.12-.333-.162q.24-.023.468-.055c1.572-.21 2.403-.384 3.07-.642c1.41-.543 2.365-1.445 2.882-2.724c.046-.114.092-.222.13-.31l.4.034c2.05.173 3.705.42 4.978.743c.698.178.83.2.668.106c-.152-.085-1.482-.386-2.382-.537zm-6.014-.032c-.233.512-.883 1.17-1.408 1.428c-.518.256-1.33.45-2.25.544c-.63.064-4.137.083-4.716.026c-1.917-.188-2.99-.557-3.783-1.296c-.75-.702-1.1-1.655-1.04-2.828c.04-.734.217-1.195.68-1.755c.42-.51.864-.825 1.386-.985c.438-.134 1.78-.146 3.582-.03c.797.05 1.456.05 2.252 0c1.886-.12 3.145-.106 3.61.038c.73.226 1.397.834 1.797 1.644c.18.362.216.516.242 1.075c.036.77-.097 1.587-.35 2.138zm-9.51-3.306c-1.073-.188-1.686 1.65-.863 2.587c.39.444.737.517 1.17.247c.403-.25.62-.72.62-1.328c0-.812-.368-1.408-.928-1.508zm6.513.11c-1.073-.188-1.687 1.647-.864 2.586c.393.445.74.52 1.174.247c.4-.25.62-.72.62-1.328c0-.808-.37-1.406-.93-1.505m-2.886 3.612c-.024.074-.136.184-.25.243c-.285.147-.49.096-.793-.18c-.187-.168-.272-.257-.33-.08c-.052.164.28.493.538.594c.236.095.405.098.66-.01c.255-.105.477-.39.477-.575c0-.172-.247-.164-.303.01zm-.318-.575c.163-.145.2-.44.044-.598s-.473-.133-.597.043c-.145.206-.068.363.035.53c.16.124.375.15.517.024z" />
          </svg>
          Github Repo
        </button>
        <div class="flex">
          <button @click="showCalendlyWidget"
            class="inline-flex min-w-[180px] items-center justify-center gap-x-2 rounded-md bg-cyan-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600">
            Schedule a Call
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="lucide lucide-calendar-search flex-shrink-0">
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
import { Icon } from '#components'

const goToLink = (link: string) => {
  window.open(link, '_blank', 'noopener,noreferrer')
}
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
