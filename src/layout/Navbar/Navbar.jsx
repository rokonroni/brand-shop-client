import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const userEmail = user?.email;
  const defultURL =
    "https://i.ibb.co/yyqYs5G/065893fea1c83ab8abeca91dc669e470.jpg";
  const NavLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "bg-none"
              : isActive
              ? "text-[#FF444A] font-bold underline text-lg "
              : "font-bold underline text-lg hover:bg-transparent hover:text-[#FF444A] focus:bg-white focus:text-[#FF444A]"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addProduct"
          className={({ isActive, isPending }) =>
            isPending
              ? "bg-none"
              : isActive
              ? "text-[#FF444A] underline font-bold text-lg "
              : "font-bold text-lg underline hover:bg-transparent hover:text-[#FF444A] focus:bg-white focus:text-[#FF444A]"
          }
        >
          Add Product
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            isPending
              ? "bg-none"
              : isActive
              ? "text-[#FF444A] underline font-bold text-lg "
              : "font-bold text-lg underline hover:bg-transparent hover:text-[#FF444A] focus:bg-white focus:text-[#FF444A]"
          }
        >
          Contact Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to={`/cart/${userEmail}`}
          className={({ isActive, isPending }) =>
            isPending
              ? "bg-none"
              : isActive
              ? "text-[#FF444A] underline font-bold text-lg "
              : "font-bold text-lg underline hover:bg-transparent hover:text-[#FF444A] focus:bg-white focus:text-[#FF444A]"
          }
        >
          My Cart
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="container mx-auto">
      <div className="text-blue-600 bg-transparent container mx-auto">
        <div className="navbar mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {NavLinks}
              </ul>
            </div>
            
            <a
              href="/"
            >
             <img className="w-1/4" src="./Logo.png" alt="" />
            </a>
          </div>
          <div className="navbar-center  hidden lg:flex ">
            <ul className="menu menu-horizontal px-1">{NavLinks}</ul>
          </div>
          <div className="navbar-end">
            {user?.email ? (
              <div className="flex gap-2 items-center">
                <p className="lg:font-bold text-sm md:text-base">
                  {user.displayName}
                </p>
                <button
                  onClick={logOut}
                  className="btn btn-sm bg-transparent text-blue-600 border-blue-600 hover:bg-transparent hover:text-red-600 hover:font-bold hover:border-red-600 "
                >
                  Log out
                </button>
                <div className="md:w-10 md:h-10 rounded-full border overflow-hidden">
                  <img src={user?.photoURL ? user?.photoURL : defultURL} />
                </div>
              </div>
            ) : (
              <Link to="/login">
                <button className="btn btn-sm bg-transparent text-blue-600 border-blue-600 hover:bg-transparent hover:text-red-600 hover:font-bold hover:border-red-600 ">
                  Login
                </button>
              </Link>
            )}
            <button
              id="theme-toggle"
              type="button"
              className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
            >
              <svg
                id="theme-toggle-dark-icon"
                className="w-5 h-5 hidden"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
              <svg
                id="theme-toggle-light-icon"
                className="w-5 h-5 hidden"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  fillRule="evenodd"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
