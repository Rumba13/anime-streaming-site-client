import {inject, injectable} from "inversify";
import {makeAutoObservable} from "mobx";
import {JikanClient} from "../../../shared/api/jikan-client.ts";

@injectable()
export class JikanStatusStore {
    private status: boolean = false;

    public getStatus(): boolean {
        return this.status;
    }

    public setStatus(isConnected: boolean) {
        this.status = isConnected;
    }

    constructor(
        @inject(JikanClient)
        public readonly jikanClient: JikanClient,
    ) {
        makeAutoObservable(this);

        void this.checkStatus()
    }

    public async checkStatus() {
        const status = await this.jikanClient.checkJikanApiStatus();
        this.setStatus(status)
    }
}