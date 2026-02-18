// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt','@nuxtjs/google-fonts'],
  googleFonts:{
    families:{
      Poppins:[400,700],
      PoltawskiNowy:[400,700],
    },
    display:'swap'
  }
})