// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["@nuxt/ui", "@nuxthub/core"],
  hub: {
    analytics: false,
    blob: false,
    cache: false,
    database: false,
    kv: false,
    remote: false,
    dir: '.data/hub'
  }
})