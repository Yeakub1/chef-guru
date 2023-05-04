import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AtuhContext = createContext(null)

const auth = getAuth(app)

const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loding, setLoding] = useState(true)
    
    const creatUser = (email, password) => {
        setLoding(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const sigIn = (email, password) => {
        setLoding(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoding(true)
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            console.log('inside loged user', loggedUser);
            setUser(loggedUser);
            setLoding(false)
        })
        return () => {
            unsubscribe();
        }
    },[])

    const authInfo = {
      user,
      creatUser,
      sigIn,
      logOut,
      loding
    };
    return (
        <AtuhContext.Provider value={authInfo}>
            {children}
        </AtuhContext.Provider>
    );
};

export default AuthProviders;