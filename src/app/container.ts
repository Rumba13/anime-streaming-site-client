import {Container} from "inversify";
import {GenresService} from "../shared/api";
import {GenresStore} from "../shared/model";
import {BrowseGenresPopupStore} from "../shared/layouts";

export const container = new Container();
container.bind<BrowseGenresPopupStore>(BrowseGenresPopupStore).toSelf().inSingletonScope()
container.bind<GenresService>(GenresService).toSelf().inSingletonScope()
container.bind<GenresStore>(GenresStore).toSelf().inSingletonScope()

