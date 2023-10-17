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
        loader: () => fetch('/data.json')
      },
      {
        path : "/contact",
        element: <PrivateRoute>
          <Contact></Contact>
        </PrivateRoute>
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
        element: <PrivateRoute>
          <AddProduct></AddProduct>
        </PrivateRoute>
      },
      {
        path : "/cart",
        element: <PrivateRoute>
          <Cart></Cart>
        </PrivateRoute>
      },
    ],
  },
]);

export default router;