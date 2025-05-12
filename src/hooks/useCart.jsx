import { useQuery } from "@tanstack/react-query";
import { useAuth } from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

export default function useCart() {
  const axiosPublic = useAxiosPublic();
  const { state } = useAuth();

  const {
    data: cart = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["cart"],
    queryFn: async () => {
      if (state.user) {
        const res = await axiosPublic.get(`/cart-items?user=${state.user}`);
        return res.data;
      }
      return [];
    },
    enabled: !!state.user,
  });

  return [cart, loading, refetch];
}
