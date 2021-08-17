import contentful from 'contentful'
const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
})

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  generate: {
   routes() {
     return Promise.all([
       client.getEntries({
         content_type: "blogPost"
       })
     ]).then(([blogEntries]) => {
       return [...blogEntries.items.map(entry => entry.fields.slug)];
     });
   }
  }

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'How To - Stuffs you wish you knew',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Epilogue:wght@400;700',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/styles/bootstrap.scss', '~/assets/styles/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/contentful', '~/plugins/posts'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/markdownit',
  ],

  markdownit: {
    injected: true,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
