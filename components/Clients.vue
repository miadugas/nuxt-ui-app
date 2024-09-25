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
          class="mx-auto grid w-full max-w-xl grid-cols-2 items-center gap-y-4 sm:gap-y-4 lg:mx-0 lg:max-w-none lg:pl-8">
          <div v-for="(client, index) in clients" :key="index" class="flip-container" @mouseover="flipCard(index, true)"
            @mouseleave="flipCard(index, false)">
            <div :class="['flip-card-inner', { flipped: isFlipped[index] }]">
              <div
                class="flip-card-front flex items-center justify-center w-[235px] h-[80px] p-4 bg-white dark:bg-neutral-800 rounded-xl shadow-md">
                <img :src="client.logo" :alt="client.name" class="max-w-full max-h-full object-contain dark:invert dark:brightness-0 dark:contrast-200" />
              </div>
              <div
                class="flip-card-back flex items-center justify-center w-[235px] h-[80px] p-4 bg-neutral-200 dark:bg-neutral-600 rounded-xl shadow-md">
                <img :src="client.industryIcon" :alt="client.name" class="max-w-full max-h-full object-contain dark:invert dark:brightness-0 dark:contrast-200" />
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

import financeIcon from '../assets/images/fintech.png';
import techIcon from '../assets/images/dataCtr.png';
import dataIcon from '../assets/images/bgDta.png';
import foodIcon from '../assets/images/healthyFood.png';
import nonProfitIcon from '../assets/images/nonproft.png';
import medicalIcon from '../assets/images/medTech.png';


// Define your clients array with the imported image paths
const clients = [
  // { name: 'rocket', logo: rktBigLogo, info: 'More than $1.5 trillion in home loans since inception & became known for providing the first fully digital mortgage experience in 2015.' },
  // { name: 'Morgan Stanley', logo: morganStanleyLogo, info: 'A multinational investment bank and financial services company. Part of the Aquisition of Saxon Mortgage Holdings, a provider of servicing and subservicing of residential mortgage loans.' },
  // { name: 'IMH', logo: impacMortgageLogo, info: 'Provider of innovative mortgage lending, servicing, portfolio loss mitigation, real estate services, and management of the securitized long-term mortgage portfolios.' },
  // { name: 'HDC', logo: hdcLogo, info: 'A trusted name in web hosting and managed services since 1997 and a Tier 1 connectivity provider.' },
  // { name: 'EC', logo: ecLogo, info: 'A nonprofit that uses data and research to improve social systems, social service agencies and organizations across the United States and internationally.' },
  // { name: 'Cere', logo: cereLogo, info: 'Augmented Intelligence company that developed a web based predictive analytics platform to diagnose brain injuries or disorders.' },
  // { name: 'AD', logo: atrendDataLogo, info: 'A data warehouse business that partners with corporations across the globe providing tailored data solutions.' },
  // { name: 'Udis', logo: udisLogo, info: 'Brought in as part of the M & A team of a vc firm investing in commodity contracts; one of them was a local Denver company, Udis Healthy Foods.' }
  { name: 'rocket', logo: rktBigLogo, industryIcon: financeIcon},
  { name: 'Morgan Stanley', logo: morganStanleyLogo, industryIcon: financeIcon },
  { name: 'IMH', logo: impacMortgageLogo, industryIcon: financeIcon },
  { name: 'HDC', logo: hdcLogo, industryIcon: techIcon },
  { name: 'EC', logo: ecLogo, industryIcon: nonProfitIcon },
  { name: 'Cere', logo: cereLogo, industryIcon: medicalIcon },
  { name: 'AD', logo: atrendDataLogo, industryIcon: dataIcon },
  { name: 'Udis', logo: udisLogo, industryIcon: foodIcon }
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
}</style>

