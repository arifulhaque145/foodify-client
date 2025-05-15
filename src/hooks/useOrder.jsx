import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

export default function useOrder() {
  const axiosPublic = useAxiosPublic();
  const { state } = useAuth();

  const orders = useQuery({
    queryKey: ["order", state?.user],
    queryFn: async () => {
      const res = await axiosPublic.get(`/order-items?user=${state?.user}`);
      return res.data;
    },
  });

  const placeOrder = async (order) => {
    await axiosPublic.post(`/order-items/`, { ...order });
  };

  const orderCancel = async (id) => {
    await axiosPublic.delete(`/order-items/${id}`);
  };

  return { orders, placeOrder, orderCancel };
}
