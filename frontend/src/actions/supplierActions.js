import {
    setSuppliers,
    setSelectedSupplier,
  } from '../slices/supplierSlice';
  
  import * as supplierService from '../services/supplierService';
  
  export const fetchSuppliers = () => async (dispatch) => {
    const suppliers = await supplierService.getAllSuppliers();
    dispatch(setSuppliers(suppliers));
  };
  
  export const fetchSupplierById = (id) => async (dispatch) => {
    try {
      const supplier = await supplierService.getSupplierById(id);
      dispatch(setSelectedSupplier(supplier));
    } catch (error) {
      console.error(error);
    }
  };
  
  
  export const createNewSupplier = (supplierData) => async (dispatch) => {
    const newSupplierId = await supplierService.createSupplier(supplierData);
    dispatch(fetchSuppliers()); // Refresh the list after creating a new supplier
    return newSupplierId;
  };
  
  export const updateExistingSupplier = (id, newData) => async (dispatch) => {
    await supplierService.updateSupplier(id, newData);
    dispatch(fetchSuppliers()); // Refresh the list after updating a supplier
  };
  
  export const deleteExistingSupplier = (id) => async (dispatch) => {
    await supplierService.deleteSupplier(id);
    console.log('Deleted supplier with id: ', id);
    dispatch(fetchSuppliers()); // Refresh the list after deleting a supplier

  };
  