import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ItemButton from "../components/shared/ItemButton";
import useCart from "../hooks/useCart";

export default function MenuDetails() {
  const { data } = useLoaderData();
  const menu = data;

  const { cartItems, addCartItem } = useCart();
  const { state } = useState();

  return (
    <div className="container mx-auto p-4 md:p-8 flex flex-col md:flex-row gap-8">
      <div className="flex-1">
        <img
          src={menu?.img}
          alt={menu?.name}
          className="w-full rounded-lg shadow-lg object-cover h-64 md:h-full"
        />
      </div>
      <div className="flex-1">
        <h1 className="text-3xl font-bold mb-2">{menu?.name}</h1>
        <p className="text-lg text-gray-500 mb-4">{menu?.category}</p>
        <p className="text-2xl font-semibold text-accent mb-4">
          ${menu?.price}
        </p>
        <p className="text-gray-700 mb-4">{menu?.description}</p>
        <ItemButton
          title="Add to cart"
          style="w-1/2 btn-soft btn-success mr-1"
          click={() => {
            addCartItem.mutate({
              _id: menu._id,
              user: state?.user,
              name: menu.name,
              img: menu.image,
              price: menu.price,
            });
            cartItems.refetch();
          }}
        />
      </div>
    </div>
  );
}
