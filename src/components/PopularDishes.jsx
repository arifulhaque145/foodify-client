import { motion } from "motion/react";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

const dishes = [
  {
    id: 1,
    name: "Burger",
    image: "https://picsum.photos/300?1",
    price: 8.99,
    description: "Juicy beef burger with cheese and lettuce.",
  },
  {
    id: 2,
    name: "Pizza",
    image: "https://picsum.photos/300?2",
    price: 12.99,
    description: "Classic Margherita with fresh basil and tomato.",
  },
  {
    id: 3,
    name: "Sushi",
    image: "https://picsum.photos/300?3",
    price: 10.49,
    description: "Fresh salmon sushi rolls with wasabi.",
  },
  {
    id: 4,
    name: "Salad",
    image: "https://picsum.photos/300?4",
    price: 6.50,
    description: "Healthy green salad with vinaigrette dressing.",
  },
  {
    id: 5,
    name: "Pasta",
    image: "https://picsum.photos/300?5",
    price: 9.75,
    description: "Creamy Alfredo pasta with chicken slices.",
  },
  {
    id: 6,
    name: "Tacos",
    image: "https://picsum.photos/300?6",
    price: 11.20,
    description: "Spicy beef tacos with cheese and salsa.",
  },
];

const CARD_WIDTH = 300; // px

export default function PopularDishes() {
  const [index, setIndex] = useState(0);
  const maxIndex = dishes.length - 3;
  const { state, actionAddToCart } = useAuth();

  const next = () => {
    if (index < maxIndex - 1) setIndex(index + 1);
  };

  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <div className="py-12 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center text-primary">
        Popular Dishes
      </h2>

      <div className="flex justify-end gap-4 mb-4">
        <button
          onClick={prev}
          className="btn btn-sm btn-outline"
          disabled={index === 0}
        >
          ❮
        </button>
        <button
          onClick={next}
          className="btn btn-sm btn-outline"
          disabled={index === maxIndex - 1}
        >
          ❯
        </button>
      </div>

      <div className="overflow-hidden">
        <motion.div
          className="flex gap-3"
          animate={{ x: -index * (CARD_WIDTH + 12) }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {dishes.map((dish) => (
            <div
              key={dish.id}
              className="w-[300px] flex-shrink-0 card bg-base-200 shadow-xl"
            >
              <figure>
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="h-48 w-full object-cover"
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title">{dish.name}</h3>
                <p className="text-sm text-gray-600 mt-1">{dish.description}</p>
                <p className="text-primary font-bold">{dish.price}</p>
                <button
                  className="btn btn-sm btn-primary mt-2"
                  onClick={() =>
                    actionAddToCart({
                      id: dish.id,
                      name: dish.name,
                      img: dish.image,
                      price: dish.price,
                    })
                  }
                >
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
