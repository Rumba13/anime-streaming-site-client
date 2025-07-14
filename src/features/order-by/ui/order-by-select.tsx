import {orderBySelectStyles} from "./order-by-select.styles.ts";
import {OrderByStore} from "../model/order-by.store.ts";
import {Interpolation, Theme} from "@emotion/react";
import {Select} from "antd";
import {orderByOptions} from "../model/order-by-options.ts";
import {useTranslation} from "react-i18next";
import {orderByTypeToTitle} from "./order-by-type-to-title.ts";
import {OrderBy} from "../../../shared/types/order-by.ts";
import {observer} from "mobx-react";

type PropsType = {
    orderByStore: OrderByStore,
    styles?: Interpolation<Theme>
}

export const OrderBySelect = observer(({orderByStore, styles}: PropsType) => {
    const {t} = useTranslation();

    const orderByTypeToSelectOption = (orderByType:OrderBy) => ({
        value: orderByType,
        label: t(orderByTypeToTitle[orderByType])
    })

    return <Select
        value={orderByTypeToSelectOption(orderByStore.orderBy)}
        onChange={orderByStore.setOrderBy}
        variant="borderless"
        css={[orderBySelectStyles, styles]}
        options={orderByOptions.map(orderByTypeToSelectOption)}
    />
})