import axios from "axios";

//Action Types

const CART_REQUEST = "CART_REQUEST";

//Action Creator

const setCart = (cart) => ({
  type: CART_REQUEST,
  cart,
})

// Thunk

export const fetchCart = (id) => {
  return async (dispatch) => {
    const {data} = await axios.get(`/api/cart/${id}`)
    dispatch(setCart(data[0]))
  }
}

//reducer
export const cartReducer = (state = {}, action) =>{
  switch (action.type) {
    case CART_REQUEST:
      return action.cart;
      default:
        return state;
  }
}
