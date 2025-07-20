import {orderByList} from "./order-by-list.ts";
import {OrderBy} from "../../types";


export const isOrderBy = (value:string) => {
    return orderByList.includes(value as OrderBy);
}