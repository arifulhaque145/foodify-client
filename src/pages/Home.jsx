import FeaturesSection from "../components/FeaturesSection";
import HeroSection from "../components/HeroSection";
import Newsletter from "../components/Newsletter";
import PopularDishes from "../components/PopularDishes";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <PopularDishes />
      <Testimonials />
      <Newsletter />
    </div>
  );
}
