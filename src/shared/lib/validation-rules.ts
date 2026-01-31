import {RegisterOptions } from "react-hook-form";
import {t} from "i18next";

export const firstNameValidationRule:RegisterOptions = {
    required: {
        value: true,
        message: t("firstNameRequired", {ns:"validation"})
    },
    maxLength: {
        value: 30,
        message: t("firstNameTooLong", {ns:"validation", count: 30})
    },
    minLength: {
        value: 2,
        message: t("firstNameTooShort", {ns:"validation", count: 2})
    },
}
export const lastNameValidationRule:RegisterOptions = {
    required: false,
    maxLength: {
        value: 30,
        message: t("lastNameTooLong", {ns:"validation", count: 30})
    },
    minLength: {
        value: 2,
        message: t("lastNameTooShort", {ns:"validation", count: 2})
    },
}
export const emailValidationRule:RegisterOptions = {
    required: {
        value: true,
        message: t("emailRequired", {ns:"validation"})
    },
    pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: t("emailInvalid", {ns:"validation"})
    }
}
export const passwordValidationRule:RegisterOptions = {
    minLength: {
        value: 8,
        message: t("passwordTooShort", {ns:"validation", count: 8})
    },
    maxLength: {
        value: 30,
        message: t("passwordTooLong", {ns:"validation", count: 30})
    },
    required: {
        value: true,
        message: t("passwordRequired", {ns:"validation"})
    }
}
export const repeatPasswordValidationRule:RegisterOptions = {
    minLength: {
        value: 8,
        message: t("passwordTooShort", {ns:"validation", count: 8})
    },
    maxLength: {
        value: 30,
        message: t("passwordTooLong", {ns:"validation", count: 30})
    },
    required: {
        value: true,
        message: t("passwordRequired", {ns:"validation"})
    }
}