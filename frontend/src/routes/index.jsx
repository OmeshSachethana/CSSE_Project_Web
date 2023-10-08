import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/HomePage';
import SupplierList from '../components/SupplierList';

const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/suppliers" element={<SupplierList />} />
    </Routes>
  );
}

export default PageRoutes;
