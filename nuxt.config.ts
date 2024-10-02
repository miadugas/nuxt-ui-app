// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    '@/assets/css/tailwind.css', // Custom Tailwind file
  ],
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/sanity',
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxt/image-edge',
    'vue3-carousel-nuxt',
  ],
  sanity: {
    projectId: 'agt47n3a',
    dataset: 'production', // or your custom dataset name
    apiVersion: '2024-09-08', // use a UTC date string
    useCdn: false // `false` if you want to ensure fresh data
  },
  runtimeConfig: {
    sanity: {
      token: '',
    },
    image: {
      domains: ['cdn.sanity.io'],
    },
  },
  compatibilityDate: '2024-09-08',
})