import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchSuppliers, deleteExistingSupplier } from '../../actions/supplierActions';

const SupplierList = () => {
  const dispatch = useDispatch();
  const suppliers = useSelector((state) => state.supplier.suppliers);

  useEffect(() => {
    dispatch(fetchSuppliers());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteExistingSupplier(id))
      .then(() => {
        console.log(`Supplier deleted with ID: ${id}`);
        // Redirect or show success message
      })
      .catch((error) => {
        console.error('Error deleting supplier:', error);
      });
  };

  return (
    <div className="max-w-3xl mx-auto py-6">
      <h1 className="text-2xl font-bold mb-4">Supplier List</h1>
      <Link to="/suppliers/new">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Create Supplier
        </button>
      </Link>
      <ul className="mt-4">
        {suppliers.map((supplier) => {
          return (
            <li key={supplier.id} className="flex items-center justify-between mb-2">
              <div>
                <span className="font-semibold">{supplier.name}</span> - {supplier.contactName} - {supplier.telephone} - {supplier.email}{' '}
              </div>
              <div>
                <Link to={`/suppliers/update/${supplier.id}`}>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                    Update
                  </button>
                </Link>
                <button
                  onClick={() => handleDelete(supplier.id)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                  Delete
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SupplierList;
