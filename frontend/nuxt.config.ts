import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
     titleTemplate: '%s | Petlove Pets',
     meta: [
       { charset: 'utf-8' },
       { name: 'theme-color', content: '#4e2096' },
       { name: 'viewport', content: 'width=device-width, initial-scale=1' },
       {
         hid: 'description',
         name: 'description',
         content:
           'Petlove Pets is a pet adoption website that allows you to find the perfect pet for you.',
       },
     ],
     link: [
       { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg', sizes: 'any' },
       { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }
     ],
   },
 },
 css: ["~/assets/css/tailwind.css", '~/assets/css/fonts.css', '~/assets/css/animations.css'],

 components: [{ path: '@/components', pathPrefix: false }],

 modules: [
  '@vueuse/nuxt',
],

 build: {
  postcss: {
    postcssOptions: {
      plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
})
