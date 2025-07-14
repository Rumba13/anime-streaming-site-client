import {orderByOptions} from "./order-by-options.ts";
import {OrderBy} from "../../../shared/types/order-by.ts";


export const isOrderByType = (value:string) => {
    return orderByOptions.includes(value as OrderBy);
}