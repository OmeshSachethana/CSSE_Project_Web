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
    const updatedOrder = orders.map(order =>
      order.id === orderId
        ? { ...order, products: order.products.map(product =>
            product.id === productId ? { ...product, approveStatus: 'approved' } : product
          )}
        : order
    );

    dispatch(updateExistingOrder(orderId, updatedOrder));
  };

  const handleDeny = (orderId, productId) => {
    const updatedOrder = orders.map(order =>
      order.id === orderId
        ? { ...order, products: order.products.map(product =>
            product.id === productId ? { ...product, approveStatus: 'denied' } : product
          )}
        : order
    );

    dispatch(updateExistingOrder(orderId, updatedOrder));
  };

  return (
    <div>
      <h1>Approvals</h1>
      {orders.map(order =>
        order.approveStatus === 'pending' &&
        order.products.map(product => (
          <div key={product.id}>
            <p>Name: {product.name}</p>
            <p>Price: {product.price}</p>
            <p>Quantity: {product.quantity}</p>
            <p>Total: {product.price * product.quantity}</p>
            <p>
              <button onClick={() => handleApprove(order.id, product.id)}>Approve</button>
              <button onClick={() => handleDeny(order.id, product.id)}>Deny</button>
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default Approvals;
