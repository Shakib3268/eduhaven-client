import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../Firebase/firebase.config';


export const AuthContext = createContext(null)
const auth = getAuth(app)
const goggleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()

const Authprovider = ({children}) => {
    const [user,setUser]= useState(null)
    const [loading,setLoading]= useState(true)

    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword (auth,email,password)
    }

    const signIn = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }
    const goggle = () =>{
        return signInWithPopup(auth,goggleProvider)
    }

    const github = () => {
        return signInWithPopup(auth,githubProvider)
    }

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth,loggedUser =>{
            console.log('Logged in user',loggedUser)
            setUser(loggedUser)
            setLoading(false)
        })
        return () =>{
            unsubscribe()
        }
    },[])
    const authInfo = {user,loading,createUser,signIn,logOut,goggle,github
    }
    return (
        <div>
             <div>
            <AuthContext.Provider value={authInfo}>
                    {children}
            </AuthContext.Provider>
        </div>
        </div>
    );
};

export default Authprovider;