import axios from "axios";
import { getUserTokenFormLocalStorage } from "../utils/localStorage";

const api = axios.create({
  baseURL: "http://localhost:3001",
});

api.interceptors.request.use((config) => {
  config.headers.authorization = getUserTokenFormLocalStorage();
  return config;
});

export { api };
