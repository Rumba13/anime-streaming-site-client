import {inject, injectable, postConstruct} from "inversify";
import {makeAutoObservable} from "mobx";
import {JikanClient} from "../../../shared/api";

@injectable()
class JikanStatusStore {
    private status: boolean = false;

    @inject(JikanClient)
    private readonly jikanClient!: JikanClient;

    public getStatus(): boolean {
        return this.status;
    }

    public setStatus = (isConnected: boolean) => {
        this.status = isConnected;
    }

    constructor() {
        makeAutoObservable(this);
    }

    @postConstruct()
    // @ts-expect-error init will be called in the postConstruct decorator
    private init() {
        void this.checkStatus();
    }

    public checkStatus = async () => {
        const status = await this.jikanClient.checkJikanApiStatus();
        this.setStatus(status)
    }
}

export {JikanStatusStore}