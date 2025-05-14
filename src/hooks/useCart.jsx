import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const actionAddToCart = async ({ url, email, product }) => {
  const res = await url.get(`/cart-items?user=${email}`);
  const existingItem = res?.data?.find(
    (cartItem) => cartItem._id === product._id
  );

  if (existingItem) {
    await url.patch(`/cart-items/${existingItem._id}`, {
      quantity: existingItem.quantity + 1,
    });
  } else {
    await url.post("/cart-items", {
      ...product,
      user: email,
      quantity: 1,
    });
  }
};

const actionRemoveFromCart = async ({ url, id }) => {
  await url.delete(`/cart-items/${id}`);
};

const actionClearCart = async ({ url, email }) => {
  await url.delete(`/cart-items-all/${email}`);
};

const actionUpdateQuantity = async ({ url, itemId, itemQuantity }) => {
  await url.patch(`/cart-items/${itemId}`, {
    quantity: itemQuantity,
  });
};

export default function useCart() {
  const axiosPublic = useAxiosPublic();
  const { state } = useAuth();
  const queryClient = useQueryClient();

  const cartItems = useQuery({
    queryKey: ["cart", state?.user],
    queryFn: async () => {
      const res = await axiosPublic.get(`/cart-items?user=${state?.user}`);
      return res.data;
    },
  });

  const addCartItem = useMutation({
    mutationFn: (product) =>
      actionAddToCart({
        url: axiosPublic,
        email: state?.user,
        product,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries(["cart"]);
      console.log("Item created successfully!");
    },
    onError: (error) => {
      console.log("Error creating Item: " + error.message);
    },
  });

  const removeFromCart = useMutation({
    mutationFn: (itemId) =>
      actionRemoveFromCart({
        url: axiosPublic,
        id: itemId,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries(["cart"]);
      console.log("Item deleted successfully!");
    },
    onError: (error) => {
      console.log("Error deleting Item: " + error.message);
    },
  });

  const clearCart = useMutation({
    mutationFn: (emailId) =>
      actionClearCart({
        url: axiosPublic,
        email: emailId,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries(["cart"]);
      console.log("Cart cleared successfully!");
    },
    onError: (error) => {
      console.log("Error clearing Cart: " + error.message);
    },
  });

  const updateQuantity = useMutation({
    mutationFn: ({ id, quantity }) =>
      actionUpdateQuantity({
        url: axiosPublic,
        itemId: id,
        itemQuantity: quantity,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries(["cart"]);
    },
    onError: (error) => {
      console.log("Error clearing Cart: " + error.message);
    },
  });

  return { cartItems, addCartItem, removeFromCart, clearCart, updateQuantity };
}
