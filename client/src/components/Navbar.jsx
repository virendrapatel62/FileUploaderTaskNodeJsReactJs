import React from "react";
import { useContext } from "react";
import { loginSuccess } from "../services/auth-service";
import { AuthContext, useAuth } from "../contexts/AuthContext";
import { saveUserTokenToLocalStorage } from "../utils/localStorage";

export default function Navbar() {
  const { login, logout, user } = useAuth();
  const handleLogin = () => {
    login((response) => {
      const { email, displayName, uid, photoURL } = response.user;
      const payload = {
        email,
        displayName,
        uid,
        photoURL,
      };
      loginSuccess(payload).then((response) => {
        saveUserTokenToLocalStorage(response.accessToken);
      });
    });
  };
  return (
    <nav className="navbar navbar-expand bg-dark navbar-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          File Uploader
        </a>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            {user && <a className="nav-link">Hello 👋 {user.displayName}</a>}

            {!user && (
              <a
                className="nav-link "
                aria-current="page"
                onClick={handleLogin}
              >
                Login
              </a>
            )}

            {user && (
              <a className="nav-link " aria-current="page" onClick={logout}>
                Logout
              </a>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
