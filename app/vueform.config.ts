/* eslint-disable import/named */
/* eslint-disable camelcase */
import pt_BR from "@vueform/vueform/locales/pt_BR";
import vueform from "@vueform/vueform/themes/vueform";
import { defineConfig } from "@vueform/vueform";

export default defineConfig({
    theme: vueform,
    locales: { pt_BR },
    locale: "pt_BR",
    validateOn: "change|step",
    displayErrors: false,
    size: "lg"
});