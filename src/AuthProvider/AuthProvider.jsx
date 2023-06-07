import React, { createContext, useState } from 'react';
export const AuthContext = createContext(null)
import { getAuth, signInWithPopup } from "firebase/auth";
import { app } from '../firebase/firebase.config';

const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const signinGoogle = (googlrProvider) => {
        return signInWithPopup(auth, googlrProvider);
    };


    const authInformation = {
        user,
        signinGoogle,
    }
    return (
        <AuthContext.Provider value={authInformation}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;