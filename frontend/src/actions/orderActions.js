import { clearCart } from "../slices/cartSlice";
import { setOrders, setSelectedOrder } from "../slices/orderSlice";

import * as orderService from "../services/orderService";

export const createNewOrder = (orderData) => async (dispatch) => {
  const newOrderId = await orderService.createOrder(orderData);
  dispatch(clearCart());
  return newOrderId;
};

export const fetchOrders = () => async (dispatch) => {
  const orders = await orderService.getAllOrders();
  dispatch(setOrders(orders));
};

export const fetchOrderById = (id) => async (dispatch) => {
  try {
    const order = await orderService.getOrderById(id);
    dispatch(setSelectedOrder(order));
  } catch (error) {
    console.error(error);
  }
};

export const updateExistingOrder = (id, newData) => async (dispatch) => {
  await orderService.updateOrder(id, newData);
  dispatch(fetchOrders()); // Refresh the list after updating a supplier
};
