import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import ItemButton from "../shared/ItemButton";

export default function MenuItem({ dish }) {
  const { state } = useAuth();
  const navigate = useNavigate();

  return (
    <div
      key={dish._id}
      className="flex-shrink-0 card bg-red-100 shadow-sm hover:shadow-xl transition-shadow duration-300"
    >
      <figure
        className="cursor-pointer"
        onClick={() => navigate(`/menu-details/${dish._id}`)}
      >
        <LazyLoadImage
          src={dish.img_source}
          alt={dish.name}
          height={40}
          width={40}
          className="h-48 w-full object-cover transition-transform duration-700 hover:scale-125"
        />
      </figure>
      <div className="card-body text-center justify-between">
        <p className="text-xl font-extrabold capitalize">{dish.name}</p>
        <div className="flex justify-between items-center w-full my-2">
          <p className="badge badge-outline badge-info capitalize max-w-fit">
            {dish.category}
          </p>
          <p className="inline-block text-right">Rating: {dish.rating}</p>
        </div>
        <div className="flex justify-between mt-2">
          <ItemButton
            title="Details"
            style={`w-2/3 text-sm capitalize btn btn-error btn-outline mr-1 hover:text-white`}
            click={() => navigate(`/menu-details/${dish._id}`)}
          />
          <p className="text-gray-600 text-xl font-extrabold text-right">
            ${dish.price}
          </p>
        </div>
      </div>
    </div>
  );
}
