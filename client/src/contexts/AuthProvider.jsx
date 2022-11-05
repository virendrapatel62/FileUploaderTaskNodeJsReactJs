import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { useEffect } from "react";
import { useState } from "react";
import { saveToken } from "../utils/localStorage";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { useContext } from "react";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const authProvider = new GoogleAuthProvider();

const firebaseConfig = {
  apiKey: "AIzaSyCICQ7Q8GvTh2kuK68nDIDalTHYrOJt8HM",
  authDomain: "myfirebaseproject-65931.firebaseapp.com",
  projectId: "myfirebaseproject-65931",
  storageBucket: "myfirebaseproject-65931.appspot.com",
  messagingSenderId: "211420263202",
  appId: "1:211420263202:web:83f1416aeeba4d74b6eb7b",
  measurementId: "G-TSR3DGX9LC",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const AuthContext = React.createContext({});

function AuthProvider({ children }) {
  const [auth] = useState(getAuth());
  const [user, setUser] = useState();

  const setServerToken = (token) => {
    setUser({
      ...user,
      serverToken: token,
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const signIn = (callback = () => {}) => {
    signInWithPopup(auth, authProvider).then((response) => {
      response.user.getIdToken().then(saveToken);
      callback(response);
    });
  };

  const values = {
    auth,
    authProvider,
    signIn,
    signOut,
    user,
    setServerToken,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}

const useAuth = () => {
  return useContext(AuthContext);
};

export { AuthProvider, useAuth };
