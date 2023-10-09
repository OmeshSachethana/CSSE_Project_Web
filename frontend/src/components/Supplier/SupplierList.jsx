// SupplierList.jsx

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import {fetchSuppliers, deleteExistingSupplier} from '../../actions/supplierActions';


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
    
    <div>
        
      <h1>Supplier List</h1>
      <Link to="/suppliers/new">
        <button>Create Supplier</button>
      </Link>
      <ul>
            {suppliers.map((supplier) => {
                console.log(supplier.id); // Add this line
                return (
                <li key={supplier.id}>
                    {supplier.name} - {supplier.contactName} - {supplier.telephone} - {supplier.email}{' '}
                    <Link to={`/suppliers/update/${supplier.id}`}>
                    <button>Update</button>
                    </Link>

                    &nbsp;&nbsp;&nbsp;
                    <button onClick={() => handleDelete(supplier.id)}>Delete</button>
                </li>
                );
            })}
        </ul>

    </div>
  );
};

export default SupplierList;
