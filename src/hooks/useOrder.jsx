import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const actionPlaceOrder = async ({ url, order }) => {
  await url.post(`/order-items/`, { ...order });
};

const actionOrderCancel = async ({ url, id }) => {
  await url.delete(`/order-items/${id}`);
};

export default function useOrder() {
  const axiosPublic = useAxiosPublic();
  const { state } = useAuth();
  const queryClient = useQueryClient();

  const orders = useQuery({
    queryKey: ["order", state?.user],
    queryFn: async () => {
      const res = await axiosPublic.get(`/order-items?user=${state?.user}`);
      return res.data;
    },
  });

  const placeOrder = useMutation({
    mutationFn: (orderItem) =>
      actionPlaceOrder({
        url: axiosPublic,
        order: orderItem,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries(["cart"]);
      console.log("Order placed successfully!");
    },
    onError: (error) => {
      console.log("Error placing order: " + error.message);
    },
  });

  const orderCancel = useMutation({
    mutationFn: (orderId) =>
      actionOrderCancel({
        url: axiosPublic,
        id: orderId,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries(["cart"]);
      console.log("Order canceled successfully!");
    },
    onError: (error) => {
      console.log("Error canceling order: " + error.message);
    },
  });

  return { orders, placeOrder, orderCancel };
}
