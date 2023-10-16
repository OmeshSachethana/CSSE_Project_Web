import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FaCartPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../actions/productActions";
import { addToCart } from "../slices/cartSlice";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-wrap justify-center p-4 bg-gray-100">
        {products.map((product, index) => (
          <div
            key={index}
            className="flex flex-col items-center m-2 bg-white rounded shadow-lg p-4"
          >
            <h3 className="text-xl font-bold mb-2">{product.name}</h3>
            <p className="text-sm text-gray-500 mb-2">{product.type}</p>
            <p className="text-base mb-2">{product.description}</p>
            <p className="text-lg font-semibold mb-4">${product.price}</p>
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-32 h-32 object-cover mb-4"
            />
            <button
              className="flex items-center justify-center px-0 py-2 bg-gray-400 text-white rounded-full hover:bg-gray-600"
              onClick={() => handleAddToCart(product)}
            >
              <FaCartPlus className="ml-2 mr-2" />
            </button>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Products;
