// src/store.js

import { configureStore } from '@reduxjs/toolkit';
import supplierReducer from './slices/supplierSlice';

const store = configureStore({
  reducer: {
    supplier: supplierReducer,
  },
});

export default store;
