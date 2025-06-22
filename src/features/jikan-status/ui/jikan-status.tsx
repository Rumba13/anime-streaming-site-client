import "./jikan-status.scss"
import {observer} from "mobx-react";
import {useInjection} from "inversify-react";
import {JikanStatusStore} from "../model/jikan-status-store.ts";
import clsx from "clsx/lite";
import { useTranslation } from "react-i18next";

export const JikanStatus = observer(() => {
    const jikanStatusStore = useInjection(JikanStatusStore);
    const { t } = useTranslation();

    return <div className="jikan-status">
        <div className={clsx("jikan-status__mark", jikanStatusStore.getStatus() && "active")}></div>
        <h2 className="jikan-status__title">{t("Jikan Connection")}: </h2>
        <span className="jikan-status__status">{jikanStatusStore.getStatus() ? t("Connected") : t("Not Connected")}</span>
    </div>
})

