<template>
  <div class="relative isolate overflow-hidden">
    <div class="mx-auto max-w-7xl pt-4 px-4 lg:flex lg:justify-center lg:items-center lg:gap-x-10 rounded-2xl bg-neutral-200 dark:bg-neutral-800 pb-10">
      <!-- Text Content -->
      <div class="flex-1 max-w-2xl text-center lg:max-w-xl lg:flex-shrink-0 lg:pt-8 ">
        <h1 class="mt-4 text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 sm:text-6xl">
          I’ve collaborated with some INCREDIBLE companies
        </h1>
        <p class="mt-4 text-lg leading-8 text-gray-500 dark:text-gray-400">
          From Fortune 100 giants that shape industries to innovative startups pushing the boundaries of what's
          possible, I've had the privilege to bring diverse visions to life, delivering impactful results every step of
          the way.
        </p>
        <div class="mt-4 flex items-center gap-x-6 justify-center">
          <a href="/about"
            class="rounded-md bg-cyan-500 dark:bg-cyan-400 dark:text-neutral-900 px-4 py-2 text-sm font-semibold text-neutral-50 shadow-sm hover:bg-cyan-400 dark:hover:bg-cyan-500 dark:hover:text-neutral-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500">
            My Story...So Far
          </a>
        </div>
      </div>
      <!-- Client Logos and Flip Cards -->
      <div class="flex-1 max-w-2xl lg:flex lg:items-center lg:max-w-none lg:flex-none">
        <div class="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none rounded-2xl bg-neutral-100 dark:bg-neutral-900 mt-8">
          <div class="rounded-xl bg-neutral-900/5 p-4 ring-1 ring-inset ring-neutral-900/10">
            <!-- Adjusted Flip Cards Container -->
            <div class="grid w-full max-w-xl grid-cols-2 items-center gap-4 lg:max-w-none sm:p-4">
              <div v-for="(client, index) in clients" :key="index" class="flip-container" @mouseover="flipCard(index, true)"
                @mouseleave="flipCard(index, false)">
                <div :class="['flip-card-inner', { flipped: isFlipped[index] }]">
                  <div
                    class="flip-card-front flex items-center justify-center w-[235px] h-[80px] p-4 bg-white dark:bg-neutral-800 rounded-xl shadow-md">
                    <img :src="client.logo" :alt="client.name"
                      class="max-w-full max-h-full object-contain dark:invert dark:brightness-0 dark:contrast-200" />
                  </div>
                  <div
                    class="flip-card-back flex items-center justify-center w-[235px] h-[80px] p-4 bg-neutral-200 dark:bg-neutral-600 rounded-xl shadow-md">
                    <img :src="client.industryIcon" :alt="client.name"
                      class="max-w-full max-h-full object-contain dark:invert dark:brightness-0 dark:contrast-200" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import { ref } from 'vue';
import rktBigLogo from '../assets/images/rocket.png';
import morganStanleyLogo from '../assets/images/morgan-stanley-logo.png';
import impacMortgageLogo from '../assets/images/Impac_Mortgage_Logo.png';
import ecLogo from '../assets/images/ec.png';
import cereLogo from '../assets/images/cere.png';
import atrendDataLogo from '../assets/images/atrenddata.png';
import financeIcon from '../assets/images/fintech.png';
import dataIcon from '../assets/images/bgDta.png';
import nonProfitIcon from '../assets/images/nonproft.png';
import medicalIcon from '../assets/images/medTech.png';

const clients = [
  { name: 'rocket', logo: rktBigLogo, industryIcon: financeIcon },
  { name: 'Morgan Stanley', logo: morganStanleyLogo, industryIcon: financeIcon },
  { name: 'IMH', logo: impacMortgageLogo, industryIcon: financeIcon },
  { name: 'EC', logo: ecLogo, industryIcon: nonProfitIcon },
  { name: 'Cere', logo: cereLogo, industryIcon: medicalIcon },
  { name: 'AD', logo: atrendDataLogo, industryIcon: dataIcon },
];

const isFlipped = ref(new Array(clients.length).fill(false));

const flipCard = (index: number, flip: boolean) => {
  isFlipped.value[index] = flip;
};
</script>

<style scoped>
.flip-container {
  perspective: 1000px;
  display: flex;
  justify-content: center;
}

.flip-card-inner {
  width: 235px;
  height: 140px;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  position: relative;
}

.flipped {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
}

.flip-card-back {
  transform: rotateY(180deg);
}

/* Ensuring spacing between cards remains the same */
.grid {
  gap: 1rem;
}

/* Dark Overlay for better readability */
.relative.bg-gray-900::before {
  content: "";
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1;
}

/* Grayscale filter with brightness adjustment */
.grayscale-filter {
  filter: grayscale(100%) brightness(1.5);
  opacity: 0.7;
  /* Adjust the opacity if needed */
}

.shift-center {
  transform: translateX(30px);
}
</style>
