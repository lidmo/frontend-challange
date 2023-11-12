export default defineNuxtConfig({
    css: [
        "~/assets/scss/main.scss"
    ],

    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: [
                        "@use \"@/assets/scss/colors.scss\" as *;",
                        "@use \"@/assets/scss/spacings.scss\" as *;",
                        "@use \"@/assets/scss/screens.scss\" as *;"
                    ].join("\n")
                }
            }
        }
    },

    devtools: {
        enabled: true
    },

    modules: [
        "@nuxtjs/google-fonts",
        "nuxt-icons",
        "nuxt-icon",
        "nuxt-lodash",
        "@pinia/nuxt"
    ],

    googleFonts: {
        download: false,
        families: {
            Poppins: [100, 200, 300, 400, 500, 600, 700, 800, 900]
        }
    }
});