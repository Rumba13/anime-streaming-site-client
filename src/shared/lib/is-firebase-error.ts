import {FirebaseError} from "../types/firebase-error.ts";
import {isFireBaseErrorCode} from "./is-fire-base-error-code.ts";

export const isFirebaseError = (error: unknown): error is FirebaseError => {
    return (typeof error === "object" && error !== null)
        && "code" in error
        && typeof error.code === "string"
        && isFireBaseErrorCode(error.code);
}