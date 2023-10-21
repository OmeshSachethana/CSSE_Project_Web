import React from "react";
import NotificationBell from "./notifications";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

const Navbar = () => {
  const products = useSelector((state) => state.cart.products);
  const itemsInCart = products.reduce(
    (total, product) => total + product.quantity,
    0
  );

  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <h1 className="text-white text-2xl font-semibold">C O N S T R O</h1>
      <ul className="flex space-x-8">
        <li>
          <a href="/" className="text-white hover:text-blue-500">
            Home
          </a>
        </li>
        <li>
          <a href="/approvals" className="text-white hover:text-blue-500">
            Site Manager
          </a>
        </li>
        <li>
          <a href="#" className="text-white hover:text-blue-500">
            Accountant
          </a>
        </li>
        <li>
          <a href="/suppliers" className="text-white hover:text-blue-500">
            Supplier
          </a>
        </li>
        <li>
          <a href="/products" className="text-white hover:text-blue-500">
            Products
          </a>
        </li>
        <li>
          <a href="#" className="text-white hover:text-blue-500">
            Manager
          </a>
        </li>
        <li className="relative">
          <a href="/cart" className="text-white hover:text-blue-500 text-2xl">
            <FaShoppingCart />
            {itemsInCart > 0 && (
              <span className="absolute top-[-4px] right-[-4px] inline-block bg-red-500 text-white text-xs px-1 rounded-full">
                {itemsInCart}
              </span>
            )}
          </a>
        </li>
        <ul className="flex space-x-8">
          <li>
            <NotificationBell />
          </li>
        </ul>
        <li>
          <a href="#" className="text-white hover:text-blue-500">
            Login
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
