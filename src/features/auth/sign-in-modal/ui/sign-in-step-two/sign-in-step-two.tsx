import {RegisterOptions, useForm} from "react-hook-form";
import {modalSubmitButtonStyles} from "../../../../../shared/ui";
import {useTranslation} from "react-i18next";
import {fieldStyles, signInStepTwoStyles, submitButtonStyles} from "./sign-in-step-two.styles.ts";
import {Field} from "../../../../../shared/ui/field";
import {passwordValidationRule} from "../../../../../shared/lib";

export type Fields = {
    password: string
}

type PropsType = {
    onSubmit: (data: Fields) => void,
}

export const SignInStepTwo = ({onSubmit}: PropsType) => {
    const {t} = useTranslation()

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<Fields>()

    return <form css={signInStepTwoStyles} onSubmit={handleSubmit(onSubmit)}>
        <Field styles={fieldStyles} placeholder={t("Enter Password")} errorMessage={errors.password?.message} type="password" {...register("password", passwordValidationRule as RegisterOptions<Fields, "password">)}/>
        <button css={[modalSubmitButtonStyles, submitButtonStyles]} type="submit">{t("Continue")}</button>
    </form>
}
