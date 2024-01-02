import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000'; 

export const getAllProducts = async () => {
  const response = await axios.get(`${API_BASE_URL}/products`);
  return response.data;
};

export const getProductById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/products/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};


export const createProduct = async (productData) => {
  const response = await axios.post(`${API_BASE_URL}/products`, productData);
  return response.data;
};

export const updateProduct = async (id, newData) => {
  const response = await axios.put(`${API_BASE_URL}/products/${id}`, newData);
  return response.data;
};

export const deleteProduct = async (id) => {
  const response = await axios.delete(`${API_BASE_URL}/products/${id}`);
  console.log(response.data);
  return response.data;
};
