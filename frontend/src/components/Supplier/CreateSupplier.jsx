import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createNewSupplier } from '../../actions/supplierActions';
import Navbar from '../Navbar';

const SupplierForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    contactName: '',
    telephone: '',
    email: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createNewSupplier(formData))
      .then((newSupplierId) => {
        console.log(`New supplier created with ID: ${newSupplierId}`);
        // Reset form or redirect to another page
      })
      .catch((error) => {
        console.error('Error creating supplier:', error);
      });
  };

  return (
    <>
    <Navbar />
    <br /> <br /> <br />
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-m">

          <div className="md:flex">
              <div className="p-8">
                  <h2 className="text-xl mb-2 font-semibold">Create New Supplier</h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                          <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="Supplier Name"
                              required
                              className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500" />
                      </div>
                      <div>
                          <input
                              type="text"
                              name="contactName"
                              value={formData.contactName}
                              onChange={handleChange}
                              placeholder="Contact Name"
                              required
                              className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500" />
                      </div>
                      <div>
                          <input
                              type="text"
                              name="telephone"
                              value={formData.telephone}
                              onChange={handleChange}
                              placeholder="Telephone"
                              required
                              className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500" />
                      </div>
                      <div>
                          <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="Email"
                              required
                              className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500" />
                      </div>
                      <button
                          type="submit"
                          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none"
                      >
                          Create Supplier
                      </button>
                  </form>
              </div>
          </div>
      </div></>
  );
};

export default SupplierForm;