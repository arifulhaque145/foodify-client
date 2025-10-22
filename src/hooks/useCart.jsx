import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

export default function useCart() {
  const axiosPublic = useAxiosPublic();
  const queryClient = useQueryClient();
  const { state } = useAuth();

  const cartItems = useQuery({
    queryKey: ["cart", state?.user],
    queryFn: async () => {
      const res = await axiosPublic.get(`/cart-items?user=${state?.user}`);
      return res.data;
    },
  });

  const addCartItem = useMutation({
    mutationFn: async (item) => {
      const res = await axiosPublic.post("/cart-items", item);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["cart"]);
    },
  });

  const updateCartItemQuantity = useMutation({
    mutationFn: async ({ itemId, itemQuantity }) => {
      const res = await axiosPublic.patch(`/cart-items/${itemId}`, {
        quantity: itemQuantity,
      });
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["cart"]);
    },
  });

  const removeFromCart = useMutation({
    mutationFn: async (id) => {
      const res = await axiosPublic.delete(`/cart-items/${id}`);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["cart"]);
    },
  });

  const clearCart = useMutation({
    mutationFn: async (email) => {
      const res = await axiosPublic.delete(`/cart-items-all/${email}`);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["cart"]);
    },
  });

  return {
    cartItems,
    addCartItem,
    updateCartItemQuantity,
    removeFromCart,
    clearCart,
  };
}
