// src/slices/supplierSlice.js

import { createSlice } from '@reduxjs/toolkit';

const supplierSlice = createSlice({
  name: 'supplier',
  initialState: {
    suppliers: [],
    selectedSupplier: null,
  },
  reducers: {
    setSuppliers: (state, action) => {
      state.suppliers = action.payload;
    },
    setSelectedSupplier: (state, action) => {
      state.selectedSupplier = action.payload;
    },
  },
});

export const { setSuppliers, setSelectedSupplier } = supplierSlice.actions;

export default supplierSlice.reducer;
