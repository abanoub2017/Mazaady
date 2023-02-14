// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL || 'https://staging.mazaady.com/api/',
    },
  },
    modules: ['@nuxtjs/tailwindcss'],
})
