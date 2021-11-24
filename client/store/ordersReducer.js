import axios from 'axios';

const SET_USER_ORDERS = 'SET_USER_ORDERS';
// const SET_SINGLE_USER_ORDER = 'SET_SINGLE_USER_ORDER';

export const setUserOrders = (cartOrders) => ({
  type: SET_USER_ORDERS,
  cartOrders,
});

// export const setSingleOrder = (singleOrder) => ({
//   type: SET_SINGLE_USER_ORDER,
//   singleOrder,
// });

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

// export const fetchSingleOrder = (orderId) => {
//   return async (dispatch) => {
//     const TOKEN = 'token';
//     const token = window.localStorage.getItem(TOKEN);
//     try {
//       if (token) {
//         const { data: order } = await axios.get(
//           `/api/cart/checkout/orders/${orderId}`,
//           {
//             headers: {
//               authorization: token,
//             },
//           }
//         );
//           console.log("THUNK single order data--->", order)
//         dispatch(setSingleOrder(order));
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   };
// };

export const ordersReducer = (state = [], action) => {
  switch (action.type) {
    case SET_USER_ORDERS:
      return action.cartOrders
    // case SET_SINGLE_USER_ORDER:
    //   return action.singleOrder
    default:
      return state;
  }
};
