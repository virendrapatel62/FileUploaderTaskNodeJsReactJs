import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import "./index.css";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import reportWebVitals from "./reportWebVitals";

// import Router from "./router";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <MainLayout>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>} />
        <Route path="/login" element={<LoginPage></LoginPage>} />
      </Routes>
    </MainLayout>
  </BrowserRouter>
);

reportWebVitals();
