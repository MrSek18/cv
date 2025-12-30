import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import main from "./src/locales/main.json";


i18n.use(initReactI18next).init({
    resources:{
        es: {
            main: main.es,
        },
        en: {
            main: main.en,
        },
    },
    lng: "es",
    fallbackLng: "es",
    ns: ["main"],
    defaultNS: "main",
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;