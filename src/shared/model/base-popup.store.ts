import {action, flow, makeObservable, observable} from "mobx";

export class BasePopupStore {
    public isOpened: boolean = false;
    private popupRef: HTMLElement | null = null;
    private cleanupHandler?: () => void;

    constructor() {
        makeObservable(this, {
            isOpened: observable,
            open: action,
            close: action,
            setIsOpened: action,
            dispose: flow,
            setPopupRef: action,
        });
    }

    public setPopupRef = (ref: HTMLElement | null) => {
        this.popupRef = ref;
        if (ref) {
            this.cleanupHandler = this.setupGlobalCloseHandler();
        }
    };

    public dispose = () => {
        this.cleanupHandler?.();
        this.cleanupHandler = undefined;
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
        this.setIsOpened(true);
    };

    public close = () => {
        this.setIsOpened(false);
    };

    public setIsOpened = (isOpened: boolean) => {
        this.isOpened = isOpened;
    };
}