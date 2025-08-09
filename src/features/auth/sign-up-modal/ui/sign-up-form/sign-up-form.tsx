import {Loading, modalSubmitButtonStyles, modalSubtitleStyles} from "../../../../../shared/ui";
import {Field} from "../../../../../shared/ui/field";
import {
    emailValidationRule,
    firstNameValidationRule,
    lastNameValidationRule,
    passwordValidationRule,
    repeatPasswordValidationRule
} from "../../../../../shared/lib";
import {RegisterOptions} from "react-hook-form";
import {useInjection} from "inversify-react";
import {SignUpFormStore} from "../../model/sign-up-form.store.ts";
import {useTranslation} from "react-i18next";
import {buttonStyles, emailFieldStyles, formContainerStyles, formStyles, loadingStyles} from "./sign-up-form.styles.ts";
import {observer} from "mobx-react";
import {useSignUpForm} from "./use-sign-up-form.tsx";
import { Fields } from "./sign-up-form.types.ts";
import {PasswordField} from "../../../../../shared/ui/password-field/password-field.tsx";

type PropsType = {
    onSuccess?: () => void,
    initialValues?: Partial<Fields>
}

export const SignUpForm = observer(({onSuccess, initialValues}: PropsType) => {
    const signUpFormStore = useInjection(SignUpFormStore)
    const {t} = useTranslation();

    const {register, handleSubmit, errors, onSubmit, contextHolder, setIsPasswordShown,isPasswordShown} = useSignUpForm(initialValues, onSuccess)

    const togglePasswordVisibility = () => setIsPasswordShown(value => !value)

    return <form css={formStyles(signUpFormStore.isLoading)} onSubmit={handleSubmit(onSubmit)}>
        {contextHolder}
        {signUpFormStore.isLoading && <Loading styles={loadingStyles}/>}

        <span css={modalSubtitleStyles}>{t("Get Started!")}</span>

        <div css={formContainerStyles}>
            <Field errorMessage={errors.firstName?.message}
                   placeholder={t("First Name")}
                   type="text"  {...register("firstName", firstNameValidationRule as RegisterOptions<Fields, "firstName">)}/>
            <Field errorMessage={errors.lastName?.message} placeholder={t("Last Name")}
                   type="text" {...register("lastName", lastNameValidationRule as RegisterOptions<Fields, "lastName">)}/>
            <Field errorMessage={errors.email?.message} css={emailFieldStyles} placeholder={t("Enter Email ID")}
                   type="email" {...register("email", emailValidationRule as RegisterOptions<Fields, "email">)}/>
            <PasswordField isPasswordShown={isPasswordShown} onPasswordVisibilityIconClick={togglePasswordVisibility} errorMessage={errors.password?.message} placeholder={t("Create Password")}
                     {...register("password", passwordValidationRule as RegisterOptions<Fields, "password">)}/>
            <PasswordField isPasswordShown={isPasswordShown} onPasswordVisibilityIconClick={togglePasswordVisibility} errorMessage={errors.repeatedPassword?.message} placeholder={t("Confirm Password")}
                     {...register("repeatedPassword", repeatPasswordValidationRule as RegisterOptions<Fields, "repeatedPassword">)}/>

            <button css={[modalSubmitButtonStyles, buttonStyles]} type="submit">{t("Continue")}</button>
        </div>
    </form>
})
