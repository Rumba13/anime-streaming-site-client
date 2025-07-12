import {ErrorType} from "../types/error-type.ts";

export class BaseError extends Error {
    public readonly type: ErrorType;

    constructor(
        message: string,
        type: ErrorType,
    ) {
        super(message);
        this.type = type;

        Object.setPrototypeOf(this, BaseError.prototype);
    }

    public toJSON() {
        return {
            type: this.type,
            message: this.message,
            stack: this.stack
        };
    }
}