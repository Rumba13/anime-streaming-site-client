import {BaseModal} from "../../../../shared/ui/base-modal/base-modal.tsx";
import {useInjection} from "inversify-react";
import {Interpolation, Theme} from "@emotion/react";
import {
    fieldStyles,
    fieldWrapperStyles,
    footerStyles, formButtonStyles,
    formStyles,
    highlightTextStyles,
    modalSubtitleStyles, separatorStyles,
    signInModalStyles
} from "./sign-in-modal.styles.ts";
import {SignInModalStore} from "../model/sign-in-modal.store.ts";
import {SubmitHandler, useForm} from "react-hook-form";
import {Field} from "../../../../shared/ui/field";
import {SeparatorWithTitle} from "../../../../shared/ui/separator-with-title";

const SignInModalFooter = () => {
    return <div css={footerStyles}>
        New to our platform?
        &nbsp;
        <button css={highlightTextStyles}>Sign up now!</button>
    </div>
}

type PropsType = {
    styles?: Interpolation<Theme>
}

type Inputs = {
    email: string
}

export const SignInModal = ({styles}: PropsType) => {
    const signInModalStore = useInjection(SignInModalStore)

    const {
        register,
        handleSubmit,
        watch,
        formState: {errors},
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

    console.log(watch("email"))

    return <BaseModal modalStore={signInModalStore} styles={[signInModalStyles, styles]} title={"Log in or sign up"}
                      footer={<SignInModalFooter/>}>
        <form css={formStyles} onSubmit={handleSubmit(onSubmit)}>
            <span css={modalSubtitleStyles}>Welcome to EpicAnime</span>

            <div css={fieldWrapperStyles}>
                <Field css={fieldStyles} type="email" placeholder="Email" {...register("email")} />

                {errors.email && <span>This field is required</span>}

                <button css={formButtonStyles} type="submit">Continue</button>
            </div>
            <div>
                <SeparatorWithTitle styles={separatorStyles} title="or"/>
            </div>
        </form>

    </BaseModal>
}