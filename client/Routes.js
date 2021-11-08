/* eslint-disable no-unused-vars */
import { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import { Login, Signup } from "./components/AuthForm";

import AllUsers from "./components/AllUsers";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Landing from "./components/Landing";
import Me from "./components/SingleUser";
import SingleProduct from "./components/SingleProduct";
import AllProducts from "./components/AllProducts";
import Cart from "./components/Cart";
import { me } from "./store/auth";
import AddProduct from "./components/AddProduct";
import Checkout from "./components/Checkout";
import ConfirmationPage from "./components/ConfirmationPage";

/**
 * COMPONENT
 */
function Routes() {
  //if the user is logged in then the auth is not null.
  let user = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  //this is where you have to dispatch the me thunk
  useEffect(() => {
    dispatch(me());
  }, []);

  return (
    <div>
      {user && user.id ? (
        user.isAdmin ? (
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/me" component={Me} />
            <Route exact path="/products" component={AllProducts} />
            <Route path="/products/:id" component={SingleProduct} />
            <Route path="/cart" component={Cart} />
            <Route path="/addProduct" component={AddProduct} />
            <Route path="/users" component={AllUsers} />
            <Redirect to="/" />
          </Switch>
        ) : (
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/me" component={Me} />
            <Route exact path="/products" component={AllProducts} />
            <Route path="/products/:id" component={SingleProduct} />
            <Route path="/cart" component={Cart} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/confirmation" component={ConfirmationPage} />
            <Route path="/addProduct" component={AddProduct} />
            <Redirect to="/" />
          </Switch>
        )
      ) : (
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route exact path="/products" component={AllProducts} />
          <Route path="/products/:id" component={SingleProduct} />
          <Route path="/cart" component={Cart} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/confirmation" component={ConfirmationPage} />
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
