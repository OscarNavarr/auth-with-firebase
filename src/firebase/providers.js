import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateEmail } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async() => {

    try {
       
        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        const { displayName, email, photoURL, uid } = result.user;

        return{
            ok: true,
            displayName,
            email,
            photoURL,
            uid
        }

    } catch (error) {
        const  errorCode = error.code;
        const errorMessage = error.message;

        return{
            ok: false,
            errorMessage,
        }
    }
}

export const registerUserWithEmailPassword = async({email,password}) => {
    try{

        const resp = await createUserWithEmailAndPassword( FirebaseAuth, email, password );
        
        await updateEmail( FirebaseAuth.currentUser, email );
        
        const { uid, photoURL, displayName } = resp.user;
        
        return { 
            ok: true,
            displayName,
            uid,
            photoURL,
            email: resp.user.email,
        }

    }catch (error) {
        return { ok: false, errorMessage: error.message }
    }
}

export const loginUserWithEmailPassword = async({ email, password }) => {
    try {
        const resp = await signInWithEmailAndPassword( FirebaseAuth, email, password );
        const { uid, photoURL, displayName } = resp.user;
        return { 
            ok: true,
            displayName,
            uid,
            photoURL,
            email: resp.user.email,
        }
    } catch (error) {
        return { ok: false, errorMessage: error.message }
    }
}