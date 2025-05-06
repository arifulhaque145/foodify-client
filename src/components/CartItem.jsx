import React from "react";
import { useAuth } from "../hooks/useAuth";

export default function CartItem({ item }) {
  const { id, name, price, quantity } = item;
  const { actionUpdateQuantity, actionRemoveFromCart } = useAuth();

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    actionUpdateQuantity(id, newQuantity);
  };

  return (
    <div className="flex justify-between items-center py-4 border-b">
      <div>
        <h3>{name}</h3>
        <p>${price} each</p>
      </div>
      <div className="flex items-center">
        <input
          type="number"
          value={quantity}
          min="1"
          onChange={handleQuantityChange}
          className="w-12 px-2 py-1 border border-gray-300 rounded-md text-center"
        />
        <button
          onClick={() => actionRemoveFromCart(id)}
          className="ml-4 text-red-500 hover:text-red-700"
        >
          Remove
        </button>
      </div>
      <div>
        <span>Total: ${price * quantity}</span>
      </div>
    </div>
  );
}
