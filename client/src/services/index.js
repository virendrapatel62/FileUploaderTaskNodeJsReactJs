import axios from "axios";
import { getToken } from "../utils/localStorage";

const instance = axios.create({
  baseURL: "http://localhost:3001/api",
});

instance.interceptors.request.use((config) => {
  config.headers["Authorization"] = getToken();
  return config;
});

export { instance as api };
