import {FirebaseError} from "../types/firebase-error.ts";
import {isFireBaseErrorCode} from "./is-fire-base-error-code.ts";

export const isFirebaseError = (error: unknown): error is FirebaseError => {
    return (typeof error === "object" && error !== null)
        && "message" in error
        && "code" in error
        && typeof error.message === "string"
        && typeof error.code === "string"
        && isFireBaseErrorCode(error.code);
}