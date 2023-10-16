// src/components/Approvals.js

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchOrders, updateExistingOrder } from '../actions/orderActions';

const Approvals = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.order.orders);

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  const handleApprove = (orderId) => {
    const updatedOrder = { ...orders.find(order => order.id === orderId), approveStatus: 'approved' };
    dispatch(updateExistingOrder(orderId, updatedOrder));
  };

  const handleDeny = (orderId) => {
    const updatedOrder = { ...orders.find(order => order.id === orderId), approveStatus: 'denied' };
    dispatch(updateExistingOrder(orderId, updatedOrder));
  };

  return (
    <div>
      <h1>Approvals</h1>
      {orders
        .filter(order => order.approveStatus === 'pending')
        .map(order => (
          <div key={order.id} className="border p-4 mb-4">
            <h2 className="text-xl font-bold mb-2">Order ID: {order.id}</h2>
            <table className="min-w-full">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {order.products.map(product => (
                  <tr key={product.id}>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.quantity}</td>
                    <td>{product.price * product.quantity}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan="3" className="text-right font-bold">Total Price:</td>
                  <td className="font-bold">{order.products.reduce((total, product) => total + (product.price * product.quantity), 0)}</td>
                </tr>
              </tfoot>
            </table>
            <div className="mt-4">
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleApprove(order.id)}>Approve</button>
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2" onClick={() => handleDeny(order.id)}>Deny</button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Approvals;
