import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CartItem from "../components/CartItem";
import ItemButton from "../components/shared/ItemButton";
import TitleParagraph from "../components/shared/TitleParagraph";
import { useAuth } from "../hooks/useAuth";

export default function Cart() {
  const { state, actionClearCart, actionPlaceOrder } = useAuth();

  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const navigate = useNavigate();

  const subtotal = state.cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shippingCost = subtotal > 0 ? 10 : 0;
  const total = subtotal + shippingCost - discount;

  const handleApplyPromo = () => {
    if (promoCode.toUpperCase() === "DISCOUNT10") {
      setDiscount(subtotal * 0.1);
    } else {
      setDiscount(0);
    }
  };

  const handlePlaceOrder = () => {
    const newOrder = {
      id: Date.now(),
      user: state.user,
      items: state.cartItems,
      status: "pending",
      createAt: new Date().toLocaleString("en-US", {
        dateStyle: "short",
        timeStyle: "short",
        hour12: true,
      }),
    };
    actionPlaceOrder(newOrder);
    actionClearCart();
    navigate("/");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {state.cartItems.length === 0 ? (
        <p className="text-center text-4xl uppercase font-light">
          Your cart is empty.
        </p>
      ) : (
        <>
          <TitleParagraph
            title="Your Cart"
            paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, nobis."
            titleStyle="text-3xl font-bold text-center mb-2 "
            paraStyle="text-center mb-6 text-slate-500 italic"
          />
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full">
              <div className="card bg-base-100 shadow-lg p-6">
                <h2 className="text-xl font-semibold mb-4">Shopping Items</h2>
                {/* Table View for Cart Items */}
                <table className="table w-full">
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                      <th className="text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {state.cartItems.map((item) => (
                      <CartItem key={item.id} item={item} />
                    ))}
                  </tbody>
                  <tbody>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td className="text-center">
                        <ItemButton
                          title="Clear Cart"
                          style="btn-success btn-outline"
                          click={actionClearCart}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Summary */}
            <div className="w-full lg:w-1/3">
              <div className="card bg-base-100 shadow-lg p-6">
                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                <div className="flex justify-between mb-2">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Shipping</span>
                  <span>${shippingCost.toFixed(2)}</span>
                </div>
                <div className="mt-4">
                  <label className="label">
                    <span className="label-text">Promo Code</span>
                  </label>
                  <div className="flex">
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="Enter code"
                      className="input input-bordered flex-1"
                    />
                    <button
                      onClick={handleApplyPromo}
                      className="btn btn-success ml-2"
                    >
                      Apply
                    </button>
                  </div>
                  {discount > 0 && (
                    <p className="text-sm text-green-500 mt-2">
                      Discount applied: -${discount.toFixed(2)}
                    </p>
                  )}
                </div>

                <div className="divider"></div>

                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>

                <button
                  className="btn btn-block btn-accent btn-soft mt-6"
                  onClick={handlePlaceOrder}
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
