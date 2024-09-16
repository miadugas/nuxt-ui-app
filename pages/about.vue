<template>
  <div class="flex w-full flex-col gap-4">
    <section class="mx-auto mt-4 flex max-w-7xl flex-col py-10">
      <h1 class="text-neutral-900 dark:text-neutral-50 text-center text-4xl mb-2">About Me
      </h1>
      <h2 class="text-center text-lg font-extralight
      italic text-muted text-neutral-600 dark:text-neutral-400 sm:text-medium mb-14">
        A few words about me.
      </h2>

      <!-- Apply bg-opacity-50 here instead of opacity-50 -->
      <div class="flex min-h-full flex-1 flex-col justify-center px-6">
        <div aria-hidden="true" class="absolute inset-x-0 top-0 h-48" />
        <div class="relative">
          <div class="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
            <div class="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:px-0">
              <div>

                <div class="mt-6">
                  <p class="mt-4 text-lg text-neutral-600 dark:text-neutral-400 ">
                    My passion for creating started when I was 12, just two weeks after my mom brought home a computer.
                    Fueled by curiosity, I taught myself to type and wrote my first program, igniting a lifelong love for
                    technology.
                  </p>
                  <p class="mt-4 text-lg text-neutral-600 dark:text-neutral-400 ">
                    While pursuing a career in high finance, I began building tools to automate my work and streamline
                    team tasks. Then as a small business owner, I quickly realized that my true passion lay in software
                    development, leading me to transition to coding full-time.
                  </p>
                  <p class="mt-4 text-lg text-neutral-600 dark:text-neutral-400 ">
                    In 2007, I began my professional web development journey with small Python apps & web applications,
                    growing into a versatile software engineer focused on building inclusive, accessible digital products
                    that addressed specific pain points. I've worked with agencies, consulted for startups, and
                    collaborated with brilliant minds to deliver exceptional products and services.
                  </p>
                  <p class="mt-4 text-lg text-neutral-600 dark:text-neutral-400 ">
                    As a maker and problem solver, I take pride in crafting scalable, full-stack solutions that provide
                    seamless user experiences, all while adhering to Agile principles and best practices.
                  </p>
                  <p class="mt-4 text-lg text-neutral-600 dark:text-neutral-400 ">
                    Outside of coding, I enjoy playing D&D, tinkering with machine learning apps, and writing music. I'm
                    also a coffee and Red Bull enthusiast, always ready for challenges that solves real-world problems.
                  </p>
                </div>
              </div>
            </div>
            <!-- <div class="mt-12 sm:mt-16 lg:mt-0">
              <div class="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0 rounded-lg bg-neutral-100 dark:bg-neutral-700 transform rotate-6"> -->
                <!-- <img
                  class="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                  src="../assets/images/mia-abt-me.png"
                  alt="Inbox user interface" /> -->
              <!-- </div>
            </div> -->
            <div class="mt-12 sm:mt-16 lg:mt-0">
  <!-- Container for top and bottom squares -->
  <div class="grid grid-rows-2 gap-4 lg:h-full mx-4">

    <!-- Top square: tilted -->
    <div class="relative w-full h-48 lg:h-full transform rotate-6 bg-neutral-100 dark:bg-neutral-700 rounded-lg my-4">
      <!-- You can insert your content here for the top square -->
    </div>

    <!-- Bottom square: bordered area -->
    <div class="relative w-full h-48 lg:h-full border-2 border-neutral-500 dark:border-neutral-400 bg-neutral-100 dark:bg-neutral-700 rounded-lg my-20">
      <!-- <Socials /> -->
      <!-- You can insert your content here for the bottom square -->
    </div>

  </div>
</div>

          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
import Socials from '~/components/Socials.vue'
</script>

<style scoped>.signature {
  stroke: #797979;
  filter: drop-shadow(0 0 10px rgba(121, 121, 121, 0.5));
}</style>
