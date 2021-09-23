import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store/auth";
import {connect} from 'react-redux';

const Navbar = ({handleClick, isLoggedIn}) => {
  // const isLoggedIn = useSelector((state) => !!state.auth.id);
  // const dispatch = useDispatch();
  // const handleClick = () =>  dispatch(logout);

  return (
    <div>
      <nav>
        {isLoggedIn ? (
          <div id="nav-container-logged-in">
            {/* The navbar will show these links after you log in */}
            <Link to="/">grounded</Link>
            <Link to="/products">All</Link>
            <Link to="/me">Me</Link>
          
            {/* <Link to="/home">Home</Link> */}
            <a href="#" onClick={handleClick}>
              Logout
            </a>
          </div>
        ) : (
          <div id="nav-container-logged-out">
            {/* The navbar will show these links before you log in */}
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

/**
 * CONTAINER
 */
 const mapState = state => {
  return {
    isLoggedIn: !!state.auth.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

// export default Navbar;
