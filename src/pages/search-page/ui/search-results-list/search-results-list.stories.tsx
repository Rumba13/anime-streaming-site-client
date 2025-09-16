import {SearchResultsList} from "./search-results-list";
import type {Meta, StoryObj} from '@storybook/react-vite';
import {SearchAnimeStore} from "../../../../features/search";
import {Anime} from "../../../../shared/types";
import {BaseError, BaseLoadingStore} from "../../../../shared/model";

const meta = {
    component: SearchResultsList,
    title: 'Search Results List',
    tags: ["autodocs"],
    excludeStories: /.*Data$/,
    argTypes: {
        searchAnimeStore: {
            control: false
        }
    },
    decorators: [
        (Story) =>
            <div style={{maxWidth: '1200px', margin: '0 auto', padding: '20px', backgroundColor: '#000000'}}>
                <Story/>
            </div>

    ]
} satisfies Meta<typeof SearchResultsList>


export default meta;
type Story = StoryObj<typeof meta>;

const mockAnime = {
    "mal_id": 5114,
    "url": "https://myanimelist.net/anime/5114/Fullmetal_Alchemist__Brotherhood",
    "images": {
        "webp": {
            "image_url": "https://cdn.myanimelist.net/images/anime/1208/94745.webp",
            "small_image_url": "https://cdn.myanimelist.net/images/anime/1208/94745t.webp",
            "large_image_url": "https://cdn.myanimelist.net/images/anime/1208/94745l.webp"
        }
    },
    "titles": [
        {
            "type": "Default",
            "title": "Fullmetal Alchemist: Brotherhood"
        },
        {
            "type": "Synonym",
            "title": "Hagane no Renkinjutsushi: Fullmetal Alchemist"
        },
        {
            "type": "Synonym",
            "title": "Fullmetal Alchemist (2009)"
        },
        {
            "type": "Synonym",
            "title": "FMA"
        },
        {
            "type": "Synonym",
            "title": "FMAB"
        },
        {
            "type": "Japanese",
            "title": "鋼の錬金術師 FULLMETAL ALCHEMIST"
        },
        {
            "type": "English",
            "title": "Fullmetal Alchemist: Brotherhood"
        },
        {
            "type": "French",
            "title": "Fullmetal Alchemist Brotherhood"
        }
    ],
    "title": "Fullmetal Alchemist: Brotherhood",
    "title_synonyms": [
        "Hagane no Renkinjutsushi: Fullmetal Alchemist",
        "Fullmetal Alchemist (2009)",
        "FMA",
        "FMAB"
    ],
    "type": "TV",
    "episodes": 64,
    "status": "Finished Airing",
    "airing": false,
    "aired": {
        "from": "2009-04-05T00:00:00+00:00",
        "to": "2010-07-04T00:00:00+00:00",
        "string": "Apr 5, 2009 to Jul 4, 2010"
    },
    "duration": "24 min per ep",
    "rating": "R - 17+ (violence & profanity)",
    "score": 9.1,
    "scored_by": 2233666,
    "rank": 2,
    "popularity": 3,
    "members": 3550130,
    "favorites": 235120,
    "synopsis": "After a horrific alchemy experiment goes wrong in the Elric household, brothers Edward and Alphonse are left in a catastrophic new reality. Ignoring the alchemical principle banning human transmutation, the boys attempted to bring their recently deceased mother back to life. Instead, they suffered brutal personal loss: Alphonse's body disintegrated while Edward lost a leg and then sacrificed an arm to keep Alphonse's soul in the physical realm by binding it to a hulking suit of armor.\n\nThe brothers are rescued by their neighbor Pinako Rockbell and her granddaughter Winry. Known as a bio-mechanical engineering prodigy, Winry creates prosthetic limbs for Edward by utilizing \"automail,\" a tough, versatile metal used in robots and combat armor. After years of training, the Elric brothers set off on a quest to restore their bodies by locating the Philosopher's Stone—a powerful gem that allows an alchemist to defy the traditional laws of Equivalent Exchange.\n\nAs Edward becomes an infamous alchemist and gains the nickname \"Fullmetal,\" the boys' journey embroils them in a growing conspiracy that threatens the fate of the world.\n\n[Written by MAL Rewrite]",
    "background": "",
    "season": "spring",
    "year": 2009,
    "studios": [
        {
            "mal_id": 4,
            "type": "anime",
            "name": "Bones",
            "url": "https://myanimelist.net/anime/producer/4/Bones"
        }
    ],
    "genres": [
        {
            "mal_id": 1,
            "type": "anime",
            "name": "Action",
            "url": "https://myanimelist.net/anime/genre/1/Action"
        },
        {
            "mal_id": 2,
            "type": "anime",
            "name": "Adventure",
            "url": "https://myanimelist.net/anime/genre/2/Adventure"
        },
        {
            "mal_id": 8,
            "type": "anime",
            "name": "Drama",
            "url": "https://myanimelist.net/anime/genre/8/Drama"
        },
        {
            "mal_id": 10,
            "type": "anime",
            "name": "Fantasy",
            "url": "https://myanimelist.net/anime/genre/10/Fantasy"
        }
    ],
    "explicit_genres": [],
} as unknown as Anime

