export default function HeroSection() {
  return (
    <section className="relative w-full h-screen bg-[url('https://images.unsplash.com/photo-1600891964599-f61ba0e24092')] bg-cover bg-center bg-fixed z-0">
      <div className="absolute inset-0 bg-black/70" />
      <div className="fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl font-bold text-white">
          <span className="font-thin leading-tight">Fresh & Fast Food</span>{" "}
          <br /> Delivered to Your Door!
        </h1>
        <p className="py-6 text-gray-300 max-w-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit...
        </p>
        <p className="btn btn-error btn-outline hover:text-white">Order Now</p>
      </div>
    </section>
  );
}
