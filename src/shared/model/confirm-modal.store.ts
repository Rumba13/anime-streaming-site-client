import {BaseModalStore} from "./base-modal.store.ts";
import {makeAutoObservable, reaction,} from "mobx";
import {injectable} from "inversify";
import {ConfirmModalConfig} from "../types/confirm-modal-config";
import React from "react";

@injectable()
class ConfirmModalStore {
    public readonly baseModalStore: BaseModalStore = new BaseModalStore();

    private pendingConfirmPromise: Promise<unknown> | null = null;
    private resolveConfirmPromise: () => void = () => {};
    private rejectConfirmPromise: () => void = () => {};

    constructor() {
        makeAutoObservable(this)
    }

    public confirmModalConfig?: ConfirmModalConfig;
    public setConfirmModalConfig = (config?: ConfirmModalConfig) => this.confirmModalConfig = config;

    public askForConfirm(confirmModalConfig: ConfirmModalConfig, event?: React.MouseEvent): Promise<unknown> {
        this.setConfirmModalConfig(confirmModalConfig);
        this.baseModalStore.open(event);

        const dispose = reaction(() => this.baseModalStore.isOpened, isOpened => !isOpened && this.cancel());

        this.pendingConfirmPromise = new Promise((innerResolve, innerReject) => {
            this.resolveConfirmPromise = innerResolve;
            this.rejectConfirmPromise = innerReject;
        }).finally(dispose);

        return this.pendingConfirmPromise;
    }

    public confirm = () => {
        this.resolveConfirmPromise();
        this.baseModalStore.close();
    };
    public cancel = () => {
        this.rejectConfirmPromise();
        this.baseModalStore.close();
    };
}

export {ConfirmModalStore}