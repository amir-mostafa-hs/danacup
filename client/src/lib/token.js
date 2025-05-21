import Cookies from "js-cookie";

export const setTokens = ({ access, refresh }) => {
  Cookies.set("access_token", access, { secure: true, sameSite: "Strict" });
  Cookies.set("refresh_token", refresh, { secure: true, sameSite: "Strict" });
};

export const getAccessToken = () => Cookies.get("access_token");
export const getRefreshToken = () => Cookies.get("refresh_token");

export const clearTokens = () => {
  Cookies.remove("access_token");
  Cookies.remove("refresh_token");
};
