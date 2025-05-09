import React from "react";
import ItemButton from "./shared/ItemButton";

export default function OrderItem({ order }) {
  return (
    <div className="card bg-base-200 shadow-lg p-4 mb-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Order ID: {order.id}</h2>
        <p
          className={`badge ${
            order.status === "Delivered" ? "badge-success" : "badge-warning"
          }`}
        >
          {order.status}
        </p>
      </div>

      <h3 className="mt-4 font-semibold">Items:</h3>
      <ul className="list-disc ml-4">
        {order.items.map((item, index) => (
          <li key={index}>
            {item.name} - {item.quantity} x ${item.price}
          </li>
        ))}
      </ul>

      <div className="mt-4 flex justify-between items-center">
        <p className="text-gray-400 italic">Created: {order.createAt}</p>
        <ItemButton title="View Details" style="btn-success btn-outline" />
      </div>
    </div>
  );
}
