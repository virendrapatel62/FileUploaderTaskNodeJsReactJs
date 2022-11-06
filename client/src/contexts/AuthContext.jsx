import React from "react";
import "../firebase";
import { useContext } from "react";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";

const authProvider = new GoogleAuthProvider();

const AuthContext = React.createContext({});
const auth = getAuth();

const useAuth = () => {
  return useContext(AuthContext);
};

export default function AuthContextProvider({ children }) {
  const [user, setUser] = useState();
  const login = (callback = () => {}) => {
    console.log("Login From Auth Context");
    signInWithPopup(auth, authProvider).then((response) => {
      if (response) {
        callback(response);
      }
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log("onAuthStateChanged");
      setUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const logout = () => {
    console.log("Logout From Auth Context");
    signOut(auth);
  };

  return (
    <AuthContext.Provider value={{ login, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
}

export { useAuth };
