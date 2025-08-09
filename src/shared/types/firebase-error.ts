import {FirebaseCode} from "./firebase-code.ts";

export type FirebaseError = {
    code: FirebaseCode;
    message: string;
}