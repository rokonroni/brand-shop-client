import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import Categories from "../../layout/Categories/Categories";

const Home = () => {
  const categories = useLoaderData();
  return (
    <div >
      <Helmet>
        <title>Brand Shop || Home</title>
      </Helmet>
      <Categories categories={categories}></Categories>
    </div>
  );
};

export default Home;
