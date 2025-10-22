import FeaturesSection from "../components/home/FeaturesSection";
import HeroSection from "../components/home/HeroSection";
import Newsletter from "../components/home/Newsletter";
import PopularDishes from "../components/home/PopularDishes";
import Testimonials from "../components/home/Testimonials";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <main className="relative z-50 space-y-20 bg-white">
        <FeaturesSection />
        <PopularDishes />
        <Testimonials />
        <Newsletter />
      </main>
    </div>
  );
}
