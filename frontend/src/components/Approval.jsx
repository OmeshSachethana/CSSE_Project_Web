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
    <div className="container mx-auto p-4 bg-gray-100">
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-900">Order Approvals</h1>
      {orders
        .filter(order => order.approveStatus === 'pending')
        .map(order => (
          <div key={order.id} className="bg-white p-6 mb-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-center text-blue-900">Order ID: {order.id}</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border bg-blue-100 text-blue-900">Name</th>
                    <th className="py-2 px-4 border bg-blue-100 text-center text-blue-900">Price</th>
                    <th className="py-2 px-4 border bg-blue-100 text-center text-blue-900">Quantity</th>
                    <th className="py-2 px-4 border bg-blue-100 text-center text-blue-900">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {order.products.map(product => (
                    <tr key={product.id}>
                      <td className="py-2 px-4 border">{product.name}</td>
                      <td className="py-2 px-4 border text-center">{product.price}</td>
                      <td className="py-2 px-4 border text-center">{product.quantity}</td>
                      <td className="py-2 px-4 border text-center">{product.price * product.quantity}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan="3" className="py-2 px-4 border text-right font-bold">Total Price:</td>
                    <td className="py-2 px-4 border font-bold">{order.products.reduce((total, product) => total + (product.price * product.quantity), 0)}</td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <div className="flex justify-end mt-4">
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2" onClick={() => handleApprove(order.id)}>Approve</button>
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleDeny(order.id)}>Deny</button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Approvals;
