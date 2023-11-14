import vueform from "@vueform/vueform/vite";

export default defineNuxtConfig({
    app: {
        pageTransition: {
            name: "page",
            mode: "out-in"
        },

        layoutTransition: {
            name: "layout",
            mode: "out-in"
        }
    },

    css: [
        "~/assets/scss/main.scss",
        "~/assets/scss/vueform.scss"
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
        },

        plugins: [
            vueform()
        ]
    },

    runtimeConfig: {
        public: {
            challengeApi: "https://challenge.lidmo.com.br/api"
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
        "@vueform/nuxt",
        "@pinia/nuxt"
    ],

    googleFonts: {
        download: false,
        families: {
            Poppins: [100, 200, 300, 400, 500, 600, 700, 800, 900]
        }
    }
});