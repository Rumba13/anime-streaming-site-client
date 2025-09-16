import {Field} from "../../../../../shared/ui/field";
import {emailValidationRule} from "../../../../../shared/lib";
import {RegisterOptions, UseFormReturn} from "react-hook-form";
import {modalSubmitButtonStyles} from "../../../../../shared/ui";
import {useTranslation} from "react-i18next";
import {fieldStyles, signInStepOneStyles, submitButtonStyles} from "./sign-in-step-one.styles.ts";
import {SignInFormFields} from "../sign-in-modal.tsx";

type PropsType = {
    signInForm: UseFormReturn<SignInFormFields, any, SignInFormFields>,
    nextStep: () => void
}

export const SignInStepOne = ({
                                  signInForm: {register, formState: {errors}, trigger},
                                  nextStep
                              }: PropsType) => {
    const {t} = useTranslation()

    const tryNextStep = (e: Event) => {
        e.preventDefault()

        void trigger('email', {shouldFocus: true}).then((isValid) => {
            if (isValid) nextStep();
        });
    }

    return <div css={signInStepOneStyles}>
        <Field errorMessage={errors.email?.message} styles={fieldStyles} type="email" autoFocus
               onKeyDown={(e) => e.key === "Enter" && tryNextStep(e)}
               placeholder={t("Email")} {...register("email", emailValidationRule as RegisterOptions<SignInFormFields, "email">)} />

        <button css={[modalSubmitButtonStyles, submitButtonStyles]} type="button"
                onClick={tryNextStep}>{t("Continue")}</button>
    </div>
}
