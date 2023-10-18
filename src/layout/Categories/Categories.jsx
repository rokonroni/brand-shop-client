import PropTypes from "prop-types";
import Category from "../Category/Category";

const Categories = ({ categories }) => {
  return (
    <div className="container mx-auto">
      <div>
        <h1 className="text-center text-6xl font-semibold mb-10 underline text-blue-600 ">Populer Category</h1>
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
