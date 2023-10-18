import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Aos from "aos";
import AddProduct from "../Pages/AddProduct/AddProduct";
import Cart from "../Pages/Cart/Cart";
import Brand from "../Pages/Brand/Brand";
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
        loader: () => fetch(' https://brand-shop-server-j4onq6kki-rokonroni-a48d6abc.vercel.app/categories')
      },
      {
        path : "/contact",
        element: <PrivateRoute><Contact></Contact></PrivateRoute>
      },
      {
        path : "/login",
        element: <Login></Login>
      },
      {
        path : "/register",
        element: <Register></Register>
      },
      {
        path : "/addProduct",
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
      },
      {
        path : "/cart",
        element: <PrivateRoute><Cart></Cart></PrivateRoute>
      },
      {
        path : "/category/:categoryName",
        element: <PrivateRoute><Brand></Brand></PrivateRoute>,
        loader: ({params}) => fetch(` https://brand-shop-server-j4onq6kki-rokonroni-a48d6abc.vercel.app/products/${params.categoryName}`) 
      },
    ],
  },
]);

export default router;