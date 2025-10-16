import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import MenuItem from "../components/menu/MenuItem";
import TitleParagraph from "./shared/TitleParagraph";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "swiper/css";
import { Navigation } from "swiper/modules";

export default function PopularDishes() {
  const [dishes, setDished] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_URL}/food-items`)
      .then((res) => res.json())
      .then((data) => {
        const limitedData = data.slice(0, 10);
        setDished(limitedData);
      });
  }, []);

  return (
    <div className="relative max-w-7xl mx-auto my-12">
      <TitleParagraph
        title="Popular Dishes"
        paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, soluta."
        titleStyle="text-4xl font-extrabold text-center"
        paraStyle="text-center font-light text-gray-500 py-4"
      />

      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={3.5}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        watchOverflow={true}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="flex gap-4 !p-8"
      >
        {dishes.map((dish) => (
          <SwiperSlide key={dish.id}>
            <MenuItem dish={dish} />
          </SwiperSlide>
        ))}
      </Swiper>

      <button className="custom-prev absolute top-1/2 -left-6 z-10 -translate-y-1/2 bg-gray-200 p-4 rounded-full cursor-pointer disabled:opacity-0 hover:bg-red-400 hover:text-white duration-200 mt-8">
        <FaChevronLeft />
      </button>
      <button className="custom-next absolute top-1/2 -right-6 z-10 -translate-y-1/2 bg-gray-200 p-4 rounded-full cursor-pointer disabled:opacity-0 hover:bg-red-400 hover:text-white duration-200 mt-8">
        <FaChevronRight />
      </button>
    </div>
  );
}
