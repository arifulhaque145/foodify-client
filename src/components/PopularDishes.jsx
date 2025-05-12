import { motion } from "motion/react";
import { useState } from "react";
import MenuItem from "./MenuItem";
import TitleParagraph from "./shared/TitleParagraph";

const CARD_WIDTH = 300; // px

export default function PopularDishes() {
  const [index, setIndex] = useState(0);
  const [dishes, setDished] = useState([]);

  fetch(`${import.meta.env.VITE_URL}/food-items`)
    .then((res) => res.json())
    .then((data) => {
      const limitedData = data.slice(0, 10);
      setDished(limitedData);
    });

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
            <MenuItem key={dish.id} dish={dish} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
