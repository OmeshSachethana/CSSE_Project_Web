import axios from "axios";

const API_BASE_URL = "http://localhost:3000";

export const createOrder = async (orderData) => {
  const response = await axios.post(`${API_BASE_URL}/orders`, orderData);
  return response.data;
};

export const getAllOrders = async () => {
  const response = await axios.get(`${API_BASE_URL}/orders`);
  return response.data;
};

export const getOrderById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/orders/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const updateOrder = async (id, newData) => {
  const response = await axios.put(`${API_BASE_URL}/orders/${id}`, newData);
  return response.data;
};
