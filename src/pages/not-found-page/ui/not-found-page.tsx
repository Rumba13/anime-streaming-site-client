import {useTranslation} from "react-i18next";

export function NotFoundPage() {
    const {t} = useTranslation();
    return <div>{t("page_not_found")}</div>
}