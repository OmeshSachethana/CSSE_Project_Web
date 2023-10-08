// src/slices/supplierSlice.js

import { createSlice } from '@reduxjs/toolkit';

const supplierSlice = createSlice({
  name: 'supplier',
  initialState: {
    suppliers: [],
  },
  reducers: {
    setSuppliers: (state, action) => {
      state.suppliers = action.payload;
    },
  },
});

export const { setSuppliers } = supplierSlice.actions;
export default supplierSlice.reducer;
