export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'diplomatiya',
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
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        "~/assets/css/main.css",
        "~/assets/css/swiper.css",
        // fonts css
        "~/assets/fonts/icomoon/style.css",
        "~/assets/fonts/inter/stylesheet.css",
        "~/assets/fonts/Cormorant/stylesheet.css",
        "~/assets/fonts/Effra/stylesheet.css",
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        { src: "~/plugins/vue-awesome-swiper.js", mode: "client" },
        { src: "~/plugins/vue-aos.js", mode: "client" },
        { src: "~/plugins/vue-counter.js", mode: "client" },
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/bootstrap
        'bootstrap-vue/nuxt',
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        '@nuxtjs/i18n'

    ],

    i18n: {
        locales: ['en', 'ru', 'uz'],
        defaultLocale: 'uz',
        vueI18n: {
            fallbackLocale: 'uz',
            messages: {
                en: {
                    welcome: 'Welcome'
                },
                ru: {
                    welcome: 'Добро пожаловать'
                },
                uz: {
                    welcome: 'Hush kelibsiz'
                }
            }
        }
    },

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
        baseURL: 'https://www.admin.diplomat.university',
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {}
}