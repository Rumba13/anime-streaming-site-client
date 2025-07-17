import {RatingFilterStore} from "../model/rating-filter.store.ts";
import {Slider} from "antd"
import {MIN_RATING, MAX_RATING} from "../../../shared/lib/rating-constants.ts";
import {observer} from "mobx-react";


type PropsType = {
    ratingFilterStore: RatingFilterStore;
}

export const RatingRange = observer(({ratingFilterStore}: PropsType) => {

    const handleOnChange = (range: number[]) => ratingFilterStore.setRating(range[0], range[1])

    return <Slider
        min={MIN_RATING}
        max={MAX_RATING}
        step={1}
        range
        value={[ratingFilterStore.minimalRating, ratingFilterStore.maximumRating]}
        onChange={handleOnChange}
        // dots
        // marks={Array.from({length:11}).map((_, i) => i )}
    />
})