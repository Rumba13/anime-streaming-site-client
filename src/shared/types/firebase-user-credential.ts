import {FirebaseUser} from "./firebase-user.ts";

export type FirebaseUserCredential = {
    user: FirebaseUser,
    providerId: string | null,
    operationType: "signIn",
}