import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";

const CheckoutModal = ({ isOpen, setIsOpen }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setProcessing(true);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (error) {
      setError(error.message);
      setProcessing(false);
    } else {
      console.log("Payment Successful... PaymentMethod ID:", paymentMethod.id);
      setTimeout(() => {
        setIsOpen(false);
        setProcessing(false);
      }, 1500);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-base-100 p-6 rounded-lg shadow max-w-md w-full">
        <h2 className="text-xl font-semibold mb-4">Complete Payment</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <CardElement className="p-3 border rounded" />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <div className="flex justify-end gap-4">
            <button
              type="button"
              className="btn btn-outline"
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!stripe || processing}
              className="btn btn-primary"
            >
              {processing ? "Processing..." : "Pay Now"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutModal;
