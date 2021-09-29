import axios from "axios";
//Action Types
const CART_REQUEST = "CART_REQUEST";
const ADD_PRODUCT = "ADD_PRODUCT";
const DELETE_PRODUCT = "DELETE_PRODUCT";
//Action Creator


//This file cannot change or user cart cannot run******

export const setCart = (cart) => ({
  type: CART_REQUEST,
  cart,
});
const setProduct = (product) => ({
  type: ADD_PRODUCT,
  product,
});

// Thunk
export const fetchCart = (id) => {
  return async (dispatch) => {
    try {
      const { data: userCart } = await axios.get(`/api/cart/${id}`);
      //moves the through tables property into the actual product (from the products array)
      dispatch(setCart(userCart));
    } catch (err) {
      console.log(err);
    }
  };
};

export const addProduct = (userId, productId, qty) => {
  return async (dispatch) => {
    const TOKEN = "token";
    const token = window.localStorage.getItem(TOKEN);
    try {
      if (token) {
        const { data } = await axios.post(
          `/api/cart/${userId}`,
          { productId, quantity: qty },
          {
            headers: {
              authorization: token,
            },
          }
        );
      dispatch(setCart(data));
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const deleteProduct = (userId, productId) => {
  return async (dispatch) => {
    const TOKEN = "token";
    const token = window.localStorage.getItem(TOKEN);
    try {
      if (token) {
        await axios.put(
          `/api/cart/${userId}`,
          { productId },
          {
            headers: {
              authorization: token,
            },
          }
        );
        dispatch(fetchCart(userId));
      }
    } catch (err) {
      console.log(err);
    }
  };
};
//reducer
export const cartReducer = (state = {}, action) => {
  switch (action.type) {
    case CART_REQUEST:
      return action.cart;
    case ADD_PRODUCT: {
      const products = state.products;
      const newArray = products.filter((item) => item.id !== action.product.id);
      newArray.push(action.product);
      return { ...state, products: newArray };
    }
    default:
      return state;
  }
};
