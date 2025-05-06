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
];

export default function FeaturesSection() {
  return (
    <section className="py-16 bg-base-200 text-base-content">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
        <p className="mb-10 text-lg">
          Delicious food, fast service, and a seamless experience — all in one
          app.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {chooseItems.map((item) => (
            <div
              className="p-6 bg-emerald-800 rounded-lg shadow hover:shadow-lg transition duration-300"
              key={item.id}
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
