import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../api/axios";
import { setTokens } from "../lib/token";

export const useLogin = () => {
  return useMutation({
    mutationFn: async (credentials) => {
      const res = await axiosInstance.post("/token/", credentials);
      setTokens(res.data); // ⬅️ ذخیره در Cookie
      return res.data;
    },
  });
};
