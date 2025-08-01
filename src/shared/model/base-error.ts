import {ErrorType} from "../types";

export class BaseError extends Error {
    public readonly type: ErrorType;

    constructor(
        message: string,
        type?: ErrorType,
    ) {
        super(message);
        this.type = type || "UnknownError";

        Object.setPrototypeOf(this, BaseError.prototype);
    }

    public log() {
        console.error(`${this.type}: ${this.message}
        ${JSON.stringify(this, null, 4)}
        Stack: ${this.stack}`)
    }
}