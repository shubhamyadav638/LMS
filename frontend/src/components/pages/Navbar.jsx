import { memo, useState } from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa";
import { useSelector } from 'react-redux';

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const handleMenuChange = () => {
    setMenu(!menu);
  };

  const handleCartToggle = () => {
    setCartOpen(!cartOpen);
  };

  const result = useSelector(state => state.product.cart);

  return (
    <header className="p-4 mx-w-[1200px] bg-slate-900 fixed right-0 left-0 z-10">
      <nav className="container flex justify-between mx-auto md:text-lg items-center capitalize text-white lg:text-xl">
        <div className="flex gap-4 justify-center items-center">
          <div className="home">
            <Link to="/">
              <FaHome />
            </Link>
          </div>
          <div className="logo">
            <Link to="/dashboard" className="capitalize">
              go to dashboard
            </Link>
          </div>
        </div>

        <div className="md:flex hidden space-x-6 items-center">
          <Link to="/ecom">ecomm</Link>
          
          <div className="relative">
            <div onClick={handleCartToggle} className="relative flex items-center cursor-pointer">
              <FaCartArrowDown className="text-2xl hover:text-gray-300 transition duration-300" />
              <span className="absolute -top-2 -right-3 bg-pink-500 text-white text-xs font-bold rounded-full px-2 py-1">
                {result.length}
              </span>
            </div>

            {cartOpen && (
              <div
                tabIndex={0}
                className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow absolute right-0">
                <div className="card-body">
                  <span className="text-lg font-bold">{result.length} Items</span>
                  <span className="text-info">Subtotal: ${result.reduce((sum, item) => sum + item.price, 0)}</span>
                  <div className="card-actions">
                    <Link to="/cart">
                    <button className="btn btn-primary btn-block">View cart</button>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link to="/about">about us</Link>
          <Link to="/contact">contact us</Link>
          <Link to="/signup">sign up</Link>
          <Link to="/login">sign in</Link>
        </div>

        <div className="md:hidden">
          <button onClick={handleMenuChange}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </nav>

      <div
        className={`capitalize md:hidden text-white space-y-3 ${menu ? "block" : "hidden"}`}>
        <Link className="block" to="/about">
          about us
        </Link>
        <Link className="block" to="/contact">
          contact us
        </Link>
        <Link className="block" to="/signup">
          sign up
        </Link>
        <Link className="block" to="/login">
          sign in
        </Link>
      </div>
    </header>
  );
};

export default memo(Navbar);
