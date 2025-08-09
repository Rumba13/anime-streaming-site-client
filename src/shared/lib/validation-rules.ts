import {RegisterOptions} from "react-hook-form";
import {t} from "i18next";


export const firstNameValidationRule: RegisterOptions = {
    required: {
        value: true,
        message: t("firstNameRequired")
    },
    maxLength: {
        value: 30,
        message: t("firstNameTooLong", {count: 30})
    },
    minLength: {
        value: 2,
        message: t("firstNameTooShort", {count: 2})
    },
}

export const lastNameValidationRule: RegisterOptions = {
    required: false,
    maxLength: {
        value: 30,
        message: t("lastNameTooLong", {count: 30})
    },
    minLength: {
        value: 2,
        message: t("lastNameTooShort", {count: 2})
    },
}

export const emailValidationRule: RegisterOptions = {
    required: {
        value: true,
        message: t("emailRequired")
    },
    pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: t("emailInvalid")
    }
}

export const passwordValidationRule: RegisterOptions = {
    minLength: {
        value: 8,
        message: t("passwordTooShort", {count: 8})
    },
    maxLength: {
        value: 30,
        message: t("passwordTooLong", {count: 30})
    },
    required: {
        value: true,
        message: t("passwordRequired")
    },
    validate: {
        hasNumber: (value: string) => /\d/.test(value) || t("Password must contain at least one number"),
    }
}

export const repeatPasswordValidationRule: RegisterOptions = {
    required: {
        value: true,
        message: t("passwordRequired")
    },
}