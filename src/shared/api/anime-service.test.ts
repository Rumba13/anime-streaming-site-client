import {describe, expect, it, vi} from "vitest";
import {JikanClient} from "./jikan-client.ts";
import {Container} from "inversify";
import {AnimeService} from "./anime-service.ts";
import {JikanPagination} from "../types/jikan-pagination.ts";
import {Anime} from "../types/anime.ts";

describe("Anime Service", () => {
    let container: Container;
    let animeService: AnimeService;
    let jikanClientMock: JikanClient;

    const MOCK_ANIME_BANNERS = {
        pagination: {
            last_visible_page: 1, has_next_page: true, current_page: 1, items: {
                count: 12,
                total: 12,
                per_page: 12
            }
        },
        data: [
            {
                "images": {
                    "webp": {
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/10/47347l.webp"
                    }
                }
            },
            {
                "images": {
                    "webp": {
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1079/138100l.webp"
                    }
                }
            },
            {
                "images": {
                    "webp": {
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1208/94745l.webp"
                    }
                }
            },
            {
                "images": {
                    "webp": {
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/12/76049l.webp"
                    }
                }
            },
            {
                "images": {
                    "webp": {
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1286/99889l.webp"
                    }
                }
            },
            {
                "images": {
                    "webp": {
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/11/39717l.webp"
                    }
                }
            },
            {
                "images": {
                    "webp": {
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/10/78745l.webp"
                    }
                }
            },
            {
                "images": {
                    "webp": {
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1337/99013l.webp"
                    }
                }
            },
            {
                "images": {
                    "webp": {
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1141/142503l.webp"
                    }
                }
            },
            {
                "images": {
                    "webp": {
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1498/134443l.webp"
                    }
                }
            },
            {
                "images": {
                    "webp": {
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/5/87048l.webp"
                    }
                }
            },
            {
                "images": {
                    "webp": {
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/4/84177l.webp"
                    }
                }
            }
        ]
    } as unknown as JikanPagination<Anime>

    const MOCK_SEARCH_RESULTS_BY_GENRES = {
        pagination: {},
        data: [
            {
                "genres": [
                    {mal_id: "1"},
                    {mal_id: "2"},
                ],
            },
            {
                "genres": [
                    {mal_id: "8"},
                    {mal_id: "1"},
                ],
            },
        ]
    } as unknown as JikanPagination<Anime>;

    const createJikanClientMock = (responseData: JikanPagination<Anime>): JikanClient => ({
        connection: {
            get: vi.fn().mockResolvedValue({data: responseData}),
        },
        checkJikanApiStatus: vi.fn().mockResolvedValue(true)
    } as unknown as JikanClient);

    const setupContainer = (mockClient: JikanClient): void => {
        container = new Container();
        container.bind(AnimeService).toSelf();
        container.bind(JikanClient).toConstantValue(mockClient);
        animeService = container.get(AnimeService);
    };

    describe("load banners", () => {

        it("should return banners", async () => {

            const expectedResponse = [
                "https://cdn.myanimelist.net/images/anime/10/47347l.webp",
                "https://cdn.myanimelist.net/images/anime/1079/138100l.webp",
                "https://cdn.myanimelist.net/images/anime/1208/94745l.webp",
                "https://cdn.myanimelist.net/images/anime/12/76049l.webp",
                "https://cdn.myanimelist.net/images/anime/1286/99889l.webp",
                "https://cdn.myanimelist.net/images/anime/11/39717l.webp",
                "https://cdn.myanimelist.net/images/anime/10/78745l.webp",
                "https://cdn.myanimelist.net/images/anime/1337/99013l.webp",
                "https://cdn.myanimelist.net/images/anime/1141/142503l.webp",
                "https://cdn.myanimelist.net/images/anime/1498/134443l.webp",
                "https://cdn.myanimelist.net/images/anime/5/87048l.webp",
                "https://cdn.myanimelist.net/images/anime/4/84177l.webp",

            ]

            jikanClientMock = createJikanClientMock(MOCK_ANIME_BANNERS);
            setupContainer(jikanClientMock);

            const banners = await animeService.loadBanners()

            expect(banners).toEqual(expectedResponse);
            expect(banners).toHaveLength(12);
        })

    })
    describe("search", () => {


        it("should contain searched genre", async () => {
            jikanClientMock = createJikanClientMock(MOCK_SEARCH_RESULTS_BY_GENRES);
            setupContainer(jikanClientMock);

            const searchedAnime = await animeService.search(["1"]);

            if (searchedAnime === null || searchedAnime.data.length === 0) throw new Error("Result is null");

            for (const anime of searchedAnime.data) {
                const animeGenreIds = anime.genres.map(({mal_id}) => mal_id);
                expect(animeGenreIds).toContain("1");
            }
        })
    })
})
