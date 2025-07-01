import {Genre, GenreType} from "../types";
import {injectable} from "inversify";
import {inject} from "inversify";
import {JikanClient} from "./jikan-client.ts";

type GetAnimeGenresResponse = {
    data: Genre[];
}

@injectable()
export class GenresService {
    constructor(
        @inject(JikanClient)
        private readonly jikanClient: JikanClient
    ) {

    }

    private filteredOutGenres: GenreType[] = [
        "Adult Cast",
        "Avant Garde",
        "Award Winning",
        "Boys Love",
        "CGDCT",
        "Childcare",
        "Crossdressing",
        "Delinquents",
        "Ecchi",
        "Educational",
        "Erotica",
        "Harem",
        "Hentai",
        "Idols (Female)",
        "Idols (Male)",
        "Gore",
        "Pets",
        "Josei",
        "Love Status Quo",
        "Magical Sex Shift",
        "Mahou Shoujo",
        "Gag Humor",
        "Iyashikei",
        "Otaku Culture",
        "Reverse Harem",
        "Performing Arts",
        "High Stakes Game",
        "Girls Love",
        "Showbiz"
    ]
    private mainGenres: GenreType[] = [
        "Action",
        "Fantasy",
        "Horror",
        "Adventure",
        "Romance",
        "Psychological",
        "Comedy",
        "Shounen",
        "Sports",
        "Drama",
        "Shoujo",
        "Historical",
        "Fantasy",
        "Supernatural",
        "School"
    ]

    async loadGenres(): Promise<Genre[]> {
        let genres: Genre[] = (await this.jikanClient.connection.get<GetAnimeGenresResponse>("/genres/anime")).data.data;
        genres = genres.filter(({name}) => !this.filteredOutGenres.includes(name));
        return genres
    }

    async loadMainGenres(): Promise<Genre[]> {
        let genres: Genre[] = (await this.jikanClient.connection.get<GetAnimeGenresResponse>("/genres/anime")).data.data;
        genres = genres.filter(({name}) => this.mainGenres.includes(name));
        return genres
    }
}
