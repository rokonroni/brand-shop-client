import { useLoaderData } from "react-router-dom";
import Slider from "../../layout/Slider/Slider";
import Card from "../../layout/Card/Card";

const Brand = () => {
  const data = useLoaderData();
  if (data.length > 0) {
    return (
      <div>
        <Slider items={data}></Slider>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {data?.map((product) => (
            <Card key={product.id} product={product}></Card>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col justify-center items-center h-[70vh] bg-gradient-to-b from-purple-500 via-pink-500 to-red-500">
        <div className=" p-8 rounded-lg shadow-xl text-white text-center">
          <div className="text-6xl font-extrabold tracking-tight">
            Oh no, it is empty!
          </div>
          <p className="text-xl mt-4">This category is currently barren.</p>
          <p className="text-xl mt-1">Please explore elsewhere.</p>
        </div>
      </div>
    );
  }
};

export default Brand;
