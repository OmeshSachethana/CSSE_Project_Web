import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/HomePage";
import SupplierList from "../components/Supplier/SupplierList";
import SupplierUpdateForm from "../components/Supplier/UpdateSupplier";
import SupplierForm from "../components/Supplier/CreateSupplier";
import Cart from "../components/cart/Cart";
import Products from "../components/Products";
import Approvals from "../components/Approval";


const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/suppliers" element={<SupplierList />} />
      <Route path="/suppliers/new" element={<SupplierForm />} />
      <Route path="/suppliers/update/:id" element={<SupplierUpdateForm />} />
      <Route path="/products" element={<Products />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/approvals" element={<Approvals />} />
    </Routes>
  );
};

export default PageRoutes;
