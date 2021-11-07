import axios from 'axios';
//Action Types
const CART_REQUEST = 'CART_REQUEST';
const ADD_PRODUCT = 'ADD_PRODUCT';
const DELETE_PRODUCT = 'DELETE_PRODUCT';
const SET_CHECKOUT_ITEMS = 'SET_CHECKOUT_ITEMS';

export const setCart = (cart) => ({
  type: CART_REQUEST,
  cart,
});

export const setCheckoutItems = (items) => {
  type: SET_CHECKOUT_ITEMS, items;
};

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

export const fetchCheckoutItems = (userId, items) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(`/api/cart/${userId}/checkout`, {
        items,
      });
      console.log('THE DATA!!!! --->', response.data);
    } catch (err) {
      console.log(err);
    }
  };
};

export const addProduct = (userId, productId, qty) => {
  return async (dispatch) => {
    const TOKEN = 'token';
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
    const TOKEN = 'token';
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
    // case SET_GUEST_CART:
    //   return action.cart;
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
