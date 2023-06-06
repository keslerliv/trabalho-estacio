import { doc, getDoc } from "firebase/firestore";
import { firestore } from '../firebase';

export const getProjects = async (uid) => {
    try {
        const userRef = doc(firestore, "users", uid);
        const userDoc = await getDoc(userRef);
        return userDoc.data();
    } catch (error) {
        return false;
    }
};