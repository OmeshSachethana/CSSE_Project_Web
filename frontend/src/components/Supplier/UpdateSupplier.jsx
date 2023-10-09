// SupplierUpdateForm.jsx

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchSupplierById, updateExistingSupplier } from '../../actions/supplierActions';

const SupplierUpdateForm = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log(id);
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
      <button type="submit">Update Supplier</button>
    </form>
  );
};

export default SupplierUpdateForm;
