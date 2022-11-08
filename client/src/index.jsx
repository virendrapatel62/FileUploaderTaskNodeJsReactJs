import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthProvider";
import "./index.css";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <AuthProvider>
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  </AuthProvider>
);

reportWebVitals();
