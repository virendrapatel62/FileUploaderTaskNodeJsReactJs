import { pick } from "lodash";
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthProvider";
import { api } from "../services";
import { loginSuccess } from "../services/auth";
import { saveToken } from "../utils/localStorage";

export default function Navbar() {
  const { signOut, auth, user, signIn, setServerToken } = useAuth();

  const logIn = () => {
    signIn((response) => {
      const payload = pick(
        response.user,
        "email",
        "displayName",
        "photoURL",
        "uid"
      );

      loginSuccess(payload).then((data) => {
        saveToken(data.token);
        setServerToken(data.token);
      });
    });
  };

  const logout = () => {
    signOut(auth);
  };
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            File Uploader
          </a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={"/"}>
                  Home
                </Link>
              </li>
              {!user && (
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    onClick={logIn}
                  >
                    Login
                  </a>
                </li>
              )}
              {user && (
                <li className="nav-item">
                  <a
                    onClick={logout}
                    className="nav-link active"
                    aria-current="page"
                  >
                    Logout
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
