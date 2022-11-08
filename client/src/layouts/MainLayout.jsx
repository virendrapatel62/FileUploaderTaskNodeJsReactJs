import React from "react";
import Navbar from "../components/Navbar";

export default function MainLayout({ children }) {
  return (
    <div className="">
      <Navbar />
      <br />
      <div className="container-fluid">{children}</div>
    </div>
  );
}
