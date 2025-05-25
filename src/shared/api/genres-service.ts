import {Genre} from "./types/genre.ts";
import {injectable} from "inversify";
import {wait} from "../lib/wait.ts";

@injectable()
export class GenresService {
    async loadGenres(): Promise<Genre[]> {
        await wait(2500)
        
        return [
            {name: "Action", id: "1"},
            {name: "Magical", id: "2"},
            {name: "Thriller", id: "3"},
            {name: "Adventure", id: "4"},
            {name: "Romance", id: "5"},
            {name: "Psychological", id: "6"},
            {name: "Comedy", id: "7"},
            {name: "Shounen", id: "8"},
            {name: "Sports", id: "9"},
            {name: "Drama", id: "10"},
            {name: "Shoujo", id: "11"},
            {name: "Historical", id: "12"},
            {name: "Fantasy", id: "13"},
            {name: "Supernatural", id: "14"},
            {name: "School", id: "15"},
        ];
    }
}
