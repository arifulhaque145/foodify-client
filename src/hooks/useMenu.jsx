import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

export default function useMenu() {
  const axiosPublic = useAxiosPublic();

  const { data, isLoading, error } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const res = await axiosPublic.get("/food-items");
      return res.data;
    },
  });

  return { data, isLoading, error };
}

export function useSingleMenu(id) {
  const axiosPublic = useAxiosPublic();

  const { data, isLoading, error } = useQuery({
    queryKey: ["menu", id],
    queryFn: async () => {
      const res = await axiosPublic.get(`/food-items/${id}`);
      return res.data;
    },
    enabled: !!id,
  });

  return { data, isLoading, error };
}
