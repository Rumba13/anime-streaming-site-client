import {BaseError} from "./base-error";

export class PatternError extends BaseError {
    public pattern?: object;
    constructor(
        message: string,
        pattern?: object
    ) {
        super(message, "PatternError");
        this.pattern = pattern;
    }
}

export class AbortError extends BaseError {
    constructor(
        message: string,
    ) {
        super(message, "AbortError");
    }
}
export class UnknownError extends BaseError {
    constructor(
    ) {
        super("UnknownError", "UnknownError");
    }
}
export class EmailAlreadyExistsError extends BaseError {
    constructor(
    ) {
        super("Email already exists", "EmailAlreadyExistsError");
    }
}
