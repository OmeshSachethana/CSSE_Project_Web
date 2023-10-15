import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { RiDeleteBin2Line, RiPencilLine, RiAddLine } from 'react-icons/ri';

import { fetchProducts, deleteExistingProduct } from '../../actions/productActions';

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteExistingProduct(id))
      .then(() => {
        console.log(`Product with ID: ${id} Deleted Successfully`);
        // Redirect or show a success message
      })
      .catch((error) => {
        console.error('Error deleting product:', error);
      });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow mt-8 max-w-screen-xl mx-auto px-6">
        <h1 className="text-3xl font-bold mb-4">Product List</h1>
        <Link to="/products/new">
          <button className="bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-full">
            <RiAddLine size={20} className="inline-block -ml-2 mr-2" />
            Create Product
          </button>
        </Link>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md p-4">
              <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover" />
              <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
              <p className="text-gray-500">{product.type}</p>
              <p className="text-blue-600 font-semibold text-lg mt-2">${product.price.toFixed(2)}</p>
              <p className="mt-2">{product.description}</p>
              <div className="mt-4 flex justify-between items-center">
                <Link to={`/products/update/${product.id}`}>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-1 px-2 rounded">
                    <RiPencilLine size={18} className="inline-block -ml-1 mr-2" />
                    Update
                  </button>
                </Link>
                <button
                  onClick={() => handleDelete(product.id)}
                  className="bg-red-500 hover:bg-red-700 text-white font-semibold py-1 px-2 rounded">
                    <RiDeleteBin2Line size={18} className="inline-block -ml-1 mr-2" />
                    Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductList;
