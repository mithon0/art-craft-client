import React, { createContext, useEffect, useState } from 'react';
export const AuthContext = createContext(null)
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
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
   const profileUpdate =(name,photo)=>{
  return  updateProfile(auth.currentUser,{
        displayName: name, photoURL: photo
    })
   }


   const login=(email,password)=>{
   return signInWithEmailAndPassword(auth,email,password)
   }

//    hold login 

useEffect(()=>{
  const unsubscribe = onAuthStateChanged(auth, userInfo=>{
    setUser(userInfo)
  });
  return ()=>{
    unsubscribe()
  }

},[])

// logout

const logOut=()=>{
  return  signOut(auth)
}

    const authInformation = {
        user,
        signinGoogle,
        signInGit,
        signupWithemailPass,
        profileUpdate,
        login,
        logOut
        
    }
    return (
        <AuthContext.Provider value={authInformation}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;