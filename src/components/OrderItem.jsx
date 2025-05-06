import React from "react";

export default function OrderItem({ order }) {
  return (
    <div key={order.id} className="border p-4 mb-4 rounded-lg shadow">
      <div className="mb-2 text-gray-600 text-sm">
        Order Date: {order.date} Status: {order.status}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {order.totalItems.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border-b py-2"
          >
            <div>
              <h4 className="font-medium">{item.name}</h4>
              <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
            </div>
            <p className="font-semibold">${item.price * item.quantity}</p>
          </div>
        ))}
      </div>
      <div className="text-right mt-4 font-bold">Total: ${order.total}</div>
    </div>
  );
}
