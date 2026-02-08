import {OrderBy} from "../../../shared/types";

type OrderByTypeTranslationKeys =
    | "order_by_id"
    | "order_by_title"
    | "order_by_start_date"
    | "order_by_end_date"
    | "order_by_episodes"
    | "order_by_score"
    | "order_by_scored_by"
    | "order_by_rank"
    | "order_by_popularity"
    | "order_by_members"
    | "order_by_favorites";

export const orderByTypeToTitle: Record<OrderBy, OrderByTypeTranslationKeys> = {
    mal_id: "order_by_id",
    title: "order_by_title",
    start_date: "order_by_start_date",
    end_date: "order_by_end_date",
    episodes: "order_by_episodes",
    score: "order_by_score",
    scored_by: "order_by_scored_by",
    rank: "order_by_rank",
    popularity: "order_by_popularity",
    members: "order_by_members",
    favorites: "order_by_favorites",
};