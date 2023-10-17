import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import Categories from "../../layout/Categories/Categories";

const Home = () => {
  const products = useLoaderData();
  console.log(products);
  return (
    <div >
      <Helmet>
        <title>Brand Shop || Home</title>
      </Helmet>
      <Categories products={products}></Categories>
    </div>
  );
};

export default Home;
