import {RatingFilterStore} from "../model/rating-filter.store.ts";
import {Slider} from "antd"
import {MIN_RATING, MAX_RATING} from "../../../shared/lib/rating-constants.ts";
import {observer} from "mobx-react";
import {ratingRangeStyles} from "./rating-range.styles.ts";


type PropsType = {
    ratingFilterStore: RatingFilterStore;
}

export const RatingRange = observer(({ratingFilterStore}: PropsType) => {

    const handleOnChange = (range: number[]) => ratingFilterStore.setRating(range[0], range[1])

    return <Slider
        css={ratingRangeStyles}
        min={MIN_RATING}
        max={MAX_RATING}
        step={1}
        range
        value={[ratingFilterStore.minimalRating || 0, ratingFilterStore.maximumRating || 10]}
        onChange={handleOnChange}
    />
})