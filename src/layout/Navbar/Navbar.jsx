import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
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
          to="/cart"
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
            <img className="w-1/4" src="./Logo.png" alt="" />
            <a href="/" className="normal-case lg:text-3xl text-xl font-semibold">
              Brand <span className="text-red-600 "> Shop</span>
            </a>
          </div>
          <div className="navbar-center  hidden lg:flex ">
            <ul className="menu menu-horizontal px-1">{NavLinks}</ul>
          </div>
          <div className="navbar-end">
            {user?.email ? (
              <div className="flex gap-2 items-center">
                <p className="lg:font-bold text-sm md:text-base">{user.displayName}</p>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
