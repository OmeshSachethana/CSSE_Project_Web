// src/actions/userActions.js


import { setUsers, setSelectedUser } from '../slices/userSlice';
import * as userService from '../services/userService';

export const fetchUsers = () => async (dispatch) => {
  const users = await userService.getAllUsers();
  dispatch(setUsers(users));
};

export const fetchUserById = (id) => async (dispatch) => {
  try {
    const user = await userService.getUserById(id);
    dispatch(setSelectedUser(user));
  } catch (error) {
    console.error(error);
  }
};

export const createNewUser = (userData) => async (dispatch) => {
  const newUserId = await userService.createUser(userData);
  dispatch(fetchUsers()); // Refresh the list after creating a new user
  return newUserId;
};

export const updateExistingUser = (id, newData) => async (dispatch) => {
  await userService.updateUser(id, newData);
  dispatch(fetchUsers()); // Refresh the list after updating a user
};

export const deleteExistingUser = (id) => async (dispatch) => {
  await userService.deleteUser(id);
  console.log('Deleted user with id: ', id);
  dispatch(fetchUsers()); // Refresh the list after deleting a user
};
