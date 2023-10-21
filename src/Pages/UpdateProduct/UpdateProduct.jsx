import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {
  const product = useLoaderData();
  const [updatedProduct, setUpdatedProduct] = useState({ ...product });
  const handleInputChange = (e) => {
    const { name, value } = e.target;

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

  const handleSubmit = (e) => {
   e.preventDefault();

    fetch(`https://brand-shop-server-eta.vercel.app/product/${updatedProduct._id}`,{
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          Swal.fire({
            title: 'Success!',
            text: 'Product Updated Successfully',
            icon: "success",
            confirmButtonText: 'Ok'
          });
        }
      });
  };

  return (
    <>
    <Helmet>
        <title>Brand Shop || Update Product</title>
    </Helmet>
      <div className="max-w-md mb-6 mx-auto p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Update Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="text-sm font-medium text-gray-600">Image URL:</label>
          <input
            type="text"
            id="image"
            name="image"
            defaultValue={updatedProduct.image}
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
            defaultValue={updatedProduct.name}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="text-sm font-medium text-gray-600">Brand Name:</label>
          <select
            name="brand"
            defaultValue={updatedProduct.brand}
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
            defaultValue={updatedProduct.type}
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
            <option value="Keyboard">Keyboard</option>
            <option value="Laptop">Laptop</option>
            <option value="MotherBoard">MotherBoard</option>
            <option value="SSD">SSD</option>
            <option value="Processor">Processor</option>
            <option value="Casing">Casing</option>
            
          </select>
        </div>
        <div className="mb-4">
          <label className="text-sm font-medium text-gray-600">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            defaultValue={updatedProduct.price}
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
            defaultValue={updatedProduct.rating}
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
    </>
    
  );
};

export default UpdateProduct;
