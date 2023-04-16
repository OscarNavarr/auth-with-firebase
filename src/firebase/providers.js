import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateEmail } from "firebase/auth";
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
        const {uid, photoURL} = resp.user;

        await updateEmail( FirebaseAuth.currentUser, email );

        return { 
            ok: true,
            displayName:"",
            uid,
            photoURL,
            email,
        }

    }catch(error){
        return{
            ok: false,
            errorMessage: error.message
        }
    }
}