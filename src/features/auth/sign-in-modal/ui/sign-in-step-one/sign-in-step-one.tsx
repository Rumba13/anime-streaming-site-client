import {Field} from "../../../../../shared/ui/field";
import {emailValidationRule} from "../../../../../shared/lib";
import {RegisterOptions, useForm} from "react-hook-form";
import {modalSubmitButtonStyles} from "../../../../../shared/ui";
import {useTranslation} from "react-i18next";
import {fieldStyles, signInStepOneStyles, submitButtonStyles} from "./sign-in-step-one.styles.ts";
import {useEffect} from "react";

export type Fields = {
    email: string
}

type PropsType = {
    onSubmit: (data: Fields) => void,
    emailError?: string
}

export const SignInStepOne = ({onSubmit, emailError}: PropsType) => {
    const {t} = useTranslation()

    const {
        register,
        handleSubmit,
        formState: {errors},
        setError
    } = useForm<Fields>()

    useEffect(() => {
        if (emailError) {
            setError("email", {
                message: emailError
            })
        }
    }, [emailError]);

    return <form css={signInStepOneStyles} onSubmit={handleSubmit(onSubmit)}>
        <Field errorMessage={errors.email?.message} styles={fieldStyles} type="email" autoFocus
               placeholder={t("Email")} {...register("email", emailValidationRule as RegisterOptions<Fields, "email">)} />

        <button css={[modalSubmitButtonStyles, submitButtonStyles]} type="submit">{t("Continue")}</button>
    </form>
}
