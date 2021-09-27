import { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import { Login, Signup } from "./components/AuthForm";

import AllUsers from "./components/AllUsers";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Home from "./components/Home";
import Landing from "./components/Landing";
import Me from "./components/SingleUser";
import SingleProduct from "./components/SingleProduct";
import AllProducts from "./components/AllProducts";
import Cart from "./components/Cart";
import { me } from "./store/auth";
import AddProduct from "./components/AddProduct";

/**
 * COMPONENT
 */
function Routes() {
  //if the user is logged in then the auth is not null.
  const isLoggedIn = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  //this is where you have to dispatch the me thunk
  useEffect(() => {
    dispatch(me());
  }, []);

  return (
    <div>
      <Route path="/" component={Home} />
      {isLoggedIn ? (
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/me" component={Me} />
          <Route exact path="/products" component={AllProducts} />
          <Route path="/products/:id" component={SingleProduct} />
          <Route path="/users" component={AllUsers} />
          <Route path="/cart" component={Cart} />
          <Route path="/addProduct" component={AddProduct} />
          <Redirect to="/" />
        </Switch>
      ) : (
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route exact path="/products" component={AllProducts} />
          <Route path="/products/:id" component={SingleProduct} />
          <Route path="/cart" component={Cart} />
        </Switch>
      )}
    </div>
  );
}

/**
 * CONTAINER
 */

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default Routes;
