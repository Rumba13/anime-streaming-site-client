import {action, makeObservable, observable} from "mobx";

export class BasePopupStore {
    public isOpened: boolean = false;
    public setIsOpened = (isOpened: boolean) => {
        this.isOpened = isOpened;
    };

    public wasOpened: boolean = false;
    public setWasOpened = (wasOpened: boolean) => {
        this.wasOpened = wasOpened;
    };

    private popupRef: HTMLElement | null = null;
    private cleanupHandler?: () => void;
    private setCleanupHandler = (handler?: () => void) => this.cleanupHandler = handler;

    static activePopup: BasePopupStore | null = null;

    constructor() {
        makeObservable(this, {
            isOpened: observable,
            wasOpened: observable,
            setWasOpened: action,
            open: action,
            close: action,
            setIsOpened: action,
            dispose: action,
            setPopupRef: action,
        });
    }

    public setPopupRef = (ref: HTMLElement | null) => {
        this.popupRef = ref;
        if (ref) {
            this.setCleanupHandler(this.setupGlobalCloseHandler())
        }
    };

    public dispose = () => {
        this.cleanupHandler?.();
        this.setCleanupHandler(undefined);
    }

    private setupGlobalCloseHandler = () => {
        const handleClickOutside = (event: MouseEvent) => {
            if (this.isOpened && this.popupRef && !this.popupRef.contains(event.target as Node)) {
                this.close();
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    };

    public open = (event: React.MouseEvent) => {
        event.stopPropagation();

        if (BasePopupStore.activePopup && BasePopupStore.activePopup !== this) {
            BasePopupStore.activePopup.close();
        }

        BasePopupStore.activePopup = this;
        this.setIsOpened(true);
        this.setWasOpened(true);
    };

    public close = () => {
        if (BasePopupStore.activePopup === this) {
            BasePopupStore.activePopup = null;
        }
        this.setIsOpened(false);
    };


}