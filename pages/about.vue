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
              <p class="italic mt-4 text-lg text-neutral-600 dark:text-neutral-400">
                "Trust yourself like you trust the first 6 Black Sabbath albums."
              </p>
              <p class="mt-4 text-lg text-neutral-600 dark:text-neutral-400 ">
                To me, it's about confidence and believing in the creative process, just like those timeless records.
              </p>
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
            </div>
          </div>

          <div class="mt-12 sm:mt-16 lg:mt-0 flex flex-col lg:flex-row lg:items-center">

            <div class="justify-center lg:justify-end overflow-hidden">
              <div
                class="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0 rounded-lg bg-neutral-100 dark:bg-neutral-700 transform rotate-6">
                <SpotlightCard mode="after" from="rgba(255,255,255,0.1)" :size="1400"
                  class="group hidden w-164 rounded-2xl border border-white/10 bg-white/5 p-2 pb-4 sm:flex">
                  <div class="relative">
                    <img src="../assets/images/mia_me.png" alt="User interface"
                      class="relative size-164 rounded-xl object-cover grayscale transition-all duration-300 group-hover:grayscale-0" />
                  </div>
                </SpotlightCard>
              </div>
            </div>

          </div>

        </div>
      </div>
      <div>
        <div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-10">
          <div class="mx-auto max-w-4xl divide-y divide-gray-900/10">
            <div class="text-center">
              <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-neutral-50 sm:text-4xl">
                Ask the Developer
              </h2>
            </div>

            <dl class="mt-10 space-y-6 divide-y divide-gray-900/10">
              <Disclosure as="div" v-for="faq in faqs" :key="faq.question" class="pt-6" v-slot="{ open }">
                <dt>
                  <DisclosureButton class="flex w-full items-start justify-between text-left text-gray-900">
                    <span class="text-base font-semibold leading-7 text-neutral-600 dark:text-neutral-200">{{ faq.question
                    }}</span>
                    <span class="ml-6 flex h-7 items-center">
                      <UIcon v-if="!open" name="i-heroicons-minus-small"
                        class="h-6 w-6 text-neutral-600 dark:text-neutral-400" aria-hidden="true" />
                      <UIcon v-else name="i-heroicons-plus-small" class="h-6 w-6 text-neutral-600 dark:text-neutral-200"
                        aria-hidden="true" />
                    </span>
                  </DisclosureButton>
                </dt>
                <DisclosurePanel as="dd" class="mt-6 text-lg text-neutral-600 dark:text-neutral-50">
                  <p class="text-base leading-7 text-neutral-400">{{ faq.answer }}</p>
                </DisclosurePanel>
              </Disclosure>
            </dl>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'

const faqs = [
  {
    question: "What are some challenges you face as a developer?",
    answer: "One of the biggest challenges is ensuring that code remains maintainable as projects grow. It’s easy to write something that works today, but will future-me (or any other developer) understand it a year from now? Balancing the needs of rapid development with thoughtful architecture is an ongoing puzzle—but one that I enjoy solving.",
  },

  {
    question: "What's the most rewarding project you've worked on?",
    answer: "Working with a startup to create a product from scratch was incredibly rewarding. Seeing something go from a whiteboard concept to a functional tool that made users' lives easier is why I love this field. There's nothing quite like watching your work make an actual impactful difference.",
  },
  {
    question: "Do you prefer working solo or on a team?",
    answer: "I genuinely enjoy both. Independent work allows for deep focus, while collaborating with a team means getting to bounce ideas off other talented minds, leading to creative solutions. In short, working alone allows me to think deeply, and working in a team allows me to learn continuously.",
  },
  {
    question: "How do you keep up with the ever-changing tech landscape?",
    answer: "I think that staying current in tech requires both curiosity and discipline. I dedicate time each week to exploring new tools, following industry trends, and experimenting with emerging technologies. Vue 3, TypeScript, and the evolving landscape of frontend frameworks keep things fresh and interesting.",
  },
  {
    question: "What's your philosophy on user experience?",
    answer: "For me, building an effective UX is about empathy: putting myself in the shoes of the user and ensuring the technology feels effortless. The experience should be seamless, intuitive, and accessible for all. I feel that it should be so intuitive that the user doesn't even think about it. They should be able to achieve what they came to do without frustration by putting myself in the shoes of the user and ensuring the technology feels effortless. If a user doesn’t even notice the design, I’ve done my job right.",
  },
  {
    question: "What do you do when you're creatively stuck?",
    answer: "Taking a step back helps me. I might take a short walk to the mailbox, write some music, or outline some ideas for a new blog post. And if that fails, caffeine and a playlist with way too much Black Sabbath usually does the trick. Giving my brain some space to breathe usually helps me come back to the problem with fresh eyes and answers.",
  },
  {

    question: "What do you enjoy most about JavaScript?",
    answer: "I'm currently madly in love with Vue 3 and TypeScript, combine that with Vue's reactivity and the Composition API and it makes building complex features feel like a breeze. That said, I appreciate how JavaScript frameworks as a whole have matured. React's component model has basically shaped the way we think about UI development, and Svelte's approach to reactivity is, in a word,  innovative. Each has its strengths, but Vue 3 stands out for me right now because of how naturally it fits my workflow, especially when paired with TypeScript. And of course, JavaScript itself remains the foundation that ties everything together, offering endless possibilities for creating seamless web experiences.",
  },
]

</script>

<style scoped></style>
