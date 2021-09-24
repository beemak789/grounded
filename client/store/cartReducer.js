import axios from "axios";

//Action Types

const CART_REQUEST = "CART_REQUEST";
const ADD_PRODUCT = "ADD_PRODUCT";

//Action Creator

const setCart = (cart) => ({
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
    const { data } = await axios.get(`/api/cart/${id}`);
    dispatch(setCart(data[0]));
  };
};

export const addProduct = (userId, product) => {
  return async (dispatch) => {
    const { data } = await axios.post(`/api/cart/:userId`);
    dispatch(setProduct(data));
  };
};

//reducer
export const cartReducer = (state = {}, action) => {
  switch (action.type) {
    case CART_REQUEST:
      return action.cart;
    case ADD_PRODUCT: {
      //filter and return w new product obj
      let products = state.products;
      let newArray = products.filter((item) => item.id !== action.product.id);
      newArray.push(action.product);
      return { ...state, products: newArray };
    }
    default:
      return state;
  }
};
