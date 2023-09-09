// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
    modules: ['@nuxtjs/tailwindcss'],


    runtimeConfig:{
      apiKey:process.env.NUXT_API_KEY,
      apiBaseUrl:process.env.NUXT_API_BASE_URL,
      public:{
        imgBaseUrl:process.env.NUXT_PUBLIC_IMG_BASE_URL
      }
    },
    app:{
      head:{
        title:"Molyvie",
        meta:[{name:'description',content:'Molyvie is movie app with TheMovieDatabase api.'}],
        link:[{rel:'icon', href:'/molievielogo1.png'}]
      },

    }
})
