import {Loading, modalSubmitButtonStyles, modalSubtitleStyles} from "../../../../../shared/ui";
import {Field} from "../../../../../shared/ui/field";
import {
    emailValidationRule,
    firstNameValidationRule,
    lastNameValidationRule,
    passwordValidationRule, repeatPasswordValidationRule
} from "../../../../../shared/lib";
import {RegisterOptions, SubmitHandler, useForm, UseFormSetError} from "react-hook-form";
import {useInjection} from "inversify-react";
import {SignUpFormStore} from "../../model/sign-up-form.store.ts";
import {useTranslation} from "react-i18next";
import {notification} from "antd";
import {buttonStyles, emailFieldStyles, formContainerStyles, formStyles, loadingStyles} from "./sign-up-form.styles.ts";
import {observer} from "mobx-react";
import UserIcon from "../../../../../assets/images/user.svg?react"
import {BaseError} from "../../../../../shared/model";

type Fields = {
    firstName: string,
    lastName?: string,
    email: string,
    password: string,
    repeatedPassword: string,
}

const handleFormError = (error: BaseError | null, setFieldError: UseFormSetError<Fields>) => {
    if (error?.type === "EmailAlreadyExistsError") {
        setFieldError("email", {
            message: "that email already exists"
        });
    }
}

type PropsType = {
    onSuccess?: () => void,
    initialValues?: Partial<Fields>
}

export const SignUpForm = observer(({onSuccess,initialValues}: PropsType) => {
    const signUpFormStore = useInjection(SignUpFormStore)
    const {t} = useTranslation();
    const [api, contextHolder] = notification.useNotification();

    const {
        register,
        handleSubmit,
        formState: {errors},
        setError
    } = useForm<Fields>({defaultValues: initialValues})

    const openSuccessSignUpNotification = () => {
        api.open({
            message: t("Successful Login Message"),
            description: t("Welcome to EpicAnime"),
            placement: "bottomRight",
            duration: 3.5,
            pauseOnHover: false,
            className: "notification",
            showProgress: true,
            icon: <UserIcon/>
        });
    };

    const onSubmit: SubmitHandler<Fields> = async (data: Fields) => {
        await signUpFormStore.signUp(data)

        if (!signUpFormStore.isError) {
            onSuccess?.()
            openSuccessSignUpNotification()
        } else  {
            handleFormError(signUpFormStore.error, setError)
        }
    }

    return <form css={formStyles(signUpFormStore.isLoading)} onSubmit={handleSubmit(onSubmit)}>
        {contextHolder}
        {signUpFormStore.isLoading && <Loading styles={loadingStyles}/>}

        <span css={modalSubtitleStyles}>{t("Get Started!")}</span>

        <div css={formContainerStyles}>
            <Field errorMessage={errors?.firstName?.message}
                   placeholder={t("First Name")}
                   type="text"  {...register("firstName", firstNameValidationRule as RegisterOptions<Fields, "firstName">)}/>
            <Field errorMessage={errors?.lastName?.message} placeholder={t("Last Name")}
                   type="text" {...register("lastName", lastNameValidationRule as RegisterOptions<Fields, "lastName">)}/>
            <Field errorMessage={errors.email?.message} css={emailFieldStyles} placeholder={t("Enter Email ID")}
                   type="email" {...register("email", emailValidationRule as RegisterOptions<Fields, "email">)}/>
            <Field errorMessage={errors.password?.message} placeholder={t("Create Password")}
                   type="password" {...register("password", passwordValidationRule as RegisterOptions<Fields, "password">)}/>
            <Field errorMessage={errors.repeatedPassword?.message} placeholder={t("Confirm Password")}
                   type="password" {...register("repeatedPassword", repeatPasswordValidationRule as RegisterOptions<Fields, "repeatedPassword">)}/>

            <button css={[modalSubmitButtonStyles, buttonStyles]} type="submit">{t("Continue")}</button>
        </div>

    </form>
})
