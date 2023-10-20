import { useState } from "react";
import Swal from "sweetalert2";

const AddProduct = () => {
  const [product, setProduct] = useState({
    image: "",
    name: "",
    brand: "Select brand",
    type: "Select type",
    price: "",
    shortDescription: "",
    rating: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: name === "rating" ? parseInt(value) : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (product.rating > 5) {
      setProduct({ ...product, rating: 5 });
    }

    fetch(" https://brand-shop-server-eta.vercel.app/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: 'Success!',
            text: 'Product Added Successfully',
            icon: "success",
            confirmButtonText: 'Ok'
          });
        }
      });

    setProduct({
      image: '',
      name: '',
      brand: 'Select brand',
      type: 'Select type',
      price: '',
      shortDescription: '',
      rating: 0,
    });
  };

  return (
    <div className="max-w-md mb-6 mx-auto p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="text-sm font-medium text-gray-600">
            Image URL:
          </label>
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
          <label className="text-sm font-medium text-gray-600">
            Brand Name:
          </label>
          <select
            name="brand"
            value={product.brand}
            onChange={handleChange}
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
            name="type"
            value={product.type}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          >
            <option value="Select type">Select type</option>
            <option value="phone">Phone</option>
            <option value="computer">Computer</option>
            <option value="headphone">Headphone</option>
            <option value="Monitor">Monitor</option>
            <option value="Mouse">Mouse</option>
            <option value="Printer">Printer</option>
            <option value="Printer">Keyboard</option>
            <option value="Printer">Laptop</option>
            <option value="Printer">MotherBoard</option>
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
          <label className="text-sm font-medium text-gray-600">
            Short Description:
          </label>
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
            min="0"
            max="5"
            className="w-full p-2 border rounded-md"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
