import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const UpdateProduct = () => {
  const product = useLoaderData();

  console.log(product);
  const [updatedProduct, setUpdatedProduct] = useState({ ...product });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Ensure the "rating" value is within the range of 0 to 5
    if (name === "rating") {
      const ratingValue = Math.min(5, Math.max(0, parseInt(value, 10)));
      setUpdatedProduct({
        ...updatedProduct,
        [name]: ratingValue,
      });
    } else {
      setUpdatedProduct({
        ...updatedProduct,
        [name]: value,
      });
    }
  };

  const handleSubmit = () => {
    // Handle form submission, e.g., update the product with the new data
  };

  return (
    <div className="max-w-md mb-6 mx-auto p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Update Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="text-sm font-medium text-gray-600">Image URL:</label>
          <input
            type="text"
            id="image"
            name="image"
            defaultValue={product.image}
            value={updatedProduct.image}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="text-sm font-medium text-gray-600">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={updatedProduct.name}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="text-sm font-medium text-gray-600">Brand Name:</label>
          <select
            name="brand"
            value={updatedProduct.brand}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
          >
            <option value="Select brand">Select brand</option>
            <option value="Apple">Apple</option>
            <option value="Samsung">Samsung</option>
            <option value="Sony">Sony</option>
            <option value="Google">Google</option>
            <option value="Intel">Intel</option>
            <option value="MSI">MSI</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="text-sm font-medium text-gray-600">Type:</label>
          <select
            id="type"
            name="type"
            value={updatedProduct.type}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
          >
           <option value="Select type">Select type</option>
            <option value="phone">Phone</option>
            <option value="computer">Computer</option>
            <option value="headphone">Headphone</option>
            <option value="Monitor">Monitor</option>
            <option value="Mouse">Mouse</option>
            <option value="Printer">Printer</option>
            
          </select>
        </div>
        <div className="mb-4">
          <label className="text-sm font-medium text-gray-600">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={updatedProduct.price}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="text-sm font-medium text-gray-600">Rating:</label>
          <input
            type="number"
            id="rating"
            name="rating"
            value={updatedProduct.rating}
            onChange={handleInputChange}
            min="0"
            max="5"
            className="w-full p-2 border rounded-md"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover-bg-blue-600"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateProduct;
