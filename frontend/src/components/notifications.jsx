import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchOrders,
  updateExistingOrder,
  fetchOrderById,
} from "../actions/orderActions";
import Modal from "react-modal"; // You need to install this package
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const NotificationBell = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const { id } = useParams();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const notificationRef = useRef(null);

  const dispatch = useDispatch();
  const orders = useSelector((state) => state.order.orders);
  const selectedOrder = useSelector((state) => state.order.selectedOrder);

  const handleOrderUpdate = () => {
    const updatedOrder = { ...selectedOrder, approveStatus: "completed" };
    dispatch(updateExistingOrder(selectedOrder.id, updatedOrder))
      .then(() => {
        console.log(`Order updated with ID: ${selectedOrder.id}`);
      })
      .catch((error) => {
        console.error("Error updating order:", error);
      });
  };

  useEffect(() => {
    dispatch(fetchOrders());
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dispatch]);

  useEffect(() => {
    if (id) {
      dispatch(fetchOrderById(id));
    }
  }, [dispatch, id]);

  const handleClickOutside = (event) => {
    if (
      notificationRef.current &&
      !notificationRef.current.contains(event.target)
    ) {
      setShowNotifications(false);
    }
  };

  const handleClick = () => {
    setShowNotifications(!showNotifications);
  };

  const handleViewClick = (orderId) => {
    console.log(orderId);
    dispatch(fetchOrderById(orderId));
    setModalIsOpen(true);
    setShowNotifications(false);
  };

  // Function to refresh orders
  const refreshOrders = () => {
    dispatch(fetchOrders());
  };

  const approvedOrders = orders.filter(
    (order) => order.approveStatus === "approved"
  );

  const lastCheck = localStorage.getItem("lastCheck") || Date.now();

  const newOrdersCount = orders.filter(
    (order) => new Date(order.date) > new Date(lastCheck)
  ).length;

  return (
    <div className="relative" ref={notificationRef}>
      <a
        href="#"
        role="img"
        aria-label="bell"
        className="text-white hover:text-blue-500 relative"
        onClick={handleClick}
      >
        🔔
        {newOrdersCount > 0 && (
          <span
            style={{
              position: "absolute",
              top: "-10px",
              right: "-10px",
              padding: "5px 10px",
              borderRadius: "50%",
              color: "white",
              backgroundColor: "red",
            }}
          >
            {newOrdersCount}
          </span>
        )}
      </a>
      {showNotifications && (
        <div className="absolute right-[-40px] top-full mt-2 bg-white p-4 rounded shadow-lg w-80 overflow-auto z-50">
          <div className="flex justify-end">
            <button
              onClick={refreshOrders}
              style={{ border: "none", background: "none" }}
            >
              <span role="img" aria-label="refresh">
                🔄
              </span>
            </button>
          </div>
          {approvedOrders.length > 0 ? (
            approvedOrders.map((order) => (
              <tr key={order.id}>
                <td className="py-2 px-4 border-b">
                  Your order as at{" "}
                  {new Date(order.date).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "2-digit",
                  })}{" "}
                  is {order.approveStatus} for payment
                  <a
                    href="#"
                    className="text-blue-500 ml-2"
                    onClick={() => handleViewClick(order.id)}
                  >
                    View
                  </a>
                </td>
              </tr>
            ))
          ) : (
            <p>No new notifications</p>
          )}
        </div>
      )}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          content: {
            width: "50%", // Adjust this value as needed
            margin: "0 auto", // This centers the modal horizontally
          },
        }}
      >
        <h2>Order Details</h2>
        <p>
          <strong>Order ID:</strong> {selectedOrder?.id}
        </p>
        <p>
          <strong>Approval Status:</strong> {selectedOrder?.approveStatus}
        </p>
        <p>
          <strong>Date:</strong>{" "}
          {new Date(selectedOrder?.date).toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "2-digit",
            year: "2-digit",
          })}
        </p>
        <h3>Products:</h3>
        {selectedOrder &&
          selectedOrder.products &&
          selectedOrder.products.map((product, index) => (
            <div key={index} style={{ display: "flex", marginBottom: "10px" }}>
              <img
                src={product.image}
                alt={product.name}
                style={{ marginRight: "10px" }}
              />
              <div>
                <h4>{product.name}</h4>
                <p>{product.description}</p>
                <p>
                  <strong>Price:</strong> $
                  {product.price ? product.price.toFixed(2) : 0}
                </p>
                <p>
                  <strong>Quantity:</strong> {product.quantity}
                </p>
              </div>
            </div>
          ))}
        <p>
          <strong>Total Price:</strong> $
          {selectedOrder?.totalPrice ? selectedOrder.totalPrice.toFixed(2) : 0}
        </p>
        <div onClick={(e) => e.stopPropagation()}>
          <PayPalButtons
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: selectedOrder?.totalPrice.toFixed(2), // Use the total price of the order here
                    },
                  },
                ],
              });
            }}
            onApprove={(data, actions) => {
              return actions.order.capture().then((details) => {
                // Close the modal
                setModalIsOpen(false);

                // Call your server to update the order status in the database
                handleOrderUpdate();

                // Close PayPal window
                actions.order.close();

                // Log the transaction completion message
                console.log(
                  "Transaction completed by " + details.payer.name.given_name
                );

                // OPTIONAL: Call your server to save the transaction
                return fetch("/paypal-transaction-complete", {
                  method: "post",
                  body: JSON.stringify({
                    orderID: data.orderID,
                  }),
                });
              });
            }}
          />
        </div>
      </Modal>
    </div>
  );
};

export default NotificationBell;
