import {observer} from "mobx-react";
import {useInjection} from "inversify-react";
import {JikanStatusStore} from "../model/jikan-status.store";
import {useTranslation} from "react-i18next";
import {jikanStatusMark, jikanStatusStatus, jikanStatusStyle, jikanStatusTitle} from "./jikan-status.styles";
import {Interpolation, Theme} from "@emotion/react";

type PropsType = {
    styles?: Interpolation<Theme>
}

export const JikanStatus = observer(({styles}: PropsType) => {
    const jikanStatusStore = useInjection(JikanStatusStore);
    const {t} = useTranslation();
    const isConnected = jikanStatusStore.getStatus();

    return <div css={[jikanStatusStyle, styles]}>
        <div css={jikanStatusMark(isConnected)}></div>
        <h2 css={jikanStatusTitle}>{t("Jikan Connection")}: </h2>
        <span css={jikanStatusStatus}>
             {isConnected ? t("Connected") : t("Not Connected")}
        </span>
    </div>
});