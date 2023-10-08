import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/HomePage';
import SupplierList from '../components/Supplier/SupplierList';
import SupplierForm from '../components/Supplier/AddSupplier';
import SupplierUpdateForm from '../components/Supplier/UpdateSupplier';

const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/suppliers" element={<SupplierList />} />
      <Route path="/suppliers/new" element={<SupplierForm />} />
      <Route path="/suppliers/update/:id" element={<SupplierUpdateForm />} />

    </Routes>
  );
}

export default PageRoutes;
