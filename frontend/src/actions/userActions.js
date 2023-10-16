import * as userService from '../services/userService';
import { loginUser as login, registerUser as register } from '../slices/userSlice';



export const loginUser = (userData) => async (dispatch) => {
  try {
    const user = await userService.loginUser(userData);
    dispatch(login(user));
  } catch (error) {
    console.error(error);
  }
};

export const registerUser = (userData) => async (dispatch) => {
  try {
    const user = await userService.registerUser(userData);
    dispatch(register(user));
  } catch (error) {
    console.error(error);
  }
};
