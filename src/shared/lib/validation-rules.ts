import {RegisterOptions } from "react-hook-form";
import {t} from "i18next";

export const firstNameValidationRule:RegisterOptions = {
    required: {
        value: true,
        message: t("first_name_required", {ns:"validation"})
    },
    maxLength: {
        value: 30,
        message: t("first_name_too_long", {ns:"validation", count: 30})
    },
    minLength: {
        value: 2,
        message: t("first_name_too_short", {ns:"validation", count: 2})
    },
}
export const lastNameValidationRule:RegisterOptions = {
    required: false,
    maxLength: {
        value: 30,
        message: t("last_name_too_long", {ns:"validation", count: 30})
    },
    minLength: {
        value: 2,
        message: t("last_name_too_short", {ns:"validation", count: 2})
    },
}
export const emailValidationRule:RegisterOptions = {
    required: {
        value: true,
        message: t("email_is_required", {ns:"validation"})
    },
    pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: t("email_is_invalid", {ns:"validation"})
    }
}
export const passwordValidationRule:RegisterOptions = {
    minLength: {
        value: 8,
        message: t("password_too_short", {ns:"validation", count: 8})
    },
    maxLength: {
        value: 30,
        message: t("password_is_too_long", {ns:"validation", count: 30})
    },
    required: {
        value: true,
        message: t("password_is_required", {ns:"validation"})
    }
}
export const repeatPasswordValidationRule:RegisterOptions = {
    minLength: {
        value: 8,
        message: t("password_too_short", {ns:"validation", count: 8})
    },
    maxLength: {
        value: 30,
        message: t("password_is_too_long", {ns:"validation", count: 30})
    },
    required: {
        value: true,
        message: t("password_is_required", {ns:"validation"})
    }
}