import {observer} from "mobx-react";
import {useInjection} from "inversify-react";
import {JikanStatusStore} from "../model/jikan-status.store.ts";
import {useTranslation} from "react-i18next";
import {jikanStatusMark, jikanStatusStatus, jikanStatusStyle, jikanStatusTitle} from "./jikan-status.styles.ts";

export const JikanStatus = observer(() => {
    const {t} = useTranslation();
    const jikanStatusStore = useInjection(JikanStatusStore);
    const isConnected = jikanStatusStore.getStatus();

    return <div css={jikanStatusStyle}>
        <div css={jikanStatusMark(isConnected)}></div>
        <h2 css={jikanStatusTitle}>{t("Jikan Connection")}: </h2>
        <span css={jikanStatusStatus}>
             {isConnected ? t("Connected") : t("Not Connected")}
        </span>
    </div>
});