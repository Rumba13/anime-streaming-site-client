import {BaseModal, Loading, modalSubtitleStyles} from "../../../../shared/ui";
import {useInjection} from "inversify-react";
import {Interpolation, Theme} from "@emotion/react";
import {
    footerStyles, wrapperStyles, signInModalStyles
} from "./sign-in-modal.styles.ts";
import {SignInModalStore} from "../model/sign-in-modal.store.ts";
import {SeparatorWithTitle} from "../../../../shared/ui/separator-with-title";
import {SignInOptions} from "./sign-in-options/sign-in-options";
import {useTranslation} from "react-i18next";
import {modalHighlightTextStyles} from "../../../../shared/ui";
import {separatorStyles} from "../../../../shared/ui";
import {SignInStepOne} from "./sign-in-step-one/sign-in-step-one.tsx";
import {SignInFormStore} from "../model/sign-in-form.store.ts";
import {observer} from "mobx-react";
import {Fields, SignInStepTwo} from "./sign-in-step-two/sign-in-step-two.tsx";
import {AnimatePresence, motion} from "framer-motion"
import {notification} from "antd";
import {successfulSignInNotificationConfig} from "./successful-sign-in-notification-config.tsx";
import {loadingStyles} from "../../sign-up-modal/ui/sign-up-form/sign-up-form.styles.ts";
import {BaseError} from "../../../../shared/model";
import {UseFormSetError} from "react-hook-form";


type SignInFooterPropsType = {
    openSignUpModal: () => void,
}

const SignInModalFooter = ({openSignUpModal}:SignInFooterPropsType) => {
    const {t} = useTranslation()

    return <div css={footerStyles}>
        {t("New to our platform?")}
        &nbsp;
        <button css={modalHighlightTextStyles} onClick={openSignUpModal}>{t("Sign up now!")}</button>
    </div>
}

type PropsType = {
    styles?: Interpolation<Theme>,
    openSignUpModal: () => void,
}


export const SignInModal = observer(({styles,openSignUpModal}: PropsType) => {
    const signInModalStore = useInjection(SignInModalStore)
    const {setStep, step, signIn, updateSignInDto, loadingStore: {isLoading,error} } = useInjection(SignInFormStore)
    const {t} = useTranslation()
    const [api, contextHolder] = notification.useNotification();

    const onSignInSuccess = () => {
        signInModalStore.modalStore.close()
        api.open(successfulSignInNotificationConfig)
    }

    const onFormSubmit =  (data: Fields) => {
        updateSignInDto(data);
        void signIn(onSignInSuccess)
    }


    return <BaseModal modalStore={signInModalStore.modalStore} styles={[signInModalStyles(isLoading), styles]} title={t("Log in or sign up")}
                      footer={<SignInModalFooter openSignUpModal={openSignUpModal}/>}>
        {contextHolder}
        <div css={wrapperStyles}>
            <span css={modalSubtitleStyles}>{t("Welcome to EpicAnime")}</span>
            {isLoading && <Loading styles={loadingStyles}/>}
            <AnimatePresence mode="wait">
                {step === 1 &&
                    <motion.div
                        key="step1"
                        initial={{ opacity: 1, x: 0 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                    <SignInStepOne onSubmit={(data) => {
                        updateSignInDto(data);
                        setStep(2)
                    }} emailError={error?.message}/>
                </motion.div>}
                {step === 2 &&
                    <motion.div
                        key="step2"
                        initial={{ opacity: 0, x: 0 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                    <SignInStepTwo onSubmit={onFormSubmit}/>
                </motion.div>}

            </AnimatePresence>
            <div>
                <SeparatorWithTitle styles={separatorStyles} title={t("or")}/>
                <SignInOptions onSuccess={signInModalStore.modalStore.close}/>
            </div>
        </div>

    </BaseModal>
})