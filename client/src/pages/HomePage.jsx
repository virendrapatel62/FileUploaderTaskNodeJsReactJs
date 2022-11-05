import React from "react";
import { FilesList } from "../components/FilesList";
import { LoginPlease } from "../components/LoginPlease";
import { useAuth } from "../contexts/AuthProvider";
import FilePage from "./FilePage";

export default function HomePage() {
  const { user } = useAuth();

  if (!user) return <LoginPlease />;

  return <FilePage />;
}
