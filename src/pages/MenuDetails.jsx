import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ItemButton from "../components/shared/ItemButton";
import useCart from "../hooks/useCart";
import useMenu from "../hooks/useMenu";

export default function MenuDetails() {
  const { id } = useParams();
  const { state } = useState();
  const { cartItems, addCartItem } = useCart();
  const { menuItems } = useMenu();
  const navigate = useNavigate();

  const menu = menuItems?.data?.find((item) => item._id === id);

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
        <p className="text-2xl dark:text-gray-300 font-semibold text-gray-700 mb-4">
          ${menu?.price}
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          {menu?.description}
        </p>
        <ItemButton
          title="Add to cart"
          style="w-1/2 btn-error btn-outline dark:btn-success mr-1"
          click={() => {
            state?.user
              ? addCartItem(menu).then(() => cartItems.refetch())
              : navigate("/login");
          }}
        />
      </div>
    </div>
  );
}
