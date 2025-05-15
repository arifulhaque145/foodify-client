import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

export default function useCart() {
  const axiosPublic = useAxiosPublic();
  const { state } = useAuth();

  const cartItems = useQuery({
    queryKey: ["cart", state?.user],
    queryFn: async () => {
      const res = await axiosPublic.get(`/cart-items?user=${state?.user}`);
      return res.data;
    },
  });

  const addCartItem = async (product) => {
    const res = await axiosPublic.get(`/cart-items?user=${product.user}`);
    const existingItem = res?.data?.find(
      (cartItem) => cartItem._id === product._id
    );

    if (existingItem) {
      await axiosPublic.patch(`/cart-items/${existingItem._id}`, {
        quantity: existingItem.quantity + 1,
      });
    } else {
      await axiosPublic.post("/cart-items", {
        ...product,
        quantity: 1,
      });
    }
  };

  const removeFromCart = async (id) => {
    await axiosPublic.delete(`/cart-items/${id}`);
  };

  const clearCart = async (email) => {
    await axiosPublic.delete(`/cart-items-all/${email}`);
  };

  const updateQuantity = async (itemId, itemQuantity) => {
    await axiosPublic.patch(`/cart-items/${itemId}`, {
      quantity: itemQuantity,
    });
  };

  return { cartItems, addCartItem, removeFromCart, clearCart, updateQuantity };
}
