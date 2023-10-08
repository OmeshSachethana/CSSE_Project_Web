// src/components/SupplierList.js

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSuppliers } from '../slices/supplierSlice';
import { getAllSuppliers } from '../services/supplierService';

const SupplierList = () => {
  const dispatch = useDispatch();
  const suppliers = useSelector((state) => state.supplier.suppliers);

  useEffect(() => {
    getAllSuppliers()
      .then((data) => dispatch(setSuppliers(data)))
      .catch((error) => console.error('Error:', error));
  }, [dispatch]);

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Suppliers</h1>
      <ul>
        {suppliers.map((supplier) => (
          <li key={supplier.id} className="mb-4">
            {/* ... your existing code */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SupplierList;
