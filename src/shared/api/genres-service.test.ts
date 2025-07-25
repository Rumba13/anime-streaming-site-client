import {describe, beforeEach, it, expect, vi} from "vitest";
import {Container} from "inversify";
import {GenresService} from "./genres-service";
import {JikanClient} from "./jikan-client";
import {Genre} from "../types";

describe("GenresService", () => {
    let container: Container;
    let genresService: GenresService;
    let jikanClientMock: JikanClient;

    const MOCK_GENRES: Genre[] = [
        {
            mal_id: "1",
            name: 'Action',
            url: 'https://myanimelist.net/anime/genre/1/Action',
            count: 5557
        },
        {
            mal_id: "2",
            name: 'Adventure',
            url: 'https://myanimelist.net/anime/genre/2/Adventure',
            count: 4372
        }
    ];

    const MOCK_GENRES_WITH_ADULT_GENRE: Genre[] = [
        {
            mal_id: "1",
            name: 'Action',
            url: 'https://myanimelist.net/anime/genre/1/Action',
            count: 5557
        },
        {
            mal_id: "2",
            name: 'Adult Cast',
            url: 'https://myanimelist.net/anime/genre/2/Adult_Cast',
            count: 1234
        },
        {
            mal_id: "3",
            name: 'Adventure',
            url: 'https://myanimelist.net/anime/genre/3/Adventure',
            count: 4372
        }
    ];

    const MOCK_MAIN_GENRES_WITH_SUB_GENRE: Genre[] = [
        {
            mal_id: "1",
            name: 'Fantasy',
            url: 'https://myanimelist.net/anime/genre/1/Action',
            count: 5557
        },
        {
            mal_id: "2",
            name: 'Samurai',
            url: 'https://myanimelist.net/anime/genre/2/Adult_Cast',
            count: 1234
        },
        {
            mal_id: "3",
            name: 'Horror',
            url: 'https://myanimelist.net/anime/genre/3/Adventure',
            count: 4372
        }
    ];

    const createJikanClientMock = (responseData: Genre[]): JikanClient => ({
        connection: {
            get: vi.fn().mockResolvedValue({data: {data: responseData}}),
        },
        checkJikanApiStatus: vi.fn().mockResolvedValue(true)
    } as unknown as JikanClient);

    const setupContainer = (mockClient: JikanClient): void => {
        container = new Container();
        container.bind(GenresService).toSelf();
        container.bind(JikanClient).toConstantValue(mockClient);
        genresService = container.get(GenresService);
    };

    beforeEach(() => {
        jikanClientMock = createJikanClientMock(MOCK_GENRES);
        setupContainer(jikanClientMock);
    });

    describe("loadGenres", () => {
        it("should load genres", async () => {
            const genres = await genresService.loadGenres();

            expect(genres).toEqual(MOCK_GENRES);
            expect(genres).toHaveLength(2);
            expect(genres[0].name).toBe('Action');
            expect(genres[1].name).toBe('Adventure');
        });

        it("should filter out adult genres", async () => {
            const jikanClientWithAdultMock = createJikanClientMock(MOCK_GENRES_WITH_ADULT_GENRE);
            setupContainer(jikanClientWithAdultMock);

            const genres = await genresService.loadGenres();

            expect(genres).toHaveLength(2);
            expect(genres.map(genre => genre.name)).not.toContain('Adult Cast');
            expect(genres.map(genre => genre.name)).toContain('Action');
            expect(genres.map(genre => genre.name)).toContain('Adventure');
        });

        it("should return empty array when no genres found", async () => {
            const emptyJikanClientMock = createJikanClientMock([]);
            setupContainer(emptyJikanClientMock);

            const genres = await genresService.loadGenres();

            expect(genres).toEqual([]);
            expect(genres).toHaveLength(0);
        });
    });

    describe("loadMainGenres",  () => {
        it("should filter out sub genres",async () => {
            const jikanClient = createJikanClientMock(MOCK_MAIN_GENRES_WITH_SUB_GENRE);
            setupContainer(jikanClient)

            const genres = await genresService.loadMainGenres();

            expect(genres).toHaveLength(2);
            expect(genres.map(genre => genre.name)).not.toContain('Samurai');
            expect(genres.map(genre => genre.name)).toContain('Horror');
            expect(genres.map(genre => genre.name)).toContain('Fantasy');
        })
    })
});