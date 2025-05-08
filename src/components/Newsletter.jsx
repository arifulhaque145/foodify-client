import TitleParagraph from "./shared/TitleParagraph";

export default function Newsletter() {
  return (
    <section className="py-16 bg-emerald-800 text-primary-content">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <TitleParagraph
          title="Subscribe to Our Newsletter"
          paragraph="Get exclusive offers, discounts, and updates on your favorite meals!"
          titleStyle="text-3xl font-bold mb-4"
          paraStyle="mb-6 text-lg"
        />
        <form className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="input input-bordered w-full sm:w-2/3"
            required
          />
          <button
            type="submit"
            className="btn btn-soft btn-success w-full sm:w-auto"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
