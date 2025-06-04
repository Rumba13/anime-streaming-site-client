import "./not-found-page.scss";
import {useTranslation} from "react-i18next";

export function NotFoundPage() {
    const {t} = useTranslation();
    return <div className="not-found-page">{t("Page Not Found")}</div>
}