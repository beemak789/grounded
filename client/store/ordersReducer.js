import axios from 'axios';

const SET_USER_ORDERS = 'SET_USER_ORDERS';

export const setUserOrders = (cartOrders) => ({
  type: SET_USER_ORDERS,
  cartOrders,
});

export const fetchOrderHistory = (cartOrders) => {
  return async (dispatch) => {
    const TOKEN = 'token';
    const token = window.localStorage.getItem(TOKEN);
    try {
      if (token) {
        const { data: orders } = await axios.get('/api/cart/checkout/orders', {
          headers: {
            authorization: token,
          },
        });

        dispatch(setUserOrders(orders));
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const ordersReducer = (state = [], action) => {
  switch (action.type) {
    case SET_USER_ORDERS:
      return action.cartOrders;
    default:
      return state;
  }
};
