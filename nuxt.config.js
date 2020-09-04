export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'spa',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: 'GPT-Startup | スタートアップのためのブレイン' || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'スタートアップ向けアイディアを最新の言語モデルであるGPT-3が生成しランダムに表示するサービスです。',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'スタートアップ向けアイディアを最新の言語モデルであるGPT-3が生成しランダムに表示するサービスです。',
      },
      {
        hid: 'og:url',
        property: 'og:type',
        content: 'https://gpt-startup.netlify.app/',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://gpt-startup.netlify.app/ogp.jpg',
      },
      {
        hid: 'twitter:card',
        property: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        hid: 'twitter:title',
        property: 'twitter:title',
        content: 'GPT-Startup | スタートアップのためのブレイン',
      },
      {
        hid: 'twitter:description',
        property: 'twitter:description',
        content:
          'スタートアップ向けアイディアを最新の言語モデルであるGPT-3が生成しランダムに表示するサービスです。',
      },
    ],

    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      {
        rel: 'apple-touch-icon',
        size: '180x180',
        href: '/apple-touch-icon.png',
      },
    ],
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: ['@/plugins/composition-api'],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxt/typescript-build',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/dotenv',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
}
