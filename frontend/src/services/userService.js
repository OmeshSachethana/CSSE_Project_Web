// src/services/userService.js

import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000'; // Update with your backend URL

export const getAllUsers = async () => {
  const response = await axios.get(`${API_BASE_URL}/users`);
  return response.data;
};

export const getUserById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const createUser = async (userData) => {
  const response = await axios.post(`${API_BASE_URL}/users`, userData);
  return response.data;
};

export const updateUser = async (id, newData) => {
  const response = await axios.put(`${API_BASE_URL}/users/${id}`, newData);
  return response.data;
};

export const deleteUser = async (id) => {
  const response = await axios.delete(`${API_BASE_URL}/users/${id}`);
  console.log(response.data);
  return response.data;
};
