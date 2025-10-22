import { LazyLoadImage } from "react-lazy-load-image-component";
import BuyCart from "../../assets/buy_cart.png";

const chooseItems = [
  {
    id: 1,
    icon: "🚀",
    title: "Fast Delivery",
    desc: "We deliver your food within 30 minutes, guaranteed fresh and hot.",
  },
  {
    id: 2,
    icon: "🥗",
    title: "Fresh Ingredients",
    desc: "All our meals are prepared using fresh and high-quality ingredients.",
  },
  {
    id: 3,
    icon: "💳",
    title: "Easy Payments",
    desc: "Multiple payment methods including credit card, mobile wallet, and cash on delivery.",
  },
  {
    id: 4,
    icon: "🥗",
    title: "Variety Food",
    desc: "Molestie a iaculis at erat pellentesque. Interdum consectetur libero id faucibus nisl.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="bg-base-200 text-base-content">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="flex items-center gap-8">
          <LazyLoadImage
            src={BuyCart}
            alt="Image"
            className="rounded-4xl w-2xl"
          />
          <div className="text-left">
            <p className="text-5xl font-extrabold mb-8 text-gray-700">
              Our mission is to save you time
            </p>
            <p className="text-gray-500">
              Viverra vitae congue eu consequat ac felis. Imperdiet massa
              tincidunt nunc pulvinar sapien et ligula ullamcorper. Velit ut
              tortor pretium viverra suspendisse potenti nullam ac tortor.
              <br />
              <br /> Eget egestas purus viverra accumsan in nisl nisi
              scelerisque. Tincidunt augue interdum velit euismod in
              pellentesque.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {chooseItems.map((item) => (
            <div
              className="p-8 bg-gray-100 rounded-lg shadow-md hover:shadow-lg duration-300 cursor-pointer hover:bg-red-400 hover:text-white transition-colors group"
              key={item.id}
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-2xl text-gray-700 font-bold my-4 group-hover:text-white">
                {item.title}
              </h3>
              <p className="text-gray-500 group-hover:text-white">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
