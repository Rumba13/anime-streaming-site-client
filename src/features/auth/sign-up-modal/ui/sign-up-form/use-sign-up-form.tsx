import {SubmitHandler, useForm, UseFormSetError} from "react-hook-form";
import {useInjection} from "inversify-react";
import {SignUpFormStore} from "../../model/sign-up-form.store.ts";
import {useTranslation} from "react-i18next";
import {notification} from "antd";
import {successfulSignUpNotificationConfig} from "./successful-sign-up-notification-config.tsx";
import {unknownSignUpErrorNotificationConfig} from "./unknown-sign-up-error-notification-config.tsx";
import {BaseError} from "../../../../../shared/model";
import {Fields} from "./sign-up-form.types.ts";

const handleFormError = (error: BaseError, setFieldError: UseFormSetError<Fields>, handleUnknownError: () => void) => {
    if (error.type === "EmailAlreadyExistsError") {
        setFieldError("email", {
            message: "that email already exists"
        });
    } else if (error.type === "UnknownError") {
        handleUnknownError()
    }
}

export const useSignUpForm = (initialValues?: Partial<Fields>, onSuccess?: () => void) => {
    const {
        register,
        handleSubmit,
        formState: {errors},
        setError
    } = useForm<Fields>({defaultValues: initialValues})
    const signUpFormStore = useInjection(SignUpFormStore)
    const {t} = useTranslation();
    const [api, contextHolder] = notification.useNotification();
    const openSuccessSignUpNotification = () => api.open(successfulSignUpNotificationConfig);
    const openUnknownSignUpErrorNotification = () => api.open(unknownSignUpErrorNotificationConfig);

    const onSubmit: SubmitHandler<Fields> = async (data: Fields) => {
        if (data.password !== data.repeatedPassword) {
            setError("repeatedPassword", {message: t("Passwords do not match")})
            setError("password", {message: t("Passwords do not match")})
            return;
        }

        await signUpFormStore.signUp(data)

        if (signUpFormStore.isError && signUpFormStore.error) {
            return handleFormError(signUpFormStore.error, setError, openUnknownSignUpErrorNotification)
        }

        onSuccess?.()
        openSuccessSignUpNotification()
    }

    return {register, handleSubmit, errors, setError, onSubmit, contextHolder};
}