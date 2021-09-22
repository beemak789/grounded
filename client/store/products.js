import axios from 'axios';

//ACTION TYPES:

const PRODUCTS_REQUEST = 'PRODUCTS_REQUEST';

//action creator
export const setProducts = (products) => ({
	type: PRODUCTS_REQUEST,
	products,
});

//thunk creator
export const fetchProducts = () => {
	return async (dispatch) => {
		const { data: products } = await axios.get('/api/products');
		dispatch(setProducts(products));
	};
};

//reducer
export default function productsReducer(state = [], action) {
	switch (action.type) {
		case PRODUCTS_REQUEST:
			return action.products;
		default:
			return state;
	}
}
