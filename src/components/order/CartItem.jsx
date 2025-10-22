import { useState } from "react";
import { FiTrash2 } from "react-icons/fi";
import useCart from "../../hooks/useCart";

export default function CartItem({ item }) {
  const [quantityValue, setQuantityValue] = useState(item.quantity);
  const { removeFromCart, updateCartItemQuantity } = useCart();
  const { cartItems } = useCart();

  const handleUpdateQuantity = (e) => {
    setQuantityValue(e.target.value);
    updateCartItemQuantity
      .mutateAsync({
        itemId: item._id,
        itemQuantity: parseInt(e.target.value),
      })
      .then(() => cartItems.refetch());
  };

  return (
    <tr key={item._id}>
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
          value={quantityValue}
          onChange={handleUpdateQuantity}
          className="input input-sm w-16"
        />
      </td>
      <td>${(item.price * item.quantity).toFixed(2)}</td>
      <td className="text-center">
        <button
          onClick={() => {
            removeFromCart
              .mutateAsync(item._id)
              .then(() => cartItems.refetch());
          }}
          className="btn btn-sm btn-error"
        >
          <FiTrash2 />
        </button>
      </td>
    </tr>
  );
}
