import {Field} from "../../../../../shared/ui/field";
import {emailValidationRule} from "../../../../../shared/lib";
import {RegisterOptions, useForm} from "react-hook-form";
import {modalSubmitButtonStyles} from "../../../../../shared/ui";
import {useTranslation} from "react-i18next";
import {fieldStyles, signInStepOneStyles, submitButtonStyles} from "./sign-in-step-one.styles.ts";

export type Fields = {
    email: string
}

type PropsType = {
    onSubmit: (data: Fields) => void,
}

export const SignInStepOne = ({onSubmit}:PropsType) => {
    const {t} = useTranslation()

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<Fields>()

    return <form css={signInStepOneStyles} onSubmit={handleSubmit(onSubmit)}>
        <Field errorMessage={errors.email?.message} styles={fieldStyles} type="email"
               placeholder={t("Email")} {...register("email", emailValidationRule as RegisterOptions<Fields, "email">)} />

        <button css={[modalSubmitButtonStyles,submitButtonStyles]} type="submit">{t("Continue")}</button>
    </form>
}
