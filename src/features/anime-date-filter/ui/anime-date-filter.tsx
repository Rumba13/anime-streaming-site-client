import {AnimeDateFilterStore} from "../model/anime-date-filter.store.ts";
import {Slider} from "antd";
import dayjs from "dayjs";
import {observer} from "mobx-react";


type PropsType = {
    animeDateFilterStore: AnimeDateFilterStore;
}

const MIN_YEAR = 1980;
const MAX_YEAR = dayjs().year();

export const AnimeDateFilter = observer(({animeDateFilterStore}: PropsType) => {
    const {startDate, endDate} = animeDateFilterStore
    const value = [startDate?.year() || MIN_YEAR, endDate?.year() || MAX_YEAR]

    const handleOnChange = (years: (number | null)[]) => {
        const [startYear, endYear] = years;

        animeDateFilterStore.setDates(
            startYear ? dayjs().year(startYear).startOf('year') : null,
            endYear ? dayjs().year(endYear).endOf('year') : null)
    }

    return <Slider
        value={value}
        range
        step={1}
        min={MIN_YEAR}
        max={MAX_YEAR}
        onChange={handleOnChange}
    />
})