<template>
  <div class="flex w-full flex-col gap-4">
    <section class="mx-auto mt-4 flex flex-col py-10">
      <h1 class="text-neutral-900 dark:text-neutral-50 text-center text-4xl mb-2">Contact Me</h1>
      <h2 class="text-center text-lg font-extralight
      italic text-muted text-neutral-600 dark:text-neutral-400 sm:text-medium mb-14">Let's talk about your ideas,
        projects or anything else.</h2>
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
              <h2 class="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50"> I am...</h2>

              <p class="mt-2 text-lg text-neutral-600 dark:text-gray-100">
                passionate about tackling ambitious and large-scale projects, and I welcome the opportunity to collaborate
                on your specific software needs.
              </p>
              <p class="mt-6 text-lg text-neutral-600 dark:text-gray-100">
                With extensive experience as both a software designer and developer, I am well-equipped to guide you
                through every stage of the custom software design and development process. If you have any questions or
                would like to explore potential ideas, I encourage you to reach out
              </p>
              <p class="mt-6 text-lg text-neutral-600 dark:text-gray-100">
                I prioritize timely communication and am always open to scheduling a discussion at your convenience. I
                look forward to the possibility of working together.
              </p>
              <div class="mt-2">
                <!-- Light Mode Signature -->
                <img src="../assets/images/mia-sig-light.png" alt="Mia Dugas signature" class="dark:hidden" />
                <!-- Dark Mode Signature -->
                <img src="../assets/images/mia-sig-dark.png" alt="Mia Dugas signature" class="hidden dark:block" />
              </div>
              <dl class="mt-10 space-y-4 text-base leading-7 text-neutral-600 dark:text-neutral-300">
                <div class="flex gap-x-4">
                  <dt class="flex-none">
                    <span class="sr-only">Address</span>
                  </dt>
                </div>
                <div class="flex gap-x-4">
                  <dt class="flex-none">
                    <span class="sr-only">Telephone</span>
                  </dt>
                </div>
                <div class="flex gap-x-4">
                  <dt class="flex-none">
                    <span class="sr-only">Email</span>
                  </dt>
                </div>
              </dl>
            </div>
          </div>
          <form action="#" method="POST" class="px-6 pb-24 sm:pb-32 lg:px-8 bg-transparent">
            <div class="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
              <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label for="first-name"
                    class="block text-sm font-semibold leading-6 dark:text-neutral-50 text-neutral-900">First name</label>
                  <div class="mt-2.5">
                    <input type="text" name="first-name" id="first-name" autocomplete="given-name"
                      class="block w-full rounded-md border bg-white/5 px-3.5 py-2 text-neutral-50 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-cyan-500 sm:text-sm sm:leading-6" />
                  </div>
                </div>
                <div>
                  <label for="last-name"
                    class="block text-sm font-semibold leading-6 dark:text-neutral-50 text-neutral-900">Last name</label>
                  <div class="mt-2.5">
                    <input type="text" name="last-name" id="last-name" autocomplete="family-name"
                      class="block w-full rounded-md border bg-white/5 px-3.5 py-2 dark:text-neutral-50 text-neutral-900 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-cyan-500 sm:text-sm sm:leading-6" />
                  </div>
                </div>
                <div class="sm:col-span-2">
                  <label for="email"
                    class="block text-sm font-semibold leading-6 dark:text-neutral-50 text-neutral-900">Email</label>
                  <div class="mt-2.5">
                    <input type="email" name="email" id="email" autocomplete="email"
                      class="block w-full rounded-md border bg-white/5 px-3.5 py-2 dark:text-neutral-50 text-neutral-900 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-cyan-500 sm:text-sm sm:leading-6" />
                  </div>
                </div>
                <div class="sm:col-span-2">
                  <label for="phone-number"
                    class="block text-sm font-semibold leading-6 dark:text-neutral-50 text-neutral-900">Phone
                    number</label>
                  <div class="mt-2.5">
                    <input type="tel" name="phone-number" id="phone-number" autocomplete="tel"
                      class="block w-full rounded-md border bg-white/5 px-3.5 py-2 dark:text-neutral-50 text-neutral-900 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-cyan-500 sm:text-sm sm:leading-6" />
                  </div>
                </div>
                <div class="sm:col-span-2">
                  <label for="message"
                    class="block text-sm font-semibold leading-6 dark:text-neutral-50 text-neutral-900">Message</label>
                  <div class="mt-2.5">
                    <textarea name="message" id="message" rows="4"
                      class="block w-full rounded-md border bg-white/5 px-3.5 py-2 dark:text-neutral-50 text-neutral-900 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-cyan-500 sm:text-sm sm:leading-6"></textarea>
                  </div>
                </div>
              </div>
              <div class="mt-8 flex justify-between">
                <button type="button"
                  class="inline-flex items-center gap-x-2 rounded-md bg-cyan-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600">
                  Send Message
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="lucide lucide-send-horizontal">
                    <path
                      d="M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z" />
                    <path d="M6 12h16" />
                  </svg>
                </button>

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
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">


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
</script>

<style scoped>/* You can add any additional custom styles here */</style>
