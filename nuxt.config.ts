// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/sanity', '@nuxt/ui'],
  sanity: {
    projectId: 'agt47n3a',
    dataset: 'production', // or your custom dataset name
    apiVersion: '2024-09-08', // use a UTC date string
    useCdn: false // `false` if you want to ensure fresh data
  },

  compatibilityDate: '2024-09-08',
})