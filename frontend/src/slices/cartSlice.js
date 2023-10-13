import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      image: "https://via.placeholder.com/200x150",
      name: "PRODUCT ITEM NUMBER 1",
      description: "Description for product item number 1",
      price: 5.99,
      quantity: 2,
    },
    {
      image: "https://via.placeholder.com/200x150",
      name: "PRODUCT ITEM NUMBER 2",
      description: "Description for product item number 1",
      price: 9.99,
      quantity: 1,
    },
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },

    changeProductQuantity: (state, action) => {
      const { index, quantity } = action.payload;
      state.products[index].quantity = quantity;
    },

    removeProduct(state, action) {
      const index = action.payload;
      state.products = state.products.filter((_, i) => i !== index);
    },

    clearCart(state) {
      state.products = [];
    },
  },
});

export const {
  setProducts,
  changeProductQuantity,
  removeProduct,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
