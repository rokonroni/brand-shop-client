import { useState } from "react";

const Slider = () => {

  const images = [
    "/banner1.jpg",
    "/banner2.jpg",
    "/banner3.jpg",
    "/banner4.jpg",
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((activeIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setActiveIndex((activeIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative">
      <div
        className="w-full h-[60vh] bg-cover bg-no-repeat bg-center relative"
        style={{ backgroundImage: `url(${images[activeIndex]}) ` }}
      >
        <div className="absolute inset-0 bg-opacity-40 bg-black flex items-center justify-center">
          <div className="text-white text-center">
            <h2 className="text-2xl font-bold">Advertise</h2>
            <p className="text-sm">Brand</p>
          </div>
        </div>
      </div>
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 text-black p-2 rounded-full"
        onClick={prevSlide}
      >
        Previous
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 text-black p-2 rounded-full"
        onClick={nextSlide}
      >
        Next
      </button>
    </div>
  );
};

export default Slider;
