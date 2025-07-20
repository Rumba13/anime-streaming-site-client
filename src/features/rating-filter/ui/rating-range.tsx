import {RatingFilterStore} from "../model/rating-filter.store.ts";
import {Slider} from "antd"
import {MIN_RATING, MAX_RATING} from "../../../shared/lib/rating-constants.ts";
import {observer} from "mobx-react";
import {ratingRangeStyles} from "./rating-range.styles.ts";
import {useEffect, useMemo, useState} from "react";
import {debounce} from "ts-debounce"

type PropsType = {
    ratingFilterStore: RatingFilterStore;
}

export const RatingRange = observer(({ratingFilterStore: {setRating, minimalRating, maximumRating}}: PropsType) => {
    const defaultValue = [minimalRating || MIN_RATING, maximumRating || MAX_RATING]

    const [ratingRange, setRatingRange] = useState<number[]>(defaultValue);

    const debouncedSetRating = useMemo(() => debounce(setRating, 200), [setRating])

    useEffect(() => {
        if (minimalRating !== ratingRange[0] || maximumRating !== ratingRange[1]) {
            setRatingRange(defaultValue)
        }
    }, [minimalRating, maximumRating]);

    useEffect(() => {
        void debouncedSetRating(ratingRange[0], ratingRange[1])
        return () => debouncedSetRating.cancel();
    }, [ratingRange]);

    return <Slider
        value={ratingRange}
        css={ratingRangeStyles}
        min={MIN_RATING}
        max={MAX_RATING}
        step={1}
        range
        onChange={setRatingRange}
    />
})