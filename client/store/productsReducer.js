import axios from "axios";


//Function: Render/visualize single product on screen, upon clicking on a product
//from "All Products" page
export const SINGLE_PRODUCT_REQUEST = "SINGLE_PRODUCT_REQUEST"

export const setSingleProduct = (product) => {
  return {
    type: SINGLE_PRODUCT_REQUEST,
    product: product
  }
}

//Thunk - Fetching single product from axios
export const fetchSingleProduct = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/products/${id}`)
      dispatch(setSingleProduct(data))
    } catch (err) {
      console.log(err)
    }
  }
}

export const singleProductReducer = (state = {}, action) => {
  switch (action.type) {
    case SINGLE_PRODUCT_REQUEST:
      return action.product
  }
}
