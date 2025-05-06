export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      name: "Sarah M.",
      review:
        "This app is a game changer! My food arrives hot and fast every time. Love it!",
      avatar: "https://i.pravatar.cc/100?img=47",
    },
    {
      id: 2,
      name: "James L.",
      review:
        "Super easy to use and the dishes are always delicious. Highly recommend!",
      avatar: "https://i.pravatar.cc/100?img=32",
    },
    {
      id: 3,
      name: "Ayesha K.",
      review:
        "Affordable meals, great customer service, and fast delivery. What more could I ask for?",
      avatar: "https://i.pravatar.cc/100?img=12",
    },
  ];

  return (
    <section className="py-16 bg-base-200 text-base-content">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">What Our Customers Say</h2>
        <p className="mb-10 text-lg">Real stories from happy food lovers</p>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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
        </div>
      </div>
    </section>
  );
}
