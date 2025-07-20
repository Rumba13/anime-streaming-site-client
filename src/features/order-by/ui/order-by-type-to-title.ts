import {OrderBy} from "../../../shared/types";

type OrderByTypeTranslationKeys =
    | "Order By Mal Id"
    | "Order By Title"
    | "Order By Start Date"
    | "Order By End Date"
    | "Order By Episodes"
    | "Order By Score"
    | "Order By Scored By"
    | "Order By Rank"
    | "Order By Popularity"
    | "Order By Members"
    | "Order By Favorites";

export const orderByTypeToTitle: Record<OrderBy, OrderByTypeTranslationKeys> = {
    mal_id: "Order By Mal Id",
    title: "Order By Title",
    start_date: "Order By Start Date",
    end_date: "Order By End Date",
    episodes: "Order By Episodes",
    score: "Order By Score",
    scored_by: "Order By Scored By",
    rank: "Order By Rank",
    popularity: "Order By Popularity",
    members: "Order By Members",
    favorites: "Order By Favorites",
};