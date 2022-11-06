import React from "react";
import LoginMessage from "../components/LoginMessage";
import { useAuth } from "../contexts/AuthContext";
import FilesPage from "./FilesPage";

export default function HomePage() {
  const { user } = useAuth();
  return user ? <FilesPage /> : <LoginMessage />;
}
