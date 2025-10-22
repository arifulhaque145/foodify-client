import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate, useParams } from "react-router-dom";
import ItemButton from "../components/shared/ItemButton";
import useAuth from "../hooks/useAuth";
import useCart from "../hooks/useCart";
import { useSingleMenu } from "../hooks/useMenu";

export default function MenuDetails() {
  const { id } = useParams();
  const { data: menu } = useSingleMenu(id);
  const { state } = useAuth();
  const { cartItems, addCartItem } = useCart();

  const navigate = useNavigate();

  return (
    <div className="container mx-auto p-4 md:p-8 flex flex-col md:flex-row gap-8 mt-20">
      <div className="flex-1">
        <LazyLoadImage
          src={menu?.img_source}
          alt={menu?.name}
          width={24}
          className="w-64 rounded-lg shadow-lg object-cover h-20 md:h-full"
        />
      </div>
      <div className="flex-1">
        <h1 className="text-3xl font-bold mb-2">{menu?.name}</h1>
        <p className="text-lg text-gray-500 mb-4">{menu?.category}</p>
        <p className="text-2xl dark:text-gray-300 font-semibold text-gray-700 mb-4">
          ${menu?.price}
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-4">{menu?.desc}</p>
        <ItemButton
          title="Add to cart"
          style="w-1/2 btn-error btn-outline dark:btn-success mr-1"
          click={() => {
            state?.user
              ? addCartItem
                  .mutateAsync({ user: state?.user, ...menu })
                  .then(() => cartItems.refetch())
                  .catch((err) => console.error("Error:", err))
              : navigate("/login");
          }}
        />
      </div>
    </div>
  );
}
