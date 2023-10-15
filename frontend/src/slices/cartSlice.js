import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const productIndex = state.products.findIndex(
        (p) => p.name === product.name
      );

      if (productIndex >= 0) {
        // If product is already in cart, increment quantity
        state.products[productIndex].quantity += 1;
      } else {
        // If product is not in cart, add it
        state.products.push({ ...product, quantity: 1 });
      }
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
  addToCart,
} = cartSlice.actions;

export default cartSlice.reducer;
