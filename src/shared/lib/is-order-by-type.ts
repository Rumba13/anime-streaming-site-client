import {orderByTypes} from "./order-by-types.ts";
import {OrderBy} from "../types/order-by.ts";


export const isOrderByType = (value:string) => {
    return orderByTypes.includes(value as OrderBy);
}