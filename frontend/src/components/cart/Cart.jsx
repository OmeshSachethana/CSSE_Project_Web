import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeProduct, changeProductQuantity } from "../../slices/cartSlice";
import { createNewOrder } from "../../actions/orderActions";
import "./cart.css";
import Navbar from "../Navbar";

function Header({ itemCount }) {
  return (
    <div>
      <Navbar />
      <div className="pt-10">
        <header className="container">
          <h1>Product Cart</h1>

          <ul className="breadcrumb">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/cart">Product Cart</a>
            </li>
          </ul>

          <span className="count">{itemCount} items in the bag</span>
        </header>
      </div>
    </div>
  );
}

function ProductList({ products, onChangeProductQuantity, onRemoveProduct }) {
  return (
    <section className="container">
      <ul className="products">
        {products.map((product, index) => {
          return (
            <li className="row" key={index}>
              <div className="col left">
                <div className="thumbnail">
                  <a href="#">
                    <img src={product.image} alt={product.name} />
                  </a>
                </div>
                <div className="detail">
                  <div className="name">
                    <a href="#">{product.name}</a>
                  </div>
                  <div className="description">{product.description}</div>
                  <div className="price">{formatCurrency(product.price)}</div>
                </div>
              </div>

              <div className="col right">
                <div className="quantity">
                  <input
                    type="text"
                    className="quantity"
                    step="1"
                    value={product.quantity}
                    onChange={(event) => onChangeProductQuantity(index, event)}
                  />
                </div>

                <div className="remove">
                  <svg
                    onClick={() => onRemoveProduct(index)}
                    version="1.1"
                    className="close"
                    x="0px"
                    y="0px"
                    viewBox="0 0 60 60"
                    enableBackground="new 0 0 60 60"
                  >
                    <polygon points="38.936,23.561 36.814,21.439 30.562,27.691 24.311,21.439 22.189,23.561 28.441,29.812 22.189,36.064 24.311,38.186 30.562,31.934 36.814,38.186 38.936,36.064 32.684,29.812" />
                  </svg>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function Summary({ subTotal, tax, dispatch, products }) {
  const total = subTotal + tax;

  const handleSubmit = (e) => {
    e.preventDefault();
    let orderData = {
      date: new Date(),
      products: products,
      totalPrice: total,
    };
    dispatch(createNewOrder(orderData))
      .then((newOrderId) => {
        console.log(`New order created with ID: ${newOrderId}`);
      })
      .catch((error) => {
        console.error("Error creating order:", error);
      });
  };

  return (
    <section className="container">
      <div className="summaryAlignment"></div>
      <div className="summary">
        <ul>
          <li>
            Subtotal <span>{formatCurrency(subTotal)}</span>
          </li>
          <li>
            Tax <span>{formatCurrency(tax)}</span>
          </li>
          <li className="total">
            Total <span>{formatCurrency(total)}</span>
          </li>
        </ul>
      </div>

      <div className="checkout">
        <button onClick={handleSubmit} type="button">
          Place Order
        </button>
      </div>
    </section>
  );
}

const TAX = 5;

export default function Cart() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.cart);

  const itemCount = products.reduce((quantity, product) => {
    return quantity + +product.quantity;
  }, 0);
  const subTotal = products.reduce((total, product) => {
    return total + product.price * +product.quantity;
  }, 0);

  const onChangeProductQuantity = (index, event) => {
    const value = event.target.value;
    const valueInt = parseInt(value);

    if (value === "" || (valueInt > 0 && valueInt < 100)) {
      dispatch(changeProductQuantity({ index, quantity: valueInt }));
    }
  };

  const onRemoveProduct = (i) => {
    dispatch(removeProduct(i));
  };

  return (
    <div>
      <Header itemCount={itemCount} />

      {products.length > 0 ? (
        <div>
          <ProductList
            products={products}
            onChangeProductQuantity={onChangeProductQuantity}
            onRemoveProduct={onRemoveProduct}
          />
          <Summary
            subTotal={subTotal}
            tax={TAX}
            dispatch={dispatch}
            products={products}
          />
        </div>
      ) : (
        <div className="empty-product">
          <h3>There are no products in your cart.</h3>
          <button>Shopping now</button>
        </div>
      )}
    </div>
  );
}

function formatCurrency(value) {
  return Number(value).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}
