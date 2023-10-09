import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchSupplierById, updateExistingSupplier } from '../../actions/supplierActions';
import Navbar from '../Navbar';


const SupplierUpdateForm = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const selectedSupplier = useSelector((state) => state.supplier.selectedSupplier);
  const [formData, setFormData] = useState({
    name: '',
    contactName: '',
    telephone: '',
    email: '',
  });

  useEffect(() => {
    if (id) {
      dispatch(fetchSupplierById(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (selectedSupplier) {
      setFormData({
        name: selectedSupplier.name,
        contactName: selectedSupplier.contactName,
        telephone: selectedSupplier.telephone,
        email: selectedSupplier.email,
      });
    }
  }, [selectedSupplier]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateExistingSupplier(id, formData))
      .then(() => {
        console.log(`Supplier updated with ID: ${id}`);
        // Redirect or show success message
      })
      .catch((error) => {
        console.error('Error updating supplier:', error);
      });
  };

  return (
    <>
    <Navbar />
    <br /> <br /> <br />
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="p-6">
          <h2 className="text-xl mb-2 font-semibold">Update Supplier</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Supplier Name"
                required
                className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <input
                type="text"
                name="contactName"
                value={formData.contactName}
                onChange={handleChange}
                placeholder="Contact Name"
                required
                className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <input
                type="text"
                name="telephone"
                value={formData.telephone}
                onChange={handleChange}
                placeholder="Telephone"
                required
                className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none"
            >
              Update Supplier
            </button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default SupplierUpdateForm;
