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
     <h1 id = "landing-text">grounded</h1>
     <img className="home-image" src="https://blue-bottle-cms.global.ssl.fastly.net/hbhhv9rz9/image/upload/v1632873419/guqrxpyvr0lscp4jdlor.jpg"></img>
    </div>
  );
}

/**
 * CONTAINER
 */

export default Landing;
