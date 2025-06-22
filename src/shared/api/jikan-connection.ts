import axios from "axios";

const SERVER_URL_DEV = "https://api.jikan.moe/v4/";

export const jikanConnection = axios.create({
    baseURL: SERVER_URL_DEV,
});