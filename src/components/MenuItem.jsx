import React from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useCart from "../hooks/useCart";
import ItemButton from "./shared/ItemButton";
import ItemButtonLink from "./shared/ItemButtonLink";
import TitleParagraph from "./shared/TitleParagraph";

export default function MenuItem({ dish }) {
  const { cartItems, addCartItem } = useCart();
  const { state } = useAuth();
  const navigate = useNavigate();

  return (
    <div
      key={dish.id}
      className="w-[300px] flex-shrink-0 card bg-base-200 shadow-xl"
    >
      <figure>
        <img
          src={dish.img}
          alt={dish.name}
          className="h-48 w-full object-cover"
        />
      </figure>
      <div className="card-body text-center justify-between">
        <TitleParagraph
          title={dish.name}
          paragraph={dish.description}
          titleStyle="text-xl uppercase"
          paraStyle="text-sm text-gray-600 mt-1 italic"
        />
        <div>
          <p className="text-gray-50 text-2xl font-bold">${dish.price}</p>
          <div className="flex justify-between mt-2">
            <ItemButton
              title="Add to cart"
              style="w-1/2 btn-soft btn-success mr-1"
              click={() => {
                state?.user
                  ? addCartItem(dish).then(() => cartItems.refetch())
                  : navigate("/login");
              }}
            />
            <ItemButtonLink
              title="Details"
              link={`/menu-details/${dish._id}`}
              color="btn-success"
              outline="btn-outline"
              style="w-1/2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
