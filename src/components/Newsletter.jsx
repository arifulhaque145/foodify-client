import { LazyLoadImage } from "react-lazy-load-image-component";
import newsletter from "../assets/newsletter.png";
import TitleParagraph from "./shared/TitleParagraph";

export default function Newsletter() {
  return (
    <section className="pt-16 px-8 text-primary-content flex items-center">
      <LazyLoadImage
        src={newsletter}
        alt="Newsletter"
        className="rounded-4xl w-2xl"
      />
      <div className="max-w-3xl mx-auto px-4 text-center">
        <TitleParagraph
          title="Subscribe to Our Newsletter"
          paragraph="Get exclusive offers, discounts, and updates on your favorite meals!"
          titleStyle="text-left text-gray-700 text-3xl font-bold mb-4"
          paraStyle="text-left text-gray-500 mb-6 text-lg"
        />
        <form className="flex flex-col sm:flex-row gap-4 items-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-2/3 outline-none border-2 border-red-300 rounded p-1.5 bg-red-100 placeholder:text-gray-400"
            required
          />
          <button
            type="submit"
            className="btn bg-red-400 text-white hover:bg-red-600 w-full sm:w-auto"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
