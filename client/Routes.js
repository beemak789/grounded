
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch, Redirect, Link} from "react-router-dom";
import { Login, Signup } from "./components/AuthForm";
import Home from "./components/Home";
import Landing from "./components/Landing";
import { me } from "./store";
import SingleProduct from "./components/SingleProduct";
import AllProducts from "./components/AllProducts"


/**
 * COMPONENT
 */

function Routes() {
  const isLoggedIn = useSelector((state) => !!state.auth.id);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(loadInitialData());
  // }, []);

  return (
    <div>
        {isLoggedIn ? (
          <Switch>
            <Route path="/home" component={Home} />
            <Redirect to="/home" />
            <Route path="/" exact component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/products" component={AllProducts} />
            <Route path="/products/:id" component={SingleProduct} />
          </Switch>
        ) : (
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route exact path="/products" component={AllProducts} />
            <Route path="/products/:id" component={SingleProduct} />
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
