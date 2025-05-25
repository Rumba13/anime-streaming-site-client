import {makeAutoObservable} from "mobx";
import {injectable} from "inversify";

@injectable()
export class BrowseGenresPopupStore {
    constructor() {
        makeAutoObservable(this);
        document.addEventListener("click", () => this.setIsOpened(false))
    }

    public isOpened: boolean = false;

    public setIsOpened = (isOpened: boolean) => {
        setTimeout(() => this.isOpened = isOpened, 0)
    }

    public open(event: React.MouseEvent) {
        event.stopPropagation();
        this.setIsOpened(true);
    }
}