import React, { createContext, useState } from 'react';
export const AuthContext = createContext(null)
import { createUserWithEmailAndPassword, getAuth, signInWithPopup } from "firebase/auth";
import { app } from '../firebase/firebase.config';

const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const signinGoogle = (googlrProvider) => {
        return signInWithPopup(auth, googlrProvider);
    };
    const signInGit =(gitProvider)=>{
        return signInWithPopup(auth,gitProvider)
    };
    const signupWithemailPass=(email,password)=>{
      return  createUserWithEmailAndPassword(auth,email,password)
    }


    const authInformation = {
        user,
        signinGoogle,
        signInGit,
        signupWithemailPass,
        
    }
    return (
        <AuthContext.Provider value={authInformation}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;