import { useLoaderData, useParams } from "react-router-dom";
import Slider from "../../layout/Slider/Slider";
import Card from "../../layout/Card/Card";

const Brand = () => {
  const { categoryName } = useParams();
  const data = useLoaderData();
  return (
    <div>
      <h1>{categoryName}</h1>
      <Slider  items={data}></Slider>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {
        data?.map((product) => <Card key={product.id} product={product}></Card>)
      }
      </div>
    </div>
  );
};

export default Brand;
