import axios from 'axios';
//Action Types
const CART_REQUEST = 'CART_REQUEST';
const ADD_PRODUCT = 'ADD_PRODUCT';
const DELETE_PRODUCT = 'DELETE_PRODUCT';
const SET_CHECKOUT_ITEMS = 'SET_CHECKOUT_ITEMS';
// const SET_USER_ORDERS = 'SET_USER_ORDERS';

export const setCart = (cart) => ({
  type: CART_REQUEST,
  cart,
});

export const setCheckoutItems = (items) => ({
  type: SET_CHECKOUT_ITEMS,
  items,
});

// export const setUserOrders = (cartOrders) => ({
//   type: SET_USER_ORDERS,
//   cartOrders
// });

//Do not pass userid into the routes - instead, verify by token

export const fetchCart = () => {
  return async (dispatch) => {
    const TOKEN = 'token';
    const token = window.localStorage.getItem(TOKEN);
    try {
      if (token) {
        const { data: userCart } = await axios.get('/api/cart', {
          headers: {
            authorization: token,
          },
        });
        dispatch(setCart(userCart));
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const checkoutCart = (items) => {
  return async (dispatch) => {
    const TOKEN = 'token';
    const token = window.localStorage.getItem(TOKEN);
    try {
      if (token) {
        const { data } = await axios.put(
          `/api/cart/checkout`,
          { items },
          {
            headers: {
              authorization: token,
            },
          }
        );
        //no new products so no need to put the items back into the cart*
        dispatch(setCart(data));
      }
    } catch (err) {
      console.log(err);
    }
  };
};

// export const fetchOrderHistory = (cartOrders) => {
//   return async (dispatch) => {
//     const TOKEN = 'token';
//     const token = window.localStorage.getItem(TOKEN);
//     try {
//       if (token) {
//         const { data: orders } = await axios.get('/api/cart/checkout/orders', {
//           headers: {
//             authorization: token,
//           },
//         });
//         console.log("the orders in the thunk--->", orders)
//         dispatch(setUserOrders(orders));
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   };
// };

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

export const deleteProduct = (productId) => {
  return async (dispatch) => {
    const TOKEN = 'token';
    const token = window.localStorage.getItem(TOKEN);
    try {
      if (token) {
        await axios.put(
          '/api/cart',
          { productId },
          {
            headers: {
              authorization: token,
            },
          }
        );
        dispatch(fetchCart());
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
    case SET_CHECKOUT_ITEMS:
      return {
        ...state,
        items: action.items,
      };
    case ADD_PRODUCT: {
      const products = state.products;
      const newArray = products.filter((item) => item.id !== action.product.id);
      newArray.push(action.product);
      return { ...state, products: newArray };
    }
    // case SET_USER_ORDERS:
    //   return {
    //     ...state,
    //     orders: action.orders, // this is an array
    //   };
    default:
      return state;
  }
};
