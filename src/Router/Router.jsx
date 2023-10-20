import Aos from "aos";
import { createBrowserRouter } from "react-router-dom";
import AddProduct from "../Pages/AddProduct/AddProduct";
import Brand from "../Pages/Brand/Brand";
import Contact from "../Pages/Contact/Contact";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Root from "../Pages/Root/Root";
import UpdateProduct from "../Pages/UpdateProduct/UpdateProduct";
import PrivateRoute from "./PrivateRoute";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import MyCart from "../Pages/MyCart/MyCart";
Aos.init();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () =>
          fetch(
            "https://brand-shop-server-eta.vercel.app/categories"
          ),
      },
      {
        path: "/contact",
        element: (
          <PrivateRoute>
            <Contact></Contact>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/addProduct",
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
      },
      {
        path: "/cart/:userEmail",
        element: (
          <PrivateRoute>
            <MyCart></MyCart>
          </PrivateRoute>
        ),
       loader: ({params}) =>
          fetch(
            `https://brand-shop-server-eta.vercel.app/cart/products/${params.userEmail}`
          ),
      },
      {
        path: "/brand/:categoryName",
        element: (
            <Brand></Brand>
        ),
        loader: ({ params }) =>
          fetch(
            ` https://brand-shop-server-eta.vercel.app/products/${params.categoryName}`
          ),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <UpdateProduct></UpdateProduct>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://brand-shop-server-eta.vercel.app/product/${[params.id]}`
          ),
      },
      {
        path: "/productDetails/:id",
        element: (
          <PrivateRoute>
            <ProductDetails></ProductDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://brand-shop-server-eta.vercel.app/product/${[params.id]}`
          ),
      },
    ],
  },
]);

export default router;
