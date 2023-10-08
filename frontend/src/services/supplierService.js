// src/services/supplierService.js

const BASE_URL = 'http://localhost:3000'; // Replace with your actual backend URL

export const getAllSuppliers = async () => {
  const response = await fetch(`${BASE_URL}/suppliers`);
  const data = await response.json();
  return data;
};

export const getSupplierById = async (id) => {
  const response = await fetch(`${BASE_URL}/suppliers/${id}`);
  const data = await response.json();
  return data;
};

export const createSupplier = async (supplierData) => {
  const response = await fetch(`${BASE_URL}/suppliers`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(supplierData),
  });
  const data = await response.json();
  return data;
};

export const updateSupplier = async (id, newData) => {
  await fetch(`${BASE_URL}/suppliers/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newData),
  });
};

export const deleteSupplier = async (id) => {
  await fetch(`${BASE_URL}/suppliers/${id}`, {
    method: 'DELETE',
  });
};
