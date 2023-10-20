import { useContext } from "react";
import { FaCartPlus } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";

const ProductDetails = () => {
  const product = useLoaderData();
  const {user} = useContext(AuthContext);
  const userEmail =user.email;
  const { name, image, shortDescription, brand, price, type, rating } =product;

  const handleAddCart = () => {
    const CartItem = { name, image, brand, price, type, userEmail };
    // send data to the server
    fetch(
      "https://brand-shop-server-eta.vercel.app/cart/products",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(CartItem),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Product Added to cart",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
  };
  return (
    <div>
      <div className="min-w-screen min-h-screen bg-blue-300 flex items-center p-5 lg:p-10 overflow-hidden relative">
        <div className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
          <div className="md:flex items-center -mx-10">
            <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
              <div className="relative">
                <img src={image} className="w-full relative z-10" alt="" />
                <div className="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0" />
              </div>
            </div>
            <div className="w-full md:w-1/2 px-10">
              <div className="mb-10">
                <h1 className="font-bold uppercase text-2xl mb-5">{name}</h1>
                <p className="font-semibold">Brand: {brand}</p>
                <p>Desciption: {shortDescription}</p>
                <p>Rating: {rating}</p>
              </div>
              <div>
                <div className="inline-block align-bottom mr-5">
                  <span className="text-2xl leading-none align-baseline">
                    $
                  </span>
                  <span className="font-bold text-5xl leading-none align-baseline">
                    {price}
                  </span>
                </div>
                <div className="inline-block align-bottom">
                  <button
                    onClick={handleAddCart}
                    className="bg-blue-600 opacity-75 hover:opacity-100 text-white hover:text-black rounded-full px-10 py-2 font-semibold "
                  >
                    <FaCartPlus className=" inline-block text-xl items-center mr-2" />{" "}
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
