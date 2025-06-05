import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import ruTranslation from "./translation/ru/common.json"
import enTranslation from "./translation/en/common.json"
import XHR from "i18next-http-backend"

export const defaultNS = "common";

export const resources = {
    en: {
        common: enTranslation
    },
    ru: {
        common: ruTranslation
    }
} as const;

void i18n
    .use(XHR)
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        lng: "en",
        supportedLngs: ['ru', 'en'],
        ns: ["common"],
        detection: {
            order: ["localStorage", "cookie", "navigator", "htmlTag"],
        },
        fallbackLng: "en",
        resources,
        defaultNS,
        interpolation: {
            escapeValue: false
        },
    });

export default i18n;