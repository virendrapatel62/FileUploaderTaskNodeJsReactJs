import React from "react";
import { useContext } from "react";
import { AuthContext, useAuth } from "../contexts/AuthContext";

export default function Navbar() {
  const { login, logout } = useAuth();
  const handleLogin = () => {
    login((response) => {
      console.log(response);
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
            <a className="nav-link active" aria-current="page" href="#">
              Home
            </a>

            <a
              className="nav-link active"
              aria-current="page"
              onClick={handleLogin}
            >
              Login
            </a>

            <a className="nav-link active" aria-current="page" onClick={logout}>
              Logout
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
