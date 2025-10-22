import OrderItem from "../components/order/OrderItem";
import TitleParagraph from "../components/shared/TitleParagraph";
import useAuth from "../hooks/useAuth";
import useOrder from "../hooks/useOrder";

export default function Order() {
  const { state } = useAuth();
  const { orders } = useOrder();

  if (!state?.user) return <p>Please log in to view your orders.</p>;

  if (orders?.data?.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <p className="text-center text-4xl uppercase font-light">
          No order founds.
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <TitleParagraph
        title={`Your Orders (${state?.user})`}
        paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, nobis."
        titleStyle="text-3xl font-bold text-center mb-2 "
        paraStyle="text-center mb-6 text-slate-500 italic mb-8"
      />

      <div className="md:w-2/3 md:mx-auto grid grid-cols-2 gap-2">
        {orders?.data?.map((order) => (
          <OrderItem key={order._id} order={order} />
        ))}
      </div>
    </div>
  );
}
