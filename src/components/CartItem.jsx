import React from "react";
import { FiTrash2 } from "react-icons/fi";
import { useAuth } from "../hooks/useAuth";

export default function CartItem({ item }) {
  const { actionUpdateQuantity, actionRemoveFromCart } = useAuth();

  return (
    <tr key={item.id}>
      <td className="flex items-center gap-4">
        <img
          src={item.img}
          alt={item.name}
          className="w-16 h-16 object-cover rounded"
        />
        <span className="font-semibold">{item.name}</span>
      </td>
      <td>${item.price.toFixed(2)}</td>
      <td>
        <input
          type="number"
          min="1"
          value={item.quantity}
          onChange={(e) =>
            actionUpdateQuantity(item.id, parseInt(e.target.value))
          }
          className="input input-sm w-16"
        />
      </td>
      <td>${(item.price * item.quantity).toFixed(2)}</td>
      <td className="text-center">
        <button
          onClick={() => actionRemoveFromCart(item.id)}
          className="btn btn-sm btn-error"
        >
          <FiTrash2 />
        </button>
      </td>
    </tr>
  );
}
