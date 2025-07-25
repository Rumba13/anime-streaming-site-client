import {orderByList} from "./order-by-list";
import {OrderBy} from "../../types";


export const isOrderBy = (value:string) => {
    return orderByList.includes(value as OrderBy);
}