// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindTypography from '@tailwindcss/typography'

export default defineNuxtConfig({
  // // add your custom sass file
  // css: [
  //   // '@/assets/css/main.css',
  // ],
  modules: [
  '@nuxtjs/tailwindcss'],
 
   // Defaults options
   tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config',
    exposeConfig: false,
    exposeLevel: 2,
    config: {
      plugins: [tailwindTypography]
    },
    injectPosition: 'first',
    viewer: true,
  },

    runtimeConfig: {
        // The private keys which are only available server-side
        apiSecret: '123',
        // Keys within public are also exposed client-side
        public: {
          apiBase: '/api'
        },
        // axios: {
        //   browserBaseURL: process.env.BROWSER_BASE_URL
        // }
    },
})
