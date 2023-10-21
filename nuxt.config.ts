// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  googleFonts: {
    families: {
      Montserrat: [300, 400, 500, 600, 700, 800, 900],
    },
    display: "swap",
  },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    "@nuxtjs/google-fonts",
    "@nuxtjs/strapi",
    "@nuxt/content",
    "@nuxtjs/color-mode",
    "@nuxt/image",
    "@pinia/nuxt",
  ],
  runtimeConfig: {
    public: {
      apiUrl: process.env.NUXT_API_URL,
    },
  },
  strapi: {
    url: process.env.STRAPI_URL || "http://localhost:1337",
    prefix: "/api",
    version: "v4",
    cookie: {},
    cookieName: "strapi_jwt",
  },
  app: {
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
  },
  colorMode: {
    classSuffix: "",
  },
  image: {
    strapi: {},
  },
  pinia: {
    storesDirs: ["./stores/**"],
  },
});
