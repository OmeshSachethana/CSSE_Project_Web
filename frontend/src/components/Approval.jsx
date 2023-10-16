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

  const handleApprove = (orderId, productId) => {
    const updatedOrder = {
      ...orders.find(order => order.id === orderId),
      products: orders.find(order => order.id === orderId).products.map(product =>
        product.id === productId ? { ...product, approveStatus: 'approved' } : product
      )
    };

    dispatch(updateExistingOrder(orderId, updatedOrder));
  };

  const handleDeny = (orderId, productId) => {
    const updatedOrder = {
      ...orders.find(order => order.id === orderId),
      products: orders.find(order => order.id === orderId).products.map(product =>
        product.id === productId ? { ...product, approveStatus: 'denied' } : product
      )
    };

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
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {order.products.map(product => (
                  <tr key={product.id}>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.quantity}</td>
                    <td>{product.price * product.quantity}</td>
                    <td>
                      <button onClick={() => handleApprove(order.id, product.id)}>Approve</button>
                      <button onClick={() => handleDeny(order.id, product.id)}>Deny</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
    </div>
  );
};

export default Approvals;
