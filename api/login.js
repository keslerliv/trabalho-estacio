import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';

export const loginUser = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        return user;
    } catch (error) {
        return false;
    }
};