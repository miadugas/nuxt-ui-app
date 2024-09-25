<template>
  <div class="flex w-full flex-col gap-4">
    <section class="mx-auto mt-4 flex max-w-7xl flex-col py-10">
      <!-- Updated Title and Subtitle -->
      <h1 class="text-neutral-900 dark:text-neutral-50 text-center text-4xl mb-2">Secure Projects Portal</h1>
      <h2 class="text-center text-lg font-extralight italic text-muted text-neutral-600 dark:text-neutral-400 sm:text-medium mb-10">
        "Password-protected access to exclusive projects"
      </h2>
      
      <div class="flex min-h-full flex-1 flex-col justify-center px-6 lg:px-8">
        <div class="relative">
          <form @submit.prevent="handleSubmit" class="space-y-6" action="#" method="POST">
            <!-- Email Field -->
            <div>
              <label for="email" class="block text-sm font-medium leading-6 text-neutral-900 dark:text-neutral-50">
                Email Address
              </label>
              <div class="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autocomplete="email"
                  v-model="form.email"
                  class="block w-full rounded-md border-2 border-cyan-500 bg-white/5 py-1.5 text-neutral-900 dark:text-neutral-50 shadow-sm focus:ring-2 focus:ring-cyan-500 sm:text-sm sm:leading-6"
                  required
                />
              </div>
            </div>

            <!-- Password Field -->
            <div>
              <label for="password" class="block text-sm font-medium leading-6 text-neutral-900 dark:text-neutral-50">
                Password
              </label>
              <div class="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autocomplete="current-password"
                  v-model="form.password"
                  class="block w-full rounded-md border-2 bg-white/5 py-1.5 border-cyan-500 text-neutral-900 dark:text-neutral-50 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-cyan-500 sm:text-sm sm:leading-6"
                  required
                />
              </div>
            </div>

            <!-- Submit Button -->
            <div>
              <button
                type="submit"
                :disabled="isSubmitting"
                class="flex w-full justify-center rounded-md bg-cyan-500 text-sm font-semibold leading-6 dark:bg-cyan-500 dark:text-neutral-50 px-3.5 py-2.5 text-white shadow-sm hover:bg-cyan-600 dark:hover:bg-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500 disabled:opacity-50"
              >
                <span v-if="!isSubmitting">Sign In</span>
                <span v-else>Signing In...</span>
                <!-- SVG Icon -->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-send-horizontal ml-2"
                >
                  <path
                    d="M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z"
                  />
                  <path d="M6 12h16" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
// import { ref } from 'vue';
// import axios from 'axios';

// Define the form data
const form = ref({
  email: '',
  password: '',
});

// Submission state
const isSubmitting = ref(false);

// Get the router instance
const router = useRouter();

// Handle form submission
const handleSubmit = async () => {
  // Instead of submitting the form, redirect to Access Denied
  router.push('/access-denied');
};
// const handleSubmit = async () => {
//   isSubmitting.value = true;

//   try {
//     // Replace with your actual login endpoint
//     const response = await axios.post('https://your-backend-api.com/login', {
//       email: form.value.email,
//       password: form.value.password,
//     });

//     if (response.status === 200) {
//       // Handle successful login (e.g., redirect, show message)
//       alert('Successfully signed in!');
//       // Reset form
//       form.value.email = '';
//       form.value.password = '';
//     } else {
//       // Handle unexpected status codes
//       alert('Login failed. Please try again.');
//     }
//   } catch (error) {
//     console.error('Login error:', error);
//     alert('An error occurred during login. Please try again later.');
//   } finally {
//     isSubmitting.value = false;
//   }
// };
</script>

<style scoped>
/* Additional styling if needed */
</style>
