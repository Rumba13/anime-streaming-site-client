import {BaseModal, Loading, modalSubtitleStyles} from "../../../../shared/ui";
import {useInjection} from "inversify-react";
import {Interpolation, Theme} from "@emotion/react";
import {
    wrapperStyles, signInModalStyles
} from "./sign-in-modal.styles.ts";
import {SignInModalStore} from "../model/sign-in-modal.store.ts";
import {SeparatorWithTitle} from "../../../../shared/ui/separator-with-title";
import {SignInOptions} from "./sign-in-options/sign-in-options";
import {useTranslation} from "react-i18next";
import {separatorStyles} from "../../../../shared/ui";
import {SignInStepOne} from "./sign-in-step-one/sign-in-step-one.tsx";
import {SignInFormStore} from "../model/sign-in-form.store.ts";
import {observer} from "mobx-react";
import {SignInStepTwoFields, SignInStepTwo} from "./sign-in-step-two/sign-in-step-two.tsx";
import {AnimatePresence, motion} from "framer-motion"
import {notification} from "antd";
import {successfulSignInNotificationConfig} from "./successful-sign-in-notification-config.tsx";
import {loadingStyles} from "../../sign-up-modal/ui/sign-up-form/sign-up-form.styles.ts";
import {SignInFormStepsStore} from "../model/sign-in-form-steps.store.ts";
import {STEPS} from "../lib/steps.ts";
import {SignInModalFooter} from "./sign-in-modal-footer/sign-in-modal-footer.tsx";
import {useCallback, useEffect} from "react";
import {useForm} from "react-hook-form";
import {BaseError} from "../../../../shared/model";

const basicAnimationConfig = {
    animate: {opacity: 1, x: 0},
    exit: {opacity: 0, x: 0},
    transition: {duration: 0.2}
}
const stepOneAnimationConfig = {
    ...basicAnimationConfig,
    initial: {opacity: 1, x: 0},
}
const stepTwoAnimationConfig = {
    ...basicAnimationConfig,
    initial: {opacity: 0, x: 0},
}

export type SignInFormFields = {
    email: string
    password: string
}

type PropsType = {
    styles?: Interpolation<Theme>,
    openSignUpModal: () => void,
}

export const SignInModal = observer(({styles, openSignUpModal}: PropsType) => {
    const signInModalStore = useInjection(SignInModalStore)
    const {step, resetSteps, nextStep} = useInjection(SignInFormStepsStore)
    const {signIn, loadingStore: {isLoading}} = useInjection(SignInFormStore)
    const {t:tCommon} = useTranslation("common")
    const {t:tAuth} = useTranslation("auth")
    const [api, contextHolder] = notification.useNotification();
    const signInForm = useForm<SignInFormFields>()

    const onFormSubmit = useCallback((signInDto: SignInFormFields) => {
        void signIn(signInDto)
            .then(() => {
                signInModalStore.modalStore.close()
                api.open(successfulSignInNotificationConfig)
            })
            .catch((error: BaseError) => {
                if (error?.message) {
                    signInForm.setError("email", {
                        message: error?.message
                    })
                }
            })
            .finally(() => {
                resetSteps()
                signInForm.reset(undefined, {
                    keepErrors: true
                });
            })

    }, [signIn])

    return <BaseModal modalStore={signInModalStore.modalStore} styles={[signInModalStyles(isLoading), styles]}
                      title={tAuth("Log in or sign up")}
                      footer={<SignInModalFooter openSignUpModal={openSignUpModal}/>}>
        {contextHolder}

        <div css={wrapperStyles}>
            <span css={modalSubtitleStyles}>{tCommon("Welcome to EpicAnime")}</span>
            <form onSubmit={signInForm.handleSubmit(onFormSubmit)}>
                {isLoading && <Loading styles={loadingStyles}/>}
                <AnimatePresence mode="wait">
                    {step === STEPS.EMAIL &&
                        <motion.div key="step1" {...stepOneAnimationConfig}>
                            <SignInStepOne signInForm={signInForm} nextStep={nextStep}/>
                        </motion.div>
                    }
                    {step === STEPS.PASSWORD &&
                        <motion.div key="step2" {...stepTwoAnimationConfig}>
                            <SignInStepTwo signInForm={signInForm} onSubmit={onFormSubmit}/>
                        </motion.div>
                    }
                </AnimatePresence>
            </form>
            <div>
                <SeparatorWithTitle styles={separatorStyles} title={tAuth("or")}/>
                <SignInOptions onSuccess={signInModalStore.modalStore.close}/>
            </div>
        </div>

    </BaseModal>
})