import { orderBySelectStyles } from "./order-by-select.styles.ts";
import { OrderByStore } from "../model/order-by.store.ts";
import { Interpolation, Theme } from "@emotion/react";
import { Select } from "antd";
import { useTranslation } from "react-i18next";
import { orderByTypeToTitle } from "./order-by-type-to-title.ts";
import { OrderBy } from "../../../shared/types";
import { observer } from "mobx-react";
import { SortType } from "../../../shared/types";

type PropsType = {
    orderByStore: OrderByStore,
    styles?: Interpolation<Theme>
}

type SelectOptionType = {
    value: string,
    orderBy: OrderBy,
    sortType: SortType,
    label: string
}

export const OrderBySelect = observer(({ orderByStore, styles }: PropsType) => {
    const { t } = useTranslation();

    const orderByTypeToSelectOption = (orderBy: OrderBy, sortType: SortType): SelectOptionType => ({
        value: `${orderBy}-${sortType}`,
        orderBy,
        sortType,
        label: `${t(orderByTypeToTitle[orderBy])} (${t(sortType === "asc" ? "Ascending" : "Descending")})`
    })

    const selectOrderByTypes: OrderBy[] = [
        "title",
        "popularity",
        "score"
    ]

    const selectOptions: SelectOptionType[] = selectOrderByTypes.flatMap((orderBy) => [
        orderByTypeToSelectOption(orderBy, "asc"),
        orderByTypeToSelectOption(orderBy, "desc"),
    ])

    const handleChange = (_value: unknown, option: SelectOptionType | SelectOptionType[] | undefined) => {
        if (option && !Array.isArray(option)) {
            orderByStore.setOrderBy(option.orderBy);
            orderByStore.setSortType(option.sortType);
        }
    }

    return <Select
        value={orderByTypeToSelectOption(orderByStore.orderBy, orderByStore.sortType)}
        onChange={handleChange}
        variant="borderless"
        css={[orderBySelectStyles, styles]}
        options={selectOptions}
        labelInValue
    />
})