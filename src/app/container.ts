import {Container} from "inversify";
import {GenresService} from "../shared/api";
import {ShortGenresStore} from "../shared/model";
import {BrowseGenresPopupStore} from "../shared/layouts";
import {AnimeService} from "../shared/api";
import {JikanStatusStore} from "../features/jikan-status";
import {ProfilePopupStore} from "../shared/layouts";
import {ThemeStore} from "./theme/theme.store.ts";
import {AnimationsSwitchStore} from "../features/animations-switch";
import {WelcomeBannersStore} from "../pages/home-page";
import {JikanClient} from "../shared/api";
import {AnimeCardSwitchStore} from "../features/anime-card-switch";
import {GenreFilterStore} from "../features/genre-filter";
import {GenresStore} from "../entities/genre";
import {ExcludeGenreFilterStore} from "../features/exclude-genre-filter";
import {SearchAnimeStore} from "../features/search";
import {AnimeTypeFilterStore} from "../features/anime-type-filter";
import {OrderByStore} from "../features/order-by";
import {SearchQueryStore} from "../features/search";
import {UrlSyncStoreService} from "../shared/lib";
import {URLSearchParamsParser} from "../shared/lib";
import {RatingFilterStore} from "../features/rating-filter";
import {AnimeStatusFilterStore} from "../features/anime-status-filter";
import {FilterManager} from "../pages/search-page";
import {AnimeDateFilterStore} from "../features/anime-date-filter";

export const container = new Container();
container.bind(BrowseGenresPopupStore).toSelf().inSingletonScope()
container.bind(GenresService).toSelf().inSingletonScope()
container.bind(ShortGenresStore).toSelf().inSingletonScope()
container.bind(AnimeService).toSelf().inSingletonScope()
container.bind(JikanStatusStore).toSelf().inSingletonScope()
container.bind(ProfilePopupStore).toSelf().inSingletonScope()
container.bind(ThemeStore).toSelf().inSingletonScope()
container.bind(AnimationsSwitchStore).toSelf().inSingletonScope()
container.bind(WelcomeBannersStore).toSelf().inSingletonScope()
container.bind(JikanClient).toSelf().inSingletonScope()
container.bind(AnimeCardSwitchStore).toSelf().inSingletonScope()
container.bind(GenreFilterStore).toSelf().inSingletonScope()
container.bind(GenresStore).toSelf().inSingletonScope()
container.bind(ExcludeGenreFilterStore).toSelf().inSingletonScope()
container.bind(SearchAnimeStore).toSelf().inSingletonScope()
container.bind(AnimeTypeFilterStore).toSelf().inSingletonScope()
container.bind(OrderByStore).toSelf().inSingletonScope()
container.bind(SearchQueryStore).toSelf().inSingletonScope()
container.bind(UrlSyncStoreService).toSelf().inSingletonScope()
container.bind(URLSearchParamsParser).toSelf().inSingletonScope()
container.bind(RatingFilterStore).toSelf().inSingletonScope()
container.bind(AnimeStatusFilterStore).toSelf().inSingletonScope()
container.bind(FilterManager).toSelf().inSingletonScope()
container.bind(AnimeDateFilterStore).toSelf().inSingletonScope()




