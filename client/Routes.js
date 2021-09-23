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
import AllProducts from "./components/AllProducts"
import Cart from "./components/Cart"


/**
 * COMPONENT
 */
function Routes() {
  const isLoggedIn = useSelector((state) => !!state.auth.id);
  const dispatch = useDispatch();

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
