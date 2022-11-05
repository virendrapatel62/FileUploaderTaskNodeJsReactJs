const TOKEN_KEY = "ACCESS_TOKEN";
export const saveToken = (token = "") => {
  localStorage.setItem(TOKEN_KEY, JSON.stringify(token));
};

export const getToken = () => {
  return JSON.parse(localStorage.getItem(TOKEN_KEY, ""));
};
