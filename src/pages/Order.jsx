import React from "react";
import OrderItem from "../components/OrderItem";
import { useAuth } from "../context/AuthContext";

export default function Order() {
  const { state } = useAuth();

  if (!state.user) return <p>Please log in to view your orders.</p>;

  if (!state.orders || state.orders.length === 0) {
    return <p>No orders found.</p>;
  }

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">My Orders</h2>

      {state.orders.map((order) => (
        <OrderItem key={order.id} params={order} />
      ))}
    </div>
  );
}
