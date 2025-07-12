export class BaseError extends Error {
    public readonly type: string;

    constructor(
        message: string,
        type: string,
    ) {
        super(message);
        this.type = type;

        Object.setPrototypeOf(this, BaseError.prototype);
    }

    public toJSON() {
        return {
            type: this.type,
            stack: this.stack
        };
    }
}