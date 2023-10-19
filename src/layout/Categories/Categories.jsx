import PropTypes from "prop-types";
import Category from "../Category/Category";

const Categories = ({ categories }) => {
  return (
    <div className="container mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-5xl mb-2 font-semibold  text-blue-600 ">Populer Brands</h1>
        <p className="text-2xl">This is our populer Brand</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {categories.map((category) => (
          <Category key={category._id} category={category}></Category>
        ))}
      </div>
    </div>
  );
};
Categories.propTypes = {
  categories: PropTypes.array.isRequired,
};
export default Categories;
