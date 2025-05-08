import { motion } from "motion/react";
import { useState } from "react";
import MenuItem from "./MenuItem";
import TitleParagraph from "./shared/TitleParagraph";

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
    price: 6.5,
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
    price: 11.2,
    description: "Spicy beef tacos with cheese and salsa.",
  },
];

const CARD_WIDTH = 300; // px

export default function PopularDishes() {
  const [index, setIndex] = useState(0);
  const maxIndex = dishes.length - 3;

  const next = () => {
    if (index < maxIndex - 1) setIndex(index + 1);
  };

  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <div className="py-12 px-4 max-w-7xl mx-auto">
      <TitleParagraph
        title="Popular Dishes"
        paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, soluta."
        titleStyle="text-3xl font-bold mb-6 text-center"
        paraStyle="text-center"
      />
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
            <MenuItem dish={dish} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
