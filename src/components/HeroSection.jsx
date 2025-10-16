export default function HeroSection() {
  return (
    <div className="bg-[url('https://images.unsplash.com/photo-1600891964599-f61ba0e24092')] w-full bg-cover bg-center">
      <div className="relative flex justify-center items-center h-[90vh]">
        <div className="absolute inset-0 bg-black/80" />
        <div className="relative z-10 w-1/2">
          <h1 className="text-5xl font-bold text-white text-center">
            Fresh & Fast Food Delivered to Your Door!
          </h1>
          <p className="py-6 text-gray-400 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit...
          </p>
          <div className="flex justify-center w-full">
            <button className="btn btn-error btn-outline hover:text-white">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
