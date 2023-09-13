import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <header className="text-gray-600 body-font shadow-lg">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to={"/"} className="flex cursor-pointer title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img src={logo} alt="" className="w-[60px]" />
          <span className="ml-3 text-3xl">ShopZone</span>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-xl font-semibold justify-center">
          <Link to="/" className="mr-5 hover:text-red-600">
            Home
          </Link>
          <Link to="/products" className="mr-5 hover:text-red-600">
            Products
          </Link>
          <Link to="/about" className="mr-5 hover:text-red-600">
            About
          </Link>
          <Link to="/contact" className="mr-5 hover:text-red-600">
            Contact
          </Link>
        </nav>
        <Link to={"/cart"} className="inline-flex items-center text-white bg-red-600 border-0 py-2 px-4 focus:outline-none hover:bg-red-400 rounded text-base mt-4 md:mt-0">
           Your Cart
          
        </Link>
      </div>
    </header>
  );
};

export default Header;
