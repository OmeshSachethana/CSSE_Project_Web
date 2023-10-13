import { clearCart } from "../slices/cartSlice";

import * as orderService from "../services/orderService";

export const createNewOrder = (orderData) => async (dispatch) => {
  const newOrderId = await orderService.createOrder(orderData);
  dispatch(clearCart()); // Refresh the list after creating a new supplier
  return newOrderId;
};
