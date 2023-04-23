import { loginUserWithEmailPassword, registerUserWithEmailPassword, signInWithGoogle } from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./authSlice"

export const checkingAuthentication = ( ) => {
    return async( dispatch ) => {
        dispatch( checkingCredentials() );
    }
}
export const startGoogleSignIn = () => {
    return async( dispatch ) => {
        dispatch( checkingCredentials() );
        const result = await signInWithGoogle();
        if( !result.ok ) return dispatch( logout(result.errorMessage));
        dispatch(login( result ))
    }
}
export const startCreatingUserWithEmailPassword = ({ email, password }) => {
    return async( dispatch ) => {

        dispatch( checkingCredentials() );

        const result= await registerUserWithEmailPassword({ email, password });
        
        if ( !result.ok ) return dispatch( logout( result.errorMessage ) );
        
        dispatch( login( result ))

    }

}

export const startLoginWithEmailPassword = ({ email, password }) => {
    return async( dispatch ) => {

        dispatch( checkingCredentials());

        const result = await loginUserWithEmailPassword({email, password});
        
        if(!result.ok) return dispatch(logout( result.errorMessage));

        dispatch( login( result ));

    }
}

