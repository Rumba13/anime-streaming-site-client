import "./review-preview.scss";
import {Review} from "../../../../../shared/types";

export function ReviewPreview() {

    const review: Review = {
        title: "Major 'One Piece' Revelation Unveiled!\"",
        content: "Creator Eiichiro Oda reveals a game-changing event in 'One Piece'! What's next for Luffy and the crew? Dive into the latest scoop on the beloved series."
    }

    return <div className="review-preview">
        <h2 className="review-preview__title">Epic Feed</h2>
        <h3 className="review-preview__sub-title">{review.title}</h3>
        <p className="review-preview__content">{review.content}</p>
        <a className="review-preview__link" href="">Read More</a>
    </div>
}