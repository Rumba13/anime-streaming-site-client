import {BaseError} from "./base-error.ts";

export class PatternError extends BaseError {
    constructor(
        message: string,
    ) {
        super(message, "PatternError");
    }
}