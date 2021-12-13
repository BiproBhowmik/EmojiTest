export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'emoji-tester',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel:"stylesheet", href:"https://cdnjs.cloudflare.com/ajax/libs/emojionearea/3.4.2/emojionearea.min.css",
       integrity:"sha512-vEia6TQGr3FqC6h55/NdU3QSM5XR6HSl5fW71QTKrgeER98LIMGwymBVM867C1XHIkYD9nMTfWK2A0xcodKHNA==",
       crossorigin:"anonymous", referrerpolicy:"no-referrer" },
    ],
    script: [
      {src: 'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js', body: true},
      {src: 'https://cdnjs.cloudflare.com/ajax/libs/emojionearea/3.4.2/emojionearea.js',
      integrity: "sha512-aGWPnmdBhJ0leVHhQaRASgb0InV/Z2BWsscdj1Vwt29Oic91wECPixuXsWESpFfCcYPLfOlBZzN2nqQdMxlGTQ==", 
      crossorigin: "anonymous", referrerpolicy: "no-referrer",
      body: true},
      {src: 'test.js', type:"text/javascript", body: true},
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
