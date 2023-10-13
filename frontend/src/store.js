import { configureStore, combineReducers, getDefaultMiddleware  } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import supplierReducer from "./slices/supplierSlice";
import cartSlice from "./slices/cartSlice";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  supplier: supplierReducer,
  cart: cartSlice,
});

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: customizedMiddleware,
});

export const persistor = persistStore(store);
