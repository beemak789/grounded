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

export const deleteProduct = (productId) => async (dispatch) => {
	const TOKEN = 'token';
	const token = window.localStorage.getItem(TOKEN);
	try {
		if (token) {
			await axios.delete(`/api/products/${productId}`, {
				headers: {
					authorization: token,
				},
			});
			dispatch(fetchProducts());
		}
	} catch (err) {
		console.log('error in delete product thunk');
	}
};

export const addNewProduct = (product) => async (dispatch) => {
	const TOKEN = 'token';
	const token = window.localStorage.getItem(TOKEN);
	console.log('token ->', token);
	try {
		if (token) {
			await axios.post('/api/products/', product, {
				headers: {
					authorization: token,
				},
			});
			dispatch(fetchProducts());
		}
	} catch (err) {
		console.log('error in add product thunk');
	}
};

//reducer
export function productsReducer(state = [], action) {
	switch (action.type) {
		case PRODUCTS_REQUEST:
			return action.products;
		default:
			return state;
	}
}

export const SINGLE_PRODUCT_REQUEST = 'SINGLE_PRODUCT_REQUEST';
const UPDATE_PRODUCT = 'UPDATE_PRODUCT';

const UPDATE_QTY_REQUEST = 'UPDATE_QTY_REQUEST';
export const setSingleProduct = (product) => {
	return {
		type: SINGLE_PRODUCT_REQUEST,
		product: product,
	};
};
export const updateQty = (qty) => {
	console.log("the qty in update--->", qty)
	return {
		type: UPDATE_QTY_REQUEST,
		qty,
	};
};

export const updateProduct = (product) => ({
	type: UPDATE_PRODUCT,
	product,
});

//Thunk - Fetching single product from axios
export const fetchSingleProduct = (id) => {
	return async (dispatch) => {
		try {
			const { data: product } = await axios.get(`/api/products/${id}`);
			const productWithQty = { ...product };
			dispatch(setSingleProduct(productWithQty));
		} catch (err) {
			console.log(err);
		}
	};
};


export const editProduct = (product) => {
	const TOKEN = 'token';
	const token = window.localStorage.getItem(TOKEN);
	try {
		if (token) {
			return async (dispatch) => {
				const { data: updated } = await axios.put(
					`/api/products/${product.id}`,
					product
				);
				dispatch(updateProduct(updated));
			};
		}
	} catch (err) {
		console.log('error in edit product thunk');
	}
};

export const singleProductReducer = (state = {}, action) => {
	switch (action.type) {
		case SINGLE_PRODUCT_REQUEST:
			return action.product;
		case UPDATE_QTY_REQUEST:
			return { ...state, qtyBags: action.qty || 1 };
		case UPDATE_PRODUCT:
			return state.id === action.product.id ? action.product : state;
		default:
			return state;
	}
};
