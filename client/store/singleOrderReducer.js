import axios from 'axios';

export const SET_SINGLE_USER_ORDER = 'SET_SINGLE_USER_ORDER';

export const setSingleOrder = (singleOrder) => ({
  type: SET_SINGLE_USER_ORDER,
  singleOrder,
});


export const fetchSingleOrder = (orderId) => {
  return async (dispatch) => {
    const TOKEN = 'token';
    const token = window.localStorage.getItem(TOKEN);
    try {
      if (token) {
        const { data: order } = await axios.get(
          `/api/cart/checkout/orders/${orderId}`,
          {
            headers: {
              authorization: token,
            },
          }
        );
          console.log("THUNK single order data--->", order)
        dispatch(setSingleOrder(order));
      }
    } catch (err) {
      console.log(err);
    }
  };
};


export const singleOrderReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_SINGLE_USER_ORDER:
      return action.singleOrder
    default:
      return state;
  }
};
