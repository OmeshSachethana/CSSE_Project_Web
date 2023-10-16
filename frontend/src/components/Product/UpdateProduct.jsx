import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProductById, updateExistingProduct } from '../../actions/productActions';
import Navbar from '../Navbar';
import Footer from '../Footer';

const ProductUpdateForm = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const selectedProduct = useSelector((state) => state.product.selectedProduct);
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    price: '',
    description: '',
    imageUrl: '',
  });

  useEffect(() => {
    if (id) {
      dispatch(fetchProductById(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (selectedProduct) {
      setFormData({
        name: selectedProduct.name,
        type: selectedProduct.type,
        price: selectedProduct.price,
        description: selectedProduct.description,
        imageUrl: selectedProduct.imageUrl,
      });
    }
  }, [selectedProduct]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateExistingProduct(id, formData))
      .then(() => {
        console.log(`Product with ID: ${id} Updated Successfully`);
        // Redirect or show success message
      })
      .catch((error) => {
        console.error('Error updating product:', error);
      });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow mt-8">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-6">
          <h2 className="text-xl mb-2 font-semibold">Update Product Details</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Product Name"
                required
                className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <input
                type="text"
                name="type"
                value={formData.type}
                onChange={handleChange}
                placeholder="Product Type"
                required
                className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <input
                type="text"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="Price"
                required
                className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <input
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Description"
                required
                className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none"
            >
              Update Product
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductUpdateForm;
