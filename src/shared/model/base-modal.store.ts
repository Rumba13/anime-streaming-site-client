import {action, flow, makeObservable, observable} from "mobx";

export class BaseModalStore {
    public isOpened: boolean = false;
    public setIsOpened = (isOpened: boolean) => {
        this.isOpened = isOpened;
    };

    public wasOpened: boolean = false;
    public setWasOpened = (wasOpened: boolean) => {
        this.wasOpened = wasOpened;
    };

    private modalRef: HTMLElement | null = null;
    public setModalRef = (ref: HTMLElement | null) => {
        this.modalRef = ref;
        if (ref) {
            this.setCleanupHandler(this.setupGlobalCloseHandler())
        }
    };

    private cleanupHandler?: () => void;
    private setCleanupHandler  = (handler?: () => void) => this.cleanupHandler = handler;

    static activeModal: BaseModalStore | null = null;
    static setActiveModal = (activeModal: BaseModalStore | null) => BaseModalStore.activeModal = activeModal;

    static {
        makeObservable(BaseModalStore, {
            activeModal: observable,
            setActiveModal: action
        });
    }

    constructor() {
        makeObservable(this, {
            isOpened: observable,
            wasOpened: observable,
            setWasOpened: action,
            open: action,
            close: action,
            setIsOpened: action,
            dispose: flow,
            setModalRef: action,
            setCleanupHandler: action,
            cleanupHandler: observable
        });
    }

    public dispose = () => {
        this.cleanupHandler?.();
        this.setCleanupHandler(undefined)
    }

    private setupGlobalCloseHandler = () => {
        const handleClickOutside = (event: MouseEvent) => {
            if (this.isOpened && this.modalRef && !this.modalRef.contains(event.target as Node)) {
                this.close();
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    };

    public open = (event?: React.MouseEvent) => {
        event?.stopPropagation();

        if (BaseModalStore.activeModal && BaseModalStore.activeModal !== this) {
            BaseModalStore.activeModal.close();
        }

        BaseModalStore.setActiveModal(this)
        this.setIsOpened(true);
        this.setWasOpened(true);
    };

    public close = () => {
        if (BaseModalStore.activeModal === this) {
            BaseModalStore.setActiveModal(null)
        }
        this.setIsOpened(false);
    };
}