// src/services/supplierService.js

import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000'; // Update with your backend URL

export const getAllSuppliers = async () => {
  const response = await axios.get(`${API_BASE_URL}/suppliers`);
  return response.data;
};

export const getSupplierById = async (id) => {
  const response = await axios.get(`${API_BASE_URL}/suppliers/${id}`);
  return response.data;
};

export const createSupplier = async (supplierData) => {
  const response = await axios.post(`${API_BASE_URL}/suppliers`, supplierData);
  return response.data;
};

export const updateSupplier = async (id, newData) => {
  const response = await axios.put(`${API_BASE_URL}/suppliers/${id}`, newData);
  return response.data;
};

export const deleteSupplier = async (id) => {
  const response = await axios.delete(`${API_BASE_URL}/suppliers/${id}`);
  return response.data;
};
