import {FirebaseCode} from "../types/firebase-code.ts";

const codes:FirebaseCode[] = [
    "auth/email-already-in-use",
    "auth/invalid-credential"
]

export const isFireBaseErrorCode = (code:string): code is FirebaseCode => {
    const isCode = codes.includes(code as FirebaseCode);

    if(!isCode)
    {
        console.log("Unknown message type", code)
    }

    return isCode
}
