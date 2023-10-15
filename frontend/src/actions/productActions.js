import { setProducts, setSelectedProduct } from "../slices/productSlice";

import * as productService from "../services/productService";

export const fetchProducts = () => async (dispatch) => {
  const products = await productService.getAllProducts();
  dispatch(setProducts(products));
};

export const fetchProductById = (id) => async (dispatch) => {
  try {
    const product = await productService.getProductById(id);
    dispatch(setSelectedProduct(product));
  } catch (error) {
    console.error(error);
  }
};
