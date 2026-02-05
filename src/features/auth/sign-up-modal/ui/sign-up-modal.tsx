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
    const {t:tAuth} = useTranslation("auth")

    return <div>
        {tAuth("Have an account?")}
        &nbsp;
        <button css={modalHighlightTextStyles} onClick={openSignInModal}>{tAuth("sign_in_here")}</button>
    </div>
}

type PropsType = {
    styles?: Interpolation<Theme>,
    openSignInModal: () => void,
}

export const SignUpModal = ({styles, openSignInModal}: PropsType) => {
    const {t:tAuth} = useTranslation("auth");
    const signUpModalStore = useInjection(SignUpModalStore)

    return <BaseModal modalStore={signUpModalStore.modalStore} contentStyles={modalContentStyles} styles={[signUpModalStyles, styles]} title={tAuth("sign_up_now")}
                      footer={<SignUpModalFooter openSignInModal={openSignInModal}/>}>
        <SignUpForm onSuccess={signUpModalStore.modalStore.close}/>
        <div>
            <SeparatorWithTitle styles={separatorStyles} title={tAuth("or")}/>
            <SignInOptions onSuccess={signUpModalStore.modalStore.close}/>
        </div>
    </BaseModal>
}