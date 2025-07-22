import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBpMtvpVYNPKI0pRne7_hDxSzB2Rhf4jcY",
    authDomain: "anime-streaming-website-bd0e4.firebaseapp.com",
    projectId: "anime-streaming-website-bd0e4",

    storageBucket: "anime-streaming-website-bd0e4.firebasestorage.app",
    messagingSenderId: "172477299786",
    appId: "1:172477299786:web:d4ea376ad19b5e23297ab3",
    measurementId: "G-1WR030P7HR"
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const firebaseAnalytics = getAnalytics(app)
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;