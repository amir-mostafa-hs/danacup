import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../api/axios";

export const useRefreshToken = () => {
  return useMutation({
    mutationFn: async () => {
      const refresh = localStorage.getItem("refresh");
      const res = await axiosInstance.post("/token/refresh/", { refresh });
      localStorage.setItem("access", res.data.access);
      return res.data;
    },
  });
};
