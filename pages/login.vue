<template>
  <div class="flex w-full flex-col gap-4">
    <section class="mx-auto mt-4 flex max-w-7xl flex-col py-10">
      <h1 class="text-neutral-900 dark:text-neutral-50 text-center text-4xl mb-2">Special Projects Login</h1>
      <h2 class="text-center text-lg font-extralight
      italic text-muted text-neutral-600 dark:text-neutral-400 sm:text-medium mb-10">Password protected projects</h2>
      <div class="flex min-h-full flex-1 flex-col justify-center px-6 lg:px-8">

        <div class="relative">
          <form class="space-y-6" action="#" method="POST">
            <div>
              <label for="email" class="block text-sm font-medium leading-6 text-neutral-900 dark:text-neutral-50">Email
                address</label>
              <div class="mt-2">
                <input id="email" name="email" type="email" autocomplete="email"
                  class="block w-full rounded-md border-2 border-cyan-500 bg-white/5 py-1.5 text-neutral-900 dark:text-neutral-50 shadow-sm focus:ring-2 focus:ring-cyan-500 sm:text-sm sm:leading-6" />

              </div>
            </div>

            <div>
              <div class="flex items-center justify-between">
                <label for="password"
                  class="block text-sm font-medium leading-6 text-neutral-900 dark:text-neutral-50">Password</label>

              </div>
              <div class="mt-2">
                <input id="password" name="password" type="password" autocomplete="current-password"
                  class="block w-full rounded-md border-2 bg-white/5 py-1.5 border-cyan-500 text-neutral-900 dark:text-neutral-50 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-cyan-500 sm:text-sm sm:leading-6" />
              </div>
            </div>

            <div>
              <button type="submit"
                class="flex w-full justify-center rounded-md bg-cyan-500 text-sm font-semibold leading-6 dark:bg-cyan-500
            dark:text-neutral-50 px-3.5 py-2.5 text-white shadow-sm hover:bg-cyan-600 dark:hover:bg-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500 ">Sign
                in</button>
            </div>
          </form>
        </div>
      </div>
    </section>
    <div>

    </div>


  </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>