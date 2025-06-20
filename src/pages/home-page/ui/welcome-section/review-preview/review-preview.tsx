import "./review-preview.scss";
import {Review} from "../../../../../shared/types";
import { useTranslation } from "react-i18next";

export function ReviewPreview() {
    const { t } = useTranslation();

    const review: Review = {
        title: "Major 'One Piece' Revelation Unveiled!\"",
        content: "Creator Eiichiro Oda reveals a game-changing event in 'One Piece'! What's next for Luffy and the crew? Dive into the latest scoop on the beloved series."
    }

    return <div className="review-preview">
        <h2 className="review-preview__title">{t("Epic Feed")}</h2>
        <h3 className="review-preview__sub-title">{review.title}</h3>
        <p className="review-preview__content">{review.content}</p>
        <a className="review-preview__link" href="">{t("Read More")}</a>
    </div>
}
