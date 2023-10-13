import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000';

export const createOrder = async (orderData) => {
  const response = await axios.post(`${API_BASE_URL}/orders`, orderData);
  return response.data;
};
