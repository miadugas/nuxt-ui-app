<template>
  <div class="px-2 py-2 h-full bg-cover bg-center bg-fixed backdrop-blur mx-16 my-10">
    <div class="mx-auto max-w-7xl px-4 lg:px-4">
      <div class="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
        <div
          class="mx-auto w-full max-w-xl lg:mx-0 bg-neutral-200 dark:bg-neutral-900 px-12 py-16 rounded-tl-2xl rounded-bl-2xl">
          <h2
            class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-neutral-900 dark:text-neutral-50 text-center">
            I’ve collaborated with some INCREDIBLE companies
          </h2>
          <p class="mt-4 text-lg text-gray-900 dark:text-neutral-50 text-center">
            From Fortune 100 giants that shape industries to innovative startups pushing the boundaries of what's
            possible, I've had the privilege to bring diverse visions to life, delivering impactful results every step of
            the way.
          </p>
          <div class="mt-8 flex items-center gap-x-6 justify-center">
            <a href="/about"
              class="rounded-md bg-cyan-500
              dark:bg-cyan-400
            dark:text-neutral-900
              px-3.5 py-2.5 text-sm font-semibold text-neutral-50 shadow-sm hover:bg-cyan-400
              dark:hover:bg-cyan-500 
              dark:hover:text-neutral-900
              focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500">
              My Story...So Far
            </a>
          </div>
        </div>

        <div
          class="mx-auto grid w-full max-w-xl grid-cols-2 items-center gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-8">
          <div v-for="(client, index) in clients" :key="index" class="flip-container" @mouseover="flipCard(index, true)"
            @mouseleave="flipCard(index, false)">
            <div :class="['flip-card-inner', { flipped: isFlipped[index] }]">
              <div
                class="flip-card-front flex items-center justify-center w-[235px] h-[80px] p-4 bg-white dark:bg-neutral-800 rounded-xl shadow-md">
                <!-- <img :src="client.logo" :alt="client.name" class="max-w-full max-h-full object-contain dark:invert dark:brightness-0 dark:contrast-200" /> -->
                <!-- <NuxtImg :src="client.logo" alt="client.name" width="235" height="80" /> -->
                <img :src="client.logo" :alt="client.name" class="max-w-full max-h-full object-contain dark:invert dark:brightness-0 dark:contrast-200" />
              </div>
              <div
                class="flip-card-back flex items-center justify-center w-[235px] h-[80px] p-4 bg-neutral-200 dark:bg-neutral-800 rounded-xl shadow-md">
                <p class="text-gray-900 dark:text-neutral-50 text-xs">{{ client.info }}</p>
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
// Import each image individually
import rktBigLogo from '../assets/images/rocket.png';
import morganStanleyLogo from '../assets/images/morgan-stanley-logo.png';
import impacMortgageLogo from '../assets/images/Impac_Mortgage_Logo.png';
import hdcLogo from '../assets/images/hdc.png';
import ecLogo from '../assets/images/ec.png';
import cereLogo from '../assets/images/cere.png';
import atrendDataLogo from '../assets/images/atrenddata.png';
import udisLogo from '../assets/images/udi_conag.png';

// Define your clients array with the imported image paths
const clients = [
  { name: 'rocket', logo: rktBigLogo, info: 'With more than $1.5 trillion in home loans since inception & became the first fully digital mortgage experience in 2015.' },
  { name: 'Morgan Stanley', logo: morganStanleyLogo, info: 'A multinational investment bank and financial services company.' },
  { name: 'IMH', logo: impacMortgageLogo, info: 'provides innovative mortgage brokering and real estate solutions that address the challenges of the economic environment.' },
  { name: 'HDC', logo: hdcLogo, info: 'A trusted name in web hosting and managed services since 1997 and a Tier 1 connectivity provider.' },
  { name: 'EC', logo: ecLogo, info: 'A nonprofit that uses data and research to improve social systems social service agencies and organizations across the United States and internationally.' },
  { name: 'Cere', logo: cereLogo, info: 'Augmented Intelligence company that develops a predictive analytics platform to diagnose brain injuries or disorders.' },
  { name: 'AD', logo: atrendDataLogo, info: 'A data warehouse business that partners with corporations across the globe providing tailored data solutions.' },
  { name: 'Udis', logo: udisLogo, info: 'Part of the M & A team of a venture capital firm investing in commodity contracts; one of them was a small Denver company; Udis Healthy Foods.' }
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
  height: 80px;
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
  gap: 3rem;
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
}</style>

