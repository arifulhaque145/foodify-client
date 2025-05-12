import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

export default function useOrder() {
  const axiosPublic = useAxiosPublic();

  const {
    data: order = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["order"],
    queryFn: async () => {
      const res = await axiosPublic.get("/order-items");
      return res.data;
    },
  });

  return [order, loading, refetch];
}
