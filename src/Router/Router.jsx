import Aos from "aos";
import { createBrowserRouter } from "react-router-dom";
import AddProduct from "../Pages/AddProduct/AddProduct";
import Brand from "../Pages/Brand/Brand";
import Cart from "../Pages/Cart/Cart";
import Contact from "../Pages/Contact/Contact";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Root from "../Pages/Root/Root";
import UpdateProduct from "../Pages/UpdateProduct/UpdateProduct";
import PrivateRoute from "./PrivateRoute";
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
            " https://brand-shop-server-j4onq6kki-rokonroni-a48d6abc.vercel.app/categories"
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
        path: "/cart",
        element: (
          <PrivateRoute>
            <Cart></Cart>
          </PrivateRoute>
        ),
      },
      {
        path: "/category/:categoryName",
        element: (
          <PrivateRoute>
            <Brand></Brand>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            ` https://brand-shop-server-j4onq6kki-rokonroni-a48d6abc.vercel.app/products/${params.categoryName}`
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
            `https://brand-shop-server-j4onq6kki-rokonroni-a48d6abc.vercel.app/product/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
