// src/components/SupplierList.jsx

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSuppliers } from '../actions/supplierActions';

const SupplierList = () => {
  const dispatch = useDispatch();
  const suppliers = useSelector((state) => state.supplier.suppliers);

  useEffect(() => {
    dispatch(fetchSuppliers());
  }, [dispatch]);

  return (
    <div>
      <h1>Supplier List</h1>
      <ul>
        {suppliers.map((supplier) => (
          <li key={supplier.id}>{supplier.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SupplierList;
