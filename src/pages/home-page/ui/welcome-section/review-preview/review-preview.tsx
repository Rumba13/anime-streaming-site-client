import {reviewPreviewStyle, reviewPreviewTitle, reviewPreviewSubTitle, reviewPreviewContent, reviewPreviewLink} from "./review-preview.styles";
import {Review} from "../../../../../shared/types";
import { useTranslation } from "react-i18next";
import {Interpolation, Theme} from "@emotion/react";
import {Link} from "react-router-dom";

type PropsType = {
    styles?:Interpolation<Theme>
}

export function ReviewPreview({styles}:PropsType) {
    const { t } = useTranslation();

    const review: Review = {
        title: "Major 'One Piece' Revelation Unveiled!\"",
        content: "Creator Eiichiro Oda reveals a game-changing event in 'One Piece'! What's next for Luffy and the crew? Dive into the latest scoop on the beloved series."
    }

    return <div css={[reviewPreviewStyle,styles]}>
        <h2 css={reviewPreviewTitle}>{t("epic_feed")}</h2>
        <h3 css={reviewPreviewSubTitle}>{review.title}</h3>
        <p css={reviewPreviewContent}>{review.content}</p>
        <Link css={reviewPreviewLink} to="">{t("read_more")}</Link>
    </div>
}
