import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { logout, me } from '../store/auth';


const Header = () => {
  const dispatch = useDispatch();
  let user = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(me);
  }, []);

  const handleClick = () => {
    dispatch(logout());
    // history.push("/");
  };

  return (
    <div className="navbar-wrapper">
      {/* <Navbar> */}
        {/* <Container> */}
          {user && user.id ? (
            <div id='nav-container'>
              <div className='nav-brand'>
                <Link to='/'>grounded</Link>
              </div>
              <div className='nav-links'>
                <Link to='/products'>All</Link>
                <Link to='/me'>Me</Link>
                <Link to='/cart'>Cart</Link>
                {user.isAdmin ? (
                  <>
                    <Link to='/users'>All Users</Link>
                  </>
                ) : (
                  <></>
                )}
                <a href='#' onClick={handleClick}>
                  Logout
                </a>
              </div>
            </div>
          ) : (
            <div id='nav-container'>
              <div className='nav-brand'>
                <Link to='/'>Grounded</Link>
              </div>
              <div className='nav-links'>
                <Link className='navigation' to='/products'>Shop Coffee</Link>
                <Link className='navigation' to='/login'>Login</Link>
                <Link className='navigation' to='/signup'>Sign Up</Link>
                <Link className='navigation' to='/cart'>Cart</Link>
              </div>
            </div>
          )}
        {/* </Container> */}
      {/* </Navbar> */}
      <hr />
    </div>
  );
};

export default Header;
