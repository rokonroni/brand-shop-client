import { useState } from 'react';

const AddProduct = () => {
  const [product, setProduct] = useState({
    image: '',
    name: '',
    brand: '',
    type: 'phone', 
    price: '',
    shortDescription: '',
    rating: 0, //
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: name === 'rating' ? parseInt(value) : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Ensure the rating is capped at a maximum of 5
    if (product.rating > 5) {
      setProduct({ ...product, rating: 5 });
    }

    // Here, you can send the 'product' object to your backend for database storage

    // Clear the form after submission
    setProduct({
      image: '',
      name: '',
      brand: '',
      type: 'phone',
      price: '',
      shortDescription: '',
      rating: 0,
    });
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="text-sm font-medium text-gray-600">Image URL:</label>
          <input
            type="text"
            name="image"
            value={product.image}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="text-sm font-medium text-gray-600">Name:</label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="text-sm font-medium text-gray-600">Brand Name:</label>
          <input
            type="text"
            name="brand"
            value={product.brand}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="text-sm font-medium text-gray-600">Type:</label>
          <select
            name="type"
            value={product.type}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          >
            <option value="phone">Phone</option>
            <option value="computer">Computer</option>
            <option value="headphone">Headphone</option>
            {/* Add more types based on your category */}
          </select>
        </div>
        <div className="mb-4">
          <label className="text-sm font-medium text-gray-600">Price:</label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="text-sm font-medium text-gray-600">Short Description:</label>
          <textarea
            name="shortDescription"
            value={product.shortDescription}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="text-sm font-medium text-gray-600">Rating:</label>
          <input
            type="number"
            name="rating"
            value={product.rating}
            onChange={handleChange}
            min="0" // Minimum rating is 0
            max="5" // Maximum rating is 5
            className="w-full p-2 border rounded-md"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
