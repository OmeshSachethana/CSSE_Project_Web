// SupplierForm.jsx

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createNewSupplier } from '../../actions/supplierActions';

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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Supplier Name"
        required
      />
      <input
        type="text"
        name="contactName"
        value={formData.contactName}
        onChange={handleChange}
        placeholder="Contact Name"
        required
      />
      <input
        type="text"
        name="telephone"
        value={formData.telephone}
        onChange={handleChange}
        placeholder="Telephone"
        required
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <button type="submit">Create Supplier</button>
    </form>
  );
};

export default SupplierForm;
