import  { useState } from "react";
import PropTypes from "prop-types";
const Slider = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((activeIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setActiveIndex((activeIndex - 1 + items.length) % items.length);
  };

  return (
    <div className="relative">
      <div className="w-full h-[60vh] bg-cover bg-center relative" style={{ backgroundImage: `url(${items[activeIndex].image})` }}>
        <div className="absolute inset-0 bg-opacity-40 bg-black flex items-center justify-center">
          <div className="text-white text-center">
            <h2 className="text-2xl font-bold">{items[activeIndex].name}</h2>
            <p className="text-sm">{items[activeIndex].brand}</p>
          </div>
        </div>
      </div>
      <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 text-black p-2 rounded-full" onClick={prevSlide}>
        Previous
      </button>
      <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 text-black p-2 rounded-full" onClick={nextSlide}>
        Next
      </button>
    </div>
  );
};
Slider.propTypes = {
  items: PropTypes.array.isRequired,
};
export default Slider;
