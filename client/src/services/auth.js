import { api } from ".";

export const loginSuccess = (payload) => {
  return api.post("/login/success", payload).then((response) => {
    return response.data;
  });
};
