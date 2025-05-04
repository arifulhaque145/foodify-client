export default function FeaturesSection() {
  return (
    <section className="py-16 bg-base-200 text-base-content">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6 text-primary">Why Choose Us?</h2>
        <p className="mb-10 text-lg">
          Delicious food, fast service, and a seamless experience — all in one
          app.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition duration-300">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
            <p>
              We deliver your food within 30 minutes, guaranteed fresh and hot.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition duration-300">
            <div className="text-4xl mb-4">🥗</div>
            <h3 className="text-xl font-semibold mb-2">Fresh Ingredients</h3>
            <p>
              All our meals are prepared using fresh and high-quality
              ingredients.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition duration-300">
            <div className="text-4xl mb-4">💳</div>
            <h3 className="text-xl font-semibold mb-2">Easy Payments</h3>
            <p>
              Multiple payment methods including credit card, mobile wallet, and
              cash on delivery.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
