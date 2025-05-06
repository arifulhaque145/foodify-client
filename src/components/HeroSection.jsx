import ItemButtonLink from "./ItemButtonLink";

export default function HeroSection() {
  return (
    <section className="hero min-h-[80vh] bg-base-100">
      <div className="hero-content flex-col lg:flex-row-reverse gap-10">
        <img
          src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
          className="max-w-sm rounded-lg shadow-2xl"
          alt="Delicious Food"
        />
        <div>
          <h1 className="text-5xl font-bold">
            Fresh & Fast Food Delivered to Your Door!
          </h1>
          <p className="py-6 text-base-content">
            Discover the best meals in town. Whether you're craving burgers,
            pizza, or healthy options — we've got you covered.
          </p>
          <ItemButtonLink
            title="Order Now 🍽️"
            link="/menu"
            color="btn-success"
            outline="btn-outline"
          />
        </div>
      </div>
    </section>
  );
}
