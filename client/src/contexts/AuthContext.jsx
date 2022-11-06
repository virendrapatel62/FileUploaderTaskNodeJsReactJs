import React from "react";
import "../firebase";
import { useContext } from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const authProvider = new GoogleAuthProvider();

const AuthContext = React.createContext({});
const auth = getAuth();

const useAuth = () => {
  return useContext(AuthContext);
};

export default function AuthContextProvider({ children }) {
  const login = (callback = () => {}) => {
    console.log("Login From Auth Context");
    signInWithPopup(auth, authProvider).then((response) => {
      callback(response);
    });
  };

  const logout = () => {
    console.log("Logout From Auth Context");
  };

  return (
    <AuthContext.Provider value={{ login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export { useAuth };
