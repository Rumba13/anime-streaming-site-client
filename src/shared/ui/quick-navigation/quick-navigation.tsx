import "./quick-navigation.scss";
import {ROUTES} from "../../lib/routes.ts";
import {ListItem} from "../list-item/list-item.tsx";
import {useTranslation} from "react-i18next";

type PropsType = {
    title?: string
}

export function QuickNavigation({title}: PropsType) {
    const { t } = useTranslation();

    return <div className="quick-navigation">
        <span className="quick-navigation__title">{title || t('Quick Navigation')}</span>
        <ul className="quick-navigation-list">
            <ListItem className="quick-navigation__item" link="1">{t('Browse Popular')}</ListItem>
            <ListItem className="quick-navigation__item" link="2">{t('Browse News')}</ListItem>
            <ListItem className="quick-navigation__item" link="3">{t('Interviews')}</ListItem>
            <ListItem className="quick-navigation__item" link="4">{t('Guides')}</ListItem>
            <ListItem className="quick-navigation__item" link="5">{t('Announcements')}</ListItem>
            <ListItem className="quick-navigation__item" link={ROUTES.TRAILERS_PAGE}>{t('Trailers')}</ListItem>
        </ul>
    </div>
}