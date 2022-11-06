const TOKEN_KEY = "ACCESS_TOKE_EXPRESS_SERVER";

export const saveUserTokenToLocalStorage = (token) => {
  localStorage.setItem(TOKEN_KEY, JSON.stringify(token));
};

export const getUserTokenFormLocalStorage = () => {
  const token = localStorage.getItem(TOKEN_KEY) || "";

  return JSON.parse(token);
};
