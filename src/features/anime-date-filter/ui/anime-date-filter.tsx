import {AnimeDateFilterStore} from "../model/anime-date-filter.store.ts";
import {Slider} from "antd";
import dayjs from "dayjs";
import {observer} from "mobx-react";
import {useEffect, useState} from "react";
import {debounce} from "../../../shared/lib/debounce.ts";

type PropsType = {
    animeDateFilterStore: AnimeDateFilterStore;
}

const MIN_YEAR = 1980;
const MAX_YEAR = dayjs().year();

export const AnimeDateFilter = observer(({animeDateFilterStore}: PropsType) => {
    const {startDate, endDate} = animeDateFilterStore

    const defaultSliderValue = [startDate?.year() || MIN_YEAR, endDate?.year() || MAX_YEAR]
    const [sliderValue, setSliderValue] = useState<number[]>(defaultSliderValue)

    useEffect(() => {
        if (defaultSliderValue[0] !== sliderValue[0] || defaultSliderValue[1] !== sliderValue[1]) {
            setSliderValue(defaultSliderValue)
        }
    }, [startDate, endDate])

    const debouncedSetDates = debounce(animeDateFilterStore.setDates, 200)

    useEffect(() => {
        const [startYear, endYear] = sliderValue

        debouncedSetDates(
            startYear ? dayjs().year(startYear).startOf('year') : null,
            endYear ? dayjs().year(endYear).endOf('year') : null)

    }, [sliderValue])

    return <Slider
        value={sliderValue}
        range
        step={1}
        min={MIN_YEAR}
        max={MAX_YEAR}
        onChange={setSliderValue}
    />
})