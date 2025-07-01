import {describe,beforeEach,it,expect} from "vitest";
import {Container} from "inversify";
import {AnimeService} from "./anime-service.ts";
import {GenresService} from "./genres-service.ts";
import {JikanClient} from "./jikan-client.ts";

describe("GenresService", () => {
    let container = new Container()
    let genresService:GenresService;

    const expectedResponse = [
        {
            mal_id: 1,
            name: 'Action',
            url: 'https://myanimelist.net/anime/genre/1/Action',
            count: 5557
        },
        {
            mal_id: 2,
            name: 'Adventure',
            url: 'https://myanimelist.net/anime/genre/2/Adventure',
            count: 4372
        }
    ];

    const jikanClientMock = {
        connection: {
            get: () => Promise.resolve(expectedResponse)
        }
    };

    beforeEach(() => {
        container = new Container();
        container.bind(GenresService).toSelf();
        container.bind(AnimeService).toSelf();
        container.bind(JikanClient).toConstantValue(jikanClientMock as unknown as JikanClient);
        genresService = container.get(GenresService);
    });

    it('should return genres', async () => {
        const genres = await genresService.loadGenres();
        expect(genres).toEqual(expectedResponse);

        expect(genres).toHaveLength(2);
        expect(genres[0].name).toBe('Action');
        expect(genres[1].name).toBe('Adventure');
    });
})