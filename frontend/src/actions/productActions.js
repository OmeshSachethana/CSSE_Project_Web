import {
    setProducts,
    setSelectedProduct,
  } from '../slices/productSlice';
  
  import * as productService from '../services/productService';
  
  export const fetchProducts = () => async (dispatch) => {
    const products = await productService.getAllProducts();
    dispatch(setProducts(products));
  };
  
  export const fetchProductById = (id) => async (dispatch) => {
    try {
      const products = await productService.getProductById(id);
      dispatch(setSelectedProduct(products));
    } catch (error) {
      console.error(error);
    }
  };
  
  
  export const createNewProduct = (productData) => async (dispatch) => {
    const newProductId = await productService.createProduct(productData);
    dispatch(fetchProducts()); // Refreshing the list after creating new product
    return newProductId;
  };
  
  export const updateExistingProduct = (id, newData) => async (dispatch) => {
    await productService.updateProduct(id, newData);
    dispatch(fetchProducts()); // Refreshing the list after updating a product
  };
  
  export const deleteExistingProduct = (id) => async (dispatch) => {
    await productService.deleteProduct(id);
    console.log('Product with id: ', id , 'Deleted Successfully');
    dispatch(fetchProducts()); // Refreshing the list after deleting a product

  };
  