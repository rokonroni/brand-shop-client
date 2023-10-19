import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Card = ({ product }) => {
  const { _id, image, name, brand, type, price, rating } = product;
    
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 m-2">
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover rounded-lg"
        />
        <div className="absolute top-2 right-2 bg-white text-gray-700 px-2 py-1 rounded-full shadow">
          {rating} Stars
        </div>
      </div>
      <div className="mt-4">
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-gray-600">{brand}</p>
        <p className="text-gray-600">{type}</p>
        <p className="text-gray-600">${price}</p>
        <div className="mt-4 flex justify-between">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Details
          </button>
          <Link to={`/update/${_id}`}>
            <button
            className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-300"
          >
            Update
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
Card.propTypes = {
  product: PropTypes.object.isRequired,
};
export default Card;
