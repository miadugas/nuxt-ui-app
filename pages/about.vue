<template>
  <div class="flex w-full flex-col gap-4">
    <section class="mx-auto mt-4 flex flex-col py-10">
      <h1 class="text-neutral-900 dark:text-neutral-50 text-center text-4xl mb-2">About Me</h1>
      <h2 class="text-center text-lg font-extralight
      italic text-muted text-neutral-600 dark:text-neutral-400 sm:text-medium mb-14">
        A few words about me.
      </h2>
      <div class="relative isolate bg-transparent dark:bg-transparent">
        <!-- Light Mode SVG -->
        <svg
          class="pulse-svg absolute inset-0 -z-10 h-full w-full stroke-neutral-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)] dark:hidden"
          aria-hidden="true">
          <defs>
            <pattern id="0787a7c5-978c-4f66-83c7-11c213f99cb7" width="200" height="200" x="50%" y="-1"
              patternUnits="userSpaceOnUse">
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" stroke-width="0" fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)" />
        </svg>

        <!-- Dark Mode SVG -->
        <div
          class="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden ring-1 ring-white/5 lg:w-1/2 hidden dark:block">
        </div>

        <!-- Content Area -->
        <div class="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8">
          <div class="relative px-6 pb-20 pt-22 lg:static lg:px-8">
            <div class="mx-auto max-w-xl lg:mx-0 lg:max-w-lg bg-transparent">
              <p class="mt-4 text-lg text-neutral-600 dark:text-neutral-400 ">
                    My passion for creating started when I was 12, just two weeks after my mom brought home a computer.
                    Fueled by curiosity, I taught myself to type and wrote my first program, igniting a lifelong love for
                    technology.
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
                    also a coffee and Red Bull enthusiast & always ready for challenges that solve real-world problems.
                  </p>
              <!-- <div class="mt-2">

                <img src="../assets/images/mia-sig-light.png" alt="Mia Dugas signature" class="dark:hidden" />

                <img src="../assets/images/mia-sig-dark.png" alt="Mia Dugas signature" class="hidden dark:block" />
              </div> -->

            </div>
          </div>

          <div class="mt-12 sm:mt-16 lg:mt-0 flex flex-col lg:flex-row lg:items-center">
  
  <div class="justify-center lg:justify-end overflow-hidden">
    <div class="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0 rounded-lg bg-neutral-100 dark:bg-neutral-700 transform rotate-6" >
      <SpotlightCard
      mode="after"
      from="rgba(255,255,255,0.1)"
      :size="1400"
      class="group hidden w-164 rounded-2xl border border-white/10 bg-white/5 p-2 pb-4 sm:flex"
    >
    <div class="relative">
    <!-- <NuxtImg
          width="256"
          src="/assets/images/mia_me.png"
          class="relative size-64 rounded-xl object-cover grayscale transition-all duration-300 group-hover:grayscale-0"
          alt="Mia Dugas Profile Picture"
          aria-label="Mia Dugas Profile Picture"
        /> -->
      <img
        src="../assets/images/mia_me.png"
        alt="User interface"
        class="relative size-164 rounded-xl object-cover grayscale transition-all duration-300 group-hover:grayscale-0"
      />
    </div>
    </SpotlightCard>
    </div>
  </div>

</div>

        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
</style>
