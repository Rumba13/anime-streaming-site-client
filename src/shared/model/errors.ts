import {BaseError} from "./base-error";

export class PatternError extends BaseError {
    constructor(
        message: string,
    ) {
        super(message, "PatternError");
    }
}

export class AbortError extends BaseError {
    constructor(
        message: string,
    ) {
        super(message, "AbortError");
    }
}