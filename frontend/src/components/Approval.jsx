// src/components/Approvals.js

import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchOrders, updateExistingOrder } from '../actions/orderActions';

const Approvals = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.order.orders);

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  const handleApprove = (id) => {
    const updatedOrder = { ...orders.find(order => order.id === id), approveStatus: 'approved' };
    dispatch(updateExistingOrder(id, updatedOrder));
  };

  const handleDeny = (id) => {
    const updatedOrder = { ...orders.find(order => order.id === id), approveStatus: 'denied' };
    dispatch(updateExistingOrder(id, updatedOrder));
  };

  return (
    <div>
      <h1>Approvals</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders
            .filter(order => order.approveStatus === 'pending')
            .map(order => (
              <tr key={order.id}>
                <td>{order.products.name}</td>
                <td>{order.products.price}</td>
                <td>{order.products.quantity}</td>
                <td>{order.totalPrice}</td>
                <td>
                  <button onClick={() => handleApprove(order.id)}>Approve</button>
                  <button onClick={() => handleDeny(order.id)}>Deny</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Approvals;
