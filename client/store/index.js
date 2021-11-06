import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import auth from "./auth";

import { singleProductReducer, productsReducer } from "./productsReducer";

import { cartReducer } from "./cartReducer";

import {usersReducer} from "./usersReducer";

const reducer = combineReducers({
  auth: auth,
  users: usersReducer,
  allProducts: productsReducer,
  singleProduct: singleProductReducer,
  thisCart: cartReducer,
});

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware)
);
const store = createStore(reducer, middleware);

export default store;
export * from "./auth";
