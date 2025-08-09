import {
    modalContentStyles,
    signUpModalStyles
} from "./sign-up-modal.styles";
import {BaseModal, modalHighlightTextStyles} from "../../../../shared/ui";
import {SignUpModalStore} from "../model/sign-up-modal.store";
import {useTranslation} from "react-i18next";
import {useInjection} from "inversify-react";
import {Interpolation, Theme} from "@emotion/react";
//TODO change import or move component
import {SignInOptions} from "../../sign-in-modal/ui/sign-in-options/sign-in-options.tsx";
import {SeparatorWithTitle} from "../../../../shared/ui/separator-with-title";
import {separatorStyles} from "../../../../shared/ui";
import {SignUpForm} from "./sign-up-form/sign-up-form.tsx";

type SignUpModalFooterPropsType = {
    openSignInModal: () => void,
}

const SignUpModalFooter = ({openSignInModal}: SignUpModalFooterPropsType) => {
    const {t} = useTranslation()

    return <div>
        {t("Have an account?")}
        &nbsp;
        <button css={modalHighlightTextStyles} onClick={openSignInModal}>{t("Log in here!")}</button>
    </div>
}

type PropsType = {
    styles?: Interpolation<Theme>,
    openSignInModal: () => void,
}

export const SignUpModal = ({styles, openSignInModal}: PropsType) => {
    const {t} = useTranslation();
    const signUpModalStore = useInjection(SignUpModalStore)

    return <BaseModal modalStore={signUpModalStore} contentStyles={modalContentStyles} styles={[signUpModalStyles, styles]} title={t("Sign up now!")}
                      footer={<SignUpModalFooter openSignInModal={openSignInModal}/>}>
        <SignUpForm onSuccess={signUpModalStore.close}/>
        <div>
            <SeparatorWithTitle styles={separatorStyles} title={t("or")}/>
            <SignInOptions/>
        </div>
    </BaseModal>
}