import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import TitleParagraph from "../shared/TitleParagraph";

export default function Testimonials() {
  return (
    <section className="py-12 bg-base-200 text-base-content">
      <div className="relative max-w-7xl mx-auto px-4 text-center">
        <TitleParagraph
          title="What Our Customers Say"
          paragraph="Real stories from happy food lovers"
          titleStyle="text-4xl font-extrabold text-center"
          paraStyle="text-center font-light text-gray-500 py-4 mb-8"
        />

        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={3.5}
          navigation={{
            nextEl: ".custom-next-testimonial",
            prevEl: ".custom-prev-testimonial",
          }}
          watchOverflow={true}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className="flex gap-4"
        >
          {reviews.map((user) => (
            <SwiperSlide
              key={user.id}
              className="card bg-white shadow-sm p-6 rounded-lg hover:shadow-md transition"
            >
              <div className="flex flex-col items-center">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-20 h-20 rounded-full mb-4"
                />
                <p className="text-gray-700 mb-4 italic">“{user.review}”</p>
                <h4 className="font-bold text-lg">{user.name}</h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <p className="custom-prev-testimonial absolute top-52 -left-2 z-10 -translate-y-1/2 bg-gray-200 p-4 rounded-full cursor-pointer disabled:opacity-0 hover:bg-red-400 hover:text-white duration-200 mt-8">
          <FaChevronLeft />
        </p>
        <p className="custom-next-testimonial absolute top-52 -right-2 z-10 -translate-y-1/2 bg-gray-200 p-4 rounded-full cursor-pointer disabled:opacity-0 hover:bg-red-400 hover:text-white duration-200 mt-8">
          <FaChevronRight />
        </p>

        {/* <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((user) => (
            <div
              key={user.id}
              className="card bg-white shadow-xl p-6 rounded-lg hover:shadow-2xl transition"
            >
              <div className="flex flex-col items-center">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-20 h-20 rounded-full mb-4"
                />
                <p className="text-gray-700 mb-4 italic">“{user.review}”</p>
                <h4 className="font-bold text-lg">{user.name}</h4>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}

const reviews = [
  {
    id: 1,
    name: "James L.",
    review:
      "This app is a game changer! My food arrives hot and fast every time. Love it!",
    avatar: "https://i.pravatar.cc/100?img=12",
    rating: 5,
  },
  {
    id: 2,
    name: "David R.",
    review:
      "Super easy to use and the dishes are always delicious. Highly recommend!",
    avatar: "https://i.pravatar.cc/100?img=51",
    rating: 5,
  },
  {
    id: 3,
    name: "Michael B.",
    review:
      "Affordable meals, great customer service, and fast delivery. What more could I ask for?",
    avatar: "https://i.pravatar.cc/100?img=52",
    rating: 4,
  },
  {
    id: 4,
    name: "Daniel K.",
    review:
      "The interface is clean and simple. Ordering food has never been this easy.",
    avatar: "https://i.pravatar.cc/100?img=56",
    rating: 5,
  },
  {
    id: 5,
    name: "Robert T.",
    review:
      "I love the variety of restaurants available. Always something new to try!",
    avatar: "https://i.pravatar.cc/100?img=57",
    rating: 4,
  },
  {
    id: 6,
    name: "William C.",
    review:
      "Fast delivery and the food quality is consistently great. Totally worth it.",
    avatar: "https://i.pravatar.cc/100?img=58",
    rating: 5,
  },
];
