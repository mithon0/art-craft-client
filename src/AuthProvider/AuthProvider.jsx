import React, { createContext, useEffect, useState } from 'react';
export const AuthContext = createContext(null)
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '../firebase/firebase.config';
import axios from 'axios';

const auth = getAuth(app)



const AuthProvider = ({ children }) => {

  const [loading,setLoading]=useState(true);

  const [user, setUser] = useState(null)

  const signinGoogle = (googlrProvider) => {
    return signInWithPopup(auth, googlrProvider);
  };
  const signInGit = (gitProvider) => {
    return signInWithPopup(auth, gitProvider)
  };
  const signupWithemailPass = (email, password) => {
    setLoading(false)
    return createUserWithEmailAndPassword(auth, email, password)
  }
  const profileUpdate = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name, photoURL: photo
    })
  }


  const login = (email, password) => {
    setLoading(false)
    return signInWithEmailAndPassword(auth, email, password)
  }

  //    hold login 

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, userInfo => {
      setUser(userInfo)
      // get set token
      // if (userInfo) {
      //   axios.post('https://art-craft-server-side-mithon0.vercel.app/jwt', { email: userInfo.email })
      //     .then(data => {
      //       // console.log(data.data.token)
      //       localStorage.setItem('access-token',data.data.token)
      //     })
      //     .catch(err => console.log(err))
      // }else{
      //   localStorage.removeItem('access-token')
      // }


    });
    return () => {
      unsubscribe()
    }

  }, [])

  // logout

  const logOut = () => {
    return signOut(auth)
  }

  const authInformation = {
    user,
    signinGoogle,
    signInGit,
    signupWithemailPass,
    profileUpdate,
    login,
    logOut,
    loading
    

  }
  return (
    <AuthContext.Provider value={authInformation}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;