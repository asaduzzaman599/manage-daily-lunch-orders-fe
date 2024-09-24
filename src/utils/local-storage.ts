import { authKey } from "@/constants/storageKey";

export const setToLocalStorage = (token: string) => {
  if (!authKey || typeof window === "undefined") {
    return "";
  }
  return localStorage.setItem(authKey, token);
};

export const getFromLocalStorage = (key: string) => {
  if (!key || typeof window === "undefined") {
    return "";
  }
  return localStorage.getItem(key);
};

export const getUserInfo = () => {
  const authToken = getFromLocalStorage(authKey);
  if (authToken) {
    return JSON.parse(authToken);
  } else {
    return null;
  }
};
