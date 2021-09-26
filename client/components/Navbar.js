import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store/auth";

const Navbar = () => {
  const isLoggedIn = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(logout())
  };

  return (
    <div>
      <nav>
        {isLoggedIn ? (
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
