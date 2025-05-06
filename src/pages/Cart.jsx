import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CartItem from "../components/CartItem";
import CheckoutModal from "../components/CheckoutModal";
import { useAuth } from "../hooks/useAuth";

export default function Cart() {
  const shippingCost = 10;
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const { state, actionClearCart, actionPlaceOrder } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const payment = true;
  const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

  const handleApplyPromoCode = () => {
    if (promoCode === "DISCOUNT10") {
      setDiscount(10);
    } else {
      setDiscount(0);
    }
  };

  const getCartTotal = () => {
    const total = state.cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    return total - (total * discount) / 100;
  };

  const handleProceedToOrder = () => {
    const newOrder = {
      id: Date.now(),
      user: state.user,
      totalItems: state.cartItems,
      total: getCartTotal(),
      date: new Date().toLocaleString(),
      status: "pending",
    };

    actionPlaceOrder(newOrder);
    alert("Order placed successfully...");
    actionClearCart();
    navigate("/");
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-semibold mb-4">Your Cart</h2>

      <div className="space-y-4">
        {state.cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      {/* Cart Summary */}
      <div className="mt-6 border-t pt-4">
        <div className="flex justify-between text-lg">
          <span>Subtotal:</span>
          <span>${getCartTotal().toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-lg">
          <span>Shipping:</span>
          <span>${shippingCost}.00</span>
        </div>

        {/* Promo Code */}
        <div className="mt-4 flex items-center">
          <input
            type="text"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            placeholder="Promo Code"
            className="px-4 py-2 border border-gray-300 rounded-md w-40"
          />
          <button
            onClick={handleApplyPromoCode}
            className="ml-4 bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Apply
          </button>
        </div>

        {/* Total Price */}
        <div className="flex justify-between text-xl font-bold mt-4">
          <span>Total:</span>
          <span>${(getCartTotal() + shippingCost).toFixed(2)}</span>
        </div>

        {/* Proceed Button */}
        <div className="mt-6">
          {payment ? (
            <button
              onClick={handleProceedToOrder}
              className="bg-green-500 text-white px-6 py-2 rounded-md w-full"
            >
              Proceed to Order
            </button>
          ) : (
            <button
              onClick={() => setOpen(true)}
              className="bg-green-500 text-white px-6 py-2 rounded-md w-full"
            >
              Payment Checkout
            </button>
          )}
        </div>
        <Elements stripe={stripePromise}>
          <CheckoutModal isOpen={open} setIsOpen={setOpen} />
        </Elements>
      </div>
    </div>
  );
}
