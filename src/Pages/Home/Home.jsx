import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import Categories from "../../layout/Categories/Categories";
import Hero from "../../layout/Hero/Hero";
import WhyUs from "../../layout/WhyUs/WhyUs";
import Banner from "../../layout/Banner/Banner";
import CTA from "../../layout/CTA/CTA";

const Home = () => {
  const categories = useLoaderData();
  return (
    <div >
      <Helmet>
        <title>Brand Shop || Home</title>
      </Helmet> 
      <Hero></Hero>
      <Categories categories={categories}></Categories>
      <Banner/>
      <WhyUs></WhyUs>
      <CTA></CTA>
    </div>
  );
};

export default Home;
