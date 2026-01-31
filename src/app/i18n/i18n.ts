import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import ruCommonTranslation from "./translation/ru/common.json"
import enCommonTranslation from "./translation/en/common.json"
import ruGenresTranslation from "./translation/ru/genres.json"
import enGenresTranslation from "./translation/en/genres.json"
import ruAuthTranslation from "./translation/ru/auth.json"
import enAuthTranslation from "./translation/en/auth.json"

import XHR from "i18next-http-backend"

export const resources = {
    en: {
        common: enCommonTranslation,
        genres: enGenresTranslation,
        auth: enAuthTranslation
    },
    ru: {
        common: ruCommonTranslation,
        genres: ruGenresTranslation,
        auth: ruAuthTranslation
    }
} as const;

void i18n
    .use(XHR)
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        debug: true,
        lng: "ru",
        supportedLngs: ['ru', 'en'],
        ns: ["common", "genres", "auth"],
        detection: {
            order: ["localStorage", "cookie", "navigator", "htmlTag"],
        },
        fallbackLng: "en",
        resources,
        defaultNS:"common",
        interpolation: {
            escapeValue: false
        },
    });

export default i18n;