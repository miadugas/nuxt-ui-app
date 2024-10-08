<template>
  <div class="flex w-full flex-col gap-4">
    <section class="mx-auto mt-4 flex flex-col py-10">
      <h1 class="text-neutral-900 dark:text-neutral-50 text-center text-4xl mb-2">Contact Me</h1>
      <h2 class="text-center text-lg font-extralight italic text-muted text-neutral-600 dark:text-neutral-400 sm:text-medium mb-14">
        Let's talk about your ideas, projects or anything else.
      </h2>
      <div class="relative isolate bg-transparent dark:bg-transparent">
        <!-- Light Mode SVG -->
        <svg
          class="pulse-svg absolute inset-0 -z-10 h-full w-full stroke-neutral-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)] dark:hidden"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
              width="200"
              height="200"
              x="50%"
              y="-1"
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" stroke-width="0" fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)" />
        </svg>

        <!-- Dark Mode SVG -->
        <div
          class="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden ring-1 ring-white/5 lg:w-1/2 hidden dark:block"
        ></div>

        <!-- Content Area -->
        <div class="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8">
          <!-- Left Column: Information -->
          <div class="relative px-6 pb-20 pt-22 lg:static lg:px-8">
            <div class="mx-auto max-w-xl lg:mx-0 lg:max-w-lg bg-transparent">
              <h2 class="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">I am...</h2>

              <p class="mt-2 text-lg text-gray-500 dark:text-gray-400">
                Passionate about tackling ambitious and large-scale projects, and I welcome the opportunity to collaborate
                on your specific software needs.
              </p>
              <p class="mt-6 text-lg text-gray-500 dark:text-gray-400">
                With extensive experience as both a software engineer and developer, I am well-equipped to guide you
                through every stage of the custom software design and development process. If you have any questions or
                would like to explore potential ideas, I encourage you to reach out :)
              </p>
              <p class="mt-6 text-lg text-gray-500 dark:text-gray-400">
                I prioritize timely communication and my calendar is always accessible, so don't hesitate to schedule a call to discuss your
                needs. I look forward to hearing from you & I look forward to the possibility of working together.
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

          <!-- Right Column: Contact Form -->
          <form
            id="fs-frm"
            name="simple-contact-form"
            accept-charset="utf-8"
            action="https://formspree.io/f/xblrveep"
            method="POST"
            class="px-6 pb-24 sm:pb-32 lg:px-8 bg-transparent"
            @submit.prevent="handleSubmit"
          >
            <div class="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
              <fieldset id="fs-frm-inputs" class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <!-- Full Name -->
                <div class="sm:col-span-2">
                  <label
                    for="full-name"
                    class="block text-sm font-semibold leading-6 dark:text-neutral-50 text-neutral-900"
                  >
                    Full Name
                  </label>
                  <div class="mt-2.5">
                    <input
                      type="text"
                      name="name"
                      id="full-name"
                      placeholder="First and Last"
                      required
                      v-model="form.name"
                      class="block w-full rounded-md border bg-white/5 px-3.5 py-2 text-neutral-50 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-cyan-500 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <!-- Email Address -->
                <div class="sm:col-span-2">
                  <label
                    for="email-address"
                    class="block text-sm font-semibold leading-6 dark:text-neutral-50 text-neutral-900"
                  >
                    Email Address
                  </label>
                  <div class="mt-2.5">
                    <input
                      type="email"
                      name="_replyto"
                      id="email-address"
                      placeholder="email@domain.tld"
                      required
                      v-model="form.email"
                      class="block w-full rounded-md border bg-white/5 px-3.5 py-2 dark:text-neutral-50 text-neutral-900 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-cyan-500 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <!-- Message -->
                <div class="sm:col-span-2">
                  <label
                    for="message"
                    class="block text-sm font-semibold leading-6 dark:text-neutral-50 text-neutral-900"
                  >
                    Message
                  </label>
                  <div class="mt-2.5">
                    <textarea
                      rows="5"
                      name="message"
                      id="message"
                      placeholder="Your message here..."
                      required
                      v-model="form.message"
                      class="block w-full rounded-md border bg-white/5 px-3.5 py-2 dark:text-neutral-50 text-neutral-900 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-cyan-500 sm:text-sm sm:leading-6"
                    ></textarea>
                  </div>
                </div>

                <!-- Hidden Subject Field -->
                <div class="sm:col-span-2">
                  <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission" />
                </div>

                <!-- Honeypot Field for Spam Prevention -->
                <div class="sm:col-span-2" style="display: none;">
                  <label for="bot-field">Don’t fill this out if you're human:</label>
                  <input type="text" name="bot-field" id="bot-field" v-model="form.botField" />
                </div>
              </fieldset>

              <!-- Submit and Schedule Buttons -->
              <div class="mt-8 flex justify-between">
                <button
                  type="submit"
                  :disabled="isSubmitting"
                  class="inline-flex items-center gap-x-2 rounded-md bg-cyan-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600 disabled:opacity-50"
                >
                  <span v-if="!isSubmitting">Send Message</span>
                  <span v-else>Sending...</span>

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
                    class="lucide lucide-send-horizontal"
                  >
                    <path
                      d="M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z"
                    />
                    <path d="M6 12h16" />
                  </svg>
                </button>

                <button
                  type="button"
                  @click="showCalendlyWidget"
                  class="inline-flex items-center gap-x-2 rounded-md bg-cyan-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
                >
                  Schedule a Call
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
                    class="lucide lucide-calendar-search"
                  >
                    <path d="M16 2v4" />
                    <path d="M21 11.75V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.25" />
                    <path d="m22 22-1.875-1.875" />
                    <path d="M3 10h18" />
                    <path d="M8 2v4" />
                    <circle cx="18" cy="18" r="3" />
                  </svg>
                </button>
              </div>

              <!-- Feedback Messages -->
              <div v-if="successMessage" class="mt-4 text-green-500">
                {{ successMessage }}
              </div>
              <div v-if="errorMessage" class="mt-4 text-red-500">
                {{ errorMessage }}
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';

// Replace with your actual Formspree form endpoint
const formAction = 'https://formspree.io/f/xblrveep';

// Reactive form data
const form = ref({
  name: '',
  email: '',
  message: '',
  botField: '', // For honeypot
});

// Submission state
const isSubmitting = ref(false);
const successMessage = ref('');
const errorMessage = ref('');

// Handle form submission
const handleSubmit = async () => {
  // Prevent submission if honeypot field is filled
  if (form.value.botField) {
    return;
  }

  isSubmitting.value = true;
  successMessage.value = '';
  errorMessage.value = '';

  try {
    const response = await axios.post(
      formAction,
      {
        name: form.value.name,
        _replyto: form.value.email,
        message: form.value.message,
        _subject: 'Contact Form Submission',
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    if (response.status === 200 || response.status === 201) {
      successMessage.value = 'Your message has been sent successfully!';
      // Reset form fields
      form.value.name = '';
      form.value.email = '';
      form.value.message = '';
    } else {
      errorMessage.value = 'Something went wrong. Please try again later.';
    }
  } catch (error) {
    console.error('Form submission error:', error);
    errorMessage.value = 'Failed to send the message. Please try again later.';
  } finally {
    isSubmitting.value = false;
  }
};

// Calendly Widget Function
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

<style scoped>
.text-green-500 {
  color: #10b981;
  /* Tailwind's green-500 */
}

.text-red-500 {
  color: #ef4444;
  /* Tailwind's red-500 */
}
</style>
