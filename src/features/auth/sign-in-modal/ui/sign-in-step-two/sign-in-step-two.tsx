import {RegisterOptions, UseFormReturn} from "react-hook-form";
import {modalSubmitButtonStyles} from "../../../../../shared/ui";
import {useTranslation} from "react-i18next";
import {fieldStyles, signInStepTwoStyles, submitButtonStyles} from "./sign-in-step-two.styles.ts";
import {Field} from "../../../../../shared/ui/field";
import {passwordValidationRule} from "../../../../../shared/lib";
import {SignInFormFields} from "../sign-in-modal.tsx";

type PropsType = {
    signInForm: UseFormReturn<SignInFormFields, any, SignInFormFields>
}

export const SignInStepTwo = ({
                                  signInForm: {register, formState: {errors}}
                              }: PropsType) => {
    const {t:tAuth} = useTranslation("auth")
    const {t:tCommon} = useTranslation("common")

    return <div css={signInStepTwoStyles}>
        <Field styles={fieldStyles} placeholder={tAuth("Enter Password")} autoFocus errorMessage={errors.password?.message}
               type="password" {...register("password", passwordValidationRule as RegisterOptions<SignInFormFields, "password">)}/>
        <button css={[modalSubmitButtonStyles, submitButtonStyles]} type="submit">{tCommon("Continue")}</button>
    </div>
}
