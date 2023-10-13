import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';

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
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow mt-8 max-w-3xl mx-auto py-6">
        <h1 className="text-2xl font-bold mb-4">Supplier List</h1>
        <Link to="/suppliers/new">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Create Supplier
          </button>
        </Link>
        <div className="mt-4 overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Name</th>
                <th className="py-2 px-4 border-b">Contact Name</th>
                <th className="py-2 px-4 border-b">Telephone</th>
                <th className="py-2 px-4 border-b">Email</th>
                <th className="py-2 px-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {suppliers.map((supplier) => (
                <tr key={supplier.id}>
                  <td className="py-2 px-4 border-b">{supplier.name}</td>
                  <td className="py-2 px-4 border-b">{supplier.contactName}</td>
                  <td className="py-2 px-4 border-b">{supplier.telephone}</td>
                  <td className="py-2 px-4 border-b">{supplier.email}</td>
                  <td className="py-2 px-4 border-b">
                    <Link to={`/suppliers/update/${supplier.id}`}>
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2">
                        Update
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDelete(supplier.id)}
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SupplierList;
