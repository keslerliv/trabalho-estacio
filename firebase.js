import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBtYQUCaTdPZllUFWK_Veh868BsEh0olLE",
    authDomain: "nu-projects-cf362.firebaseapp.com",
    projectId: "nu-projects-cf362",
    storageBucket: "nu-projects-cf362.appspot.com",
    messagingSenderId: "66005767474",
    appId: "1:66005767474:web:6af51d2e3010a8a431332b",
    measurementId: "G-JTXXYZ0JX7"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);