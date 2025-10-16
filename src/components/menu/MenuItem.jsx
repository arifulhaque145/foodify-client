import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useCart from "../../hooks/useCart";
import ItemButton from "../shared/ItemButton";
import TitleParagraph from "../shared/TitleParagraph";

export default function MenuItem({ dish }) {
  const { cartItems, addCartItem } = useCart();
  const { state } = useAuth();
  const navigate = useNavigate();

  return (
    <div
      key={dish.id}
      className="flex-shrink-0 card bg-red-100 shadow-sm hover:shadow-xl transition-shadow duration-300"
    >
      <figure
        className="cursor-pointer"
        onClick={() => navigate(`/menu-details/${dish._id}`)}
      >
        <LazyLoadImage
          src={dish.img}
          alt={dish.name}
          height={40}
          width={40}
          className="h-48 w-full object-cover"
        />
      </figure>
      <div className="card-body text-center justify-between">
        <TitleParagraph
          title={dish.name}
          paragraph={dish.description}
          titleStyle="text-xl uppercase"
          paraStyle="text-sm text-gray-500 mt-1 italic"
        />
        <div>
          <div className="flex justify-between mt-2">
            <ItemButton
              title="Add to cart"
              style={`w-1/2 btn btn-error btn-outline mr-1 hover:text-white`}
              click={() => {
                state?.user
                  ? addCartItem(dish).then(() => cartItems.refetch())
                  : navigate("/login");
              }}
            />
            <p className="text-gray-600 text-2xl font-bold text-right">
              ${dish.price}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
