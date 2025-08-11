import {auth} from "../../../../shared/api/firebase.ts";

export const signOut = async () => {
    try {
        await auth.signOut();
    } catch (error) {
        console.error('Error signing out:', error);
    }
}