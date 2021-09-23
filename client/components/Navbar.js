import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store/auth";
import { connect } from "react-redux";

const Navbar = ({ handleClick, isLoggedIn }) => {
  return (
    <div>
      <nav>
        {isLoggedIn ? (
          <div id="nav-container-logged-in">
            <Link to="/">grounded</Link>
            <Link to="/products">All</Link>
            <Link to="/me">Me</Link>

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
          </div>
        )}
      </nav>
      <hr />
    </div>
  );
};

const mapState = (state) => {
  return {
    isLoggedIn: !!state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout());
    },
  };
};

export default connect(mapState, mapDispatch)(Navbar);
