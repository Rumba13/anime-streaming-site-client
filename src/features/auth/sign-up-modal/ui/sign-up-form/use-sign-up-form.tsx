import {SubmitHandler, useForm, UseFormSetError} from "react-hook-form";
import {useInjection} from "inversify-react";
import {SignUpFormStore} from "../../model/sign-up-form.store.ts";
import {useTranslation} from "react-i18next";
import {notification} from "antd";
import {successfulSignUpNotificationConfig} from "./successful-sign-up-notification-config.tsx";
import {unknownErrorNotificationConfig} from "./unknown-error-notification-config.tsx";
import {BaseError} from "../../../../../shared/model";
import {Fields} from "./sign-up-form.types.ts";
import {useState} from "react";

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
    const {t:tValidation} = useTranslation("validation");
    const [api, contextHolder] = notification.useNotification();
    const openSuccessSignUpNotification = () => api.open(successfulSignUpNotificationConfig);
    const openUnknownSignUpErrorNotification = () => api.open(unknownErrorNotificationConfig)
    const [isPasswordShown, setIsPasswordShown] = useState<boolean>(false)

    const onSubmit: SubmitHandler<Fields> = async (data: Fields) => {
        if (data.password !== data.repeatedPassword) {
            setError("repeatedPassword", {message: tValidation("passwords_do_not_match")})
            setError("password", {message: tValidation("passwords_do_not_match")})
            return;
        }

        await signUpFormStore.signUp(data)

        if (signUpFormStore.loadingStore.isError && signUpFormStore.loadingStore.error) {
            return handleFormError(signUpFormStore.loadingStore.error, setError, openUnknownSignUpErrorNotification)
        }

        onSuccess?.()
        openSuccessSignUpNotification()
    }

    return {register, handleSubmit, errors, setError, onSubmit, contextHolder,isPasswordShown, setIsPasswordShown};
}