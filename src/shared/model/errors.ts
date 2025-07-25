import {BaseError} from "./base-error";

export class PatternError extends BaseError {
    constructor(
        message: string,
    ) {
        super(message, "PatternError");
    }
}