const mockDefaultSearchAnimeStore = Object.assign(new SearchAnimeStore(), {
    loadingStore: Object.assign(new BaseLoadingStore(), {
        isLoading: false,
    } as Partial<BaseLoadingStore>),
    isFirstLoad: false,
    pagination: {
        pagination: {
            last_visible_page: 1,
            has_next_page: false,
            current_page: 1,
            items: {
                count: 1,
                total: 1,
                per_page: 1,
            }
        },
        data: Array(25).fill(mockAnime)
    }
} as Partial<SearchAnimeStore>)

export const Default: Story = {
    args: {
        searchAnimeStore: mockDefaultSearchAnimeStore
    },
};

const mockLoadingSearchAnimeStore = Object.assign(new SearchAnimeStore(), {
    loadingStore: Object.assign(new BaseLoadingStore(), {
        isLoading: true,
    } as Partial<BaseLoadingStore>),
    isFirstLoad: true
} as Partial<SearchAnimeStore>)

export const Loading: Story = {
    args: {
        searchAnimeStore: mockLoadingSearchAnimeStore
    },
};

const mockSecondLoadingSearchAnimeStore = Object.assign(new SearchAnimeStore(), {
    loadingStore: Object.assign(new BaseLoadingStore(), {
        isLoading: true,
        isLoaded: false
    } as Partial<BaseLoadingStore>),
    isFirstLoad: false,
    pagination: {
        pagination: {
            last_visible_page: 1,
            has_next_page: false,
            current_page: 1,
            items: {
                count: 0,
                total: 0,
                per_page: 25,
            }
        },
        data: Array(25).fill(mockAnime)
    }
} as Partial<SearchAnimeStore>)

export const SecondLoading: Story = {
    args: {
        searchAnimeStore: mockSecondLoadingSearchAnimeStore
    },
};

const mockNothingFoundSearchAnimeStore = Object.assign(new SearchAnimeStore(), {
    loadingStore: Object.assign(new BaseLoadingStore(), {
        isLoading: false,
        isLoaded: true
    } as Partial<BaseLoadingStore>),
    isFirstLoad: false,
    pagination: {
        pagination: {
            last_visible_page: 1,
            has_next_page: false,
            current_page: 1,
            items: {
                count: 0,
                total: 0,
                per_page: 25,
            }
        },
        data: []
    }
} as Partial<SearchAnimeStore>)

export const NothingFound: Story = {
    args: {
        searchAnimeStore: mockNothingFoundSearchAnimeStore
    },
};

const mockErrorSearchAnimeStore = Object.assign(new SearchAnimeStore(), {
    loadingStore: Object.assign(new BaseLoadingStore(), {
        error: new BaseError("Error", "NetworkError"),
        isError: true
    } as Partial<BaseLoadingStore>),
    isFirstLoad: false,
    pagination: {
        pagination: {
            last_visible_page: 1,
            has_next_page: false,
            current_page: 1,
            items: {
                count: 0,
                total: 0,
                per_page: 25,
            }
        },
        data: []
    }
} as Partial<SearchAnimeStore>)

export const Error: Story = {
    args: {
        searchAnimeStore: mockErrorSearchAnimeStore
    },
};
