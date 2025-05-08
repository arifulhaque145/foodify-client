import ItemButtonLink from "./shared/ItemButtonLink";
import TitleParagraph from "./shared/TitleParagraph";

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
          <TitleParagraph
            title="Fresh & Fast Food Delivered to Your Door!"
            titleStyle="text-5xl font-bold"
            paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
            inventore commodi corporis est itaque illo modi libero ullam
            nesciunt voluptatem?"
            paraStyle="py-6 text-base-content"
          />
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
