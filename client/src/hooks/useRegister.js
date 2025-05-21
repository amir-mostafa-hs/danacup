import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../api/axios";

export const useRegister = () => {
  return useMutation({
    mutationFn: async (userData) => {
      const res = await axiosInstance.post("/register/", userData);
      return res.data;
    },
  });
};
