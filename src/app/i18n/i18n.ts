import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import ruCommonTranslation from "./translation/ru/common.json"
import enCommonTranslation from "./translation/en/common.json"
import ruGenresTranslation from "./translation/ru/genres.json"
import enGenresTranslation from "./translation/en/genres.json"
import ruAuthTranslation from "./translation/ru/auth.json"
import enAuthTranslation from "./translation/en/auth.json"
import ruSearchTranslation from "./translation/ru/search.json"
import enSearchTranslation from "./translation/en/search.json"
import ruValidationTranslation from "./translation/ru/validation.json"
import enValidationTranslation from "./translation/en/validation.json"
import ruNavigationTranslation from "./translation/ru/navigation.json"
import enNavigationTranslation from "./translation/en/navigation.json"
import ruErrorsTranslation from "./translation/ru/errors.json"
import enErrorsTranslation from "./translation/en/errors.json"
import ruLanguagesTranslation from "./translation/ru/languages.json"
import enLanguagesTranslation from "./translation/en/languages.json"

import XHR from "i18next-http-backend"
export const defaultNS = "common";

export const resources = {
    en: {
        common: enCommonTranslation,
        genres: enGenresTranslation,
        auth: enAuthTranslation,
        search: enSearchTranslation,
        validation: enValidationTranslation,
        navigation: enNavigationTranslation,
        errors: enErrorsTranslation,
        languages: enLanguagesTranslation
    },
    ru: {
        common: ruCommonTranslation,
        genres: ruGenresTranslation,
        auth: ruAuthTranslation,
        search: ruSearchTranslation,
        validation: ruValidationTranslation,
        navigation: ruNavigationTranslation,
        errors: ruErrorsTranslation,
        languages: ruLanguagesTranslation
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
        ns: ["common", "genres", "auth", "search", "validation", "navigation", "errors", "languages"],
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