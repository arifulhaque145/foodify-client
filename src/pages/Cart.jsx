import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CartItem from "../components/CartItem";
import ItemButton from "../components/shared/ItemButton";
import TitleParagraph from "../components/shared/TitleParagraph";
import useAuth from "../hooks/useAuth";
import useCart from "../hooks/useCart";
import useOrder from "../hooks/useOrder";

export default function Cart() {
  const { state } = useAuth();
  const { cartItems, clearCart } = useCart();
  const { placeOrder } = useOrder();

  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const navigate = useNavigate();

  const subtotal =
    cartItems?.data?.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    ) || 0;
  const shippingCost = subtotal > 0 ? 10 : 0;
  const total = subtotal + shippingCost - discount;

  const handleApplyPromo = () => {
    setDiscount(promoCode.toUpperCase() === "DISCOUNT10" ? subtotal * 0.1 : 0);
  };

  const newOrder = {
    user: state?.user,
    items: cartItems?.data?.map(({ user, ...rest }) => rest),
    status: "pending",
    createAt: new Date().toLocaleString("en-US", {
      dateStyle: "short",
      timeStyle: "short",
      hour12: true,
    }),
  };

  const handlePlaceOrder = () => {
    placeOrder.mutate(newOrder);
    clearCart.mutate(state?.user);
    cartItems?.refetch();
    !cartItems?.isLoading && navigate("/order");
  };

  if (cartItems?.isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!state?.user || cartItems?.data?.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <p className="text-center text-4xl uppercase font-light">
          Your cart is empty.
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <TitleParagraph
        title="Your Cart"
        paragraph="Manage your shopping items here."
        titleStyle="text-3xl font-bold text-center mb-2"
        paraStyle="text-center mb-6 text-slate-500 italic"
      />
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full">
          <div className="card bg-base-100 shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Shopping Items</h2>
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
                {cartItems?.data?.map((item) => (
                  <CartItem key={item._id} item={item} />
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan="5" className="text-center">
                    <ItemButton
                      title="Clear Cart"
                      style="btn-success btn-outline"
                      click={() => {
                        clearCart.mutate(state?.user);
                        cartItems?.refetch();
                      }}
                    />
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

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
              <input
                type="text"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                placeholder="Enter promo code"
                className="input input-bordered w-full"
              />
              <button
                onClick={handleApplyPromo}
                className="btn btn-success mt-2 w-full"
              >
                Apply Promo
              </button>
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
              className="btn btn-block btn-accent mt-6"
              onClick={handlePlaceOrder}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
