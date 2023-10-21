import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/HomePage";
import SupplierList from "../components/Supplier/SupplierList";
import SupplierUpdateForm from "../components/Supplier/UpdateSupplier";
import SupplierForm from "../components/Supplier/CreateSupplier";
import ProductList from "../components/Product/ProductList";
import ProductUpdateForm from "../components/Product/UpdateProduct";
import ProductForm from "../components/Product/CreateProduct";
import Cart from "../components/cart/Cart";
import Products from "../components/Products";
import Approvals from "../components/Approval";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";


const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/suppliers" element={<SupplierList />} />
      <Route path="/suppliers/new" element={<SupplierForm />} />
      <Route path="/suppliers/update/:id" element={<SupplierUpdateForm />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/products/new" element={<ProductForm />} />
      <Route path="/products/update/:id" element={<ProductUpdateForm />} />
      <Route path="/approvals" element={<Approvals />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Register />} />
    </Routes>
  );
};

export default PageRoutes;
