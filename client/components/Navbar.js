import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { logout, me } from "../store/auth";

const Navbar = () => {
  const dispatch = useDispatch();
  let user = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(me);
  }, []);
  // let history = useHistory();
  const handleClick = () => {
    dispatch(logout());
    // history.push("/");
  };

  return (
    <div>
      <nav>
        {user && user.id ? (
          <div id="nav-container-logged-in">
            <Link to="/">grounded</Link>
            <Link to="/products">All</Link>
            <Link to="/me">Me</Link>
            <Link to="/cart">Cart</Link>
            <a href="#" onClick={handleClick}>
              Logout
            </a>
          </div>
        ) : (
          <div id="nav-container-logged-out">
            <Link to="/">Grounded</Link>
            <Link to="/products">All</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
            <Link to="/cart">Cart</Link>
          </div>
        )}
      </nav>
      <hr />
    </div>
  );
};

export default Navbar;
