import { api } from ".";

export const loginSuccess = (user) => {
  return api.post("/api/auth/success", user).then((response) => response.data);
};
