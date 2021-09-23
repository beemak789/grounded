import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch, Redirect, Link} from "react-router-dom";


/**
 * COMPONENT
 */

function Landing() {
  const dispatch = useDispatch();

  return (
    <div className = "landing-container">
     <div id = "landing-text">grounded</div>
    </div>
  );
}

/**
 * CONTAINER
 */

export default Landing;
