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
    history.push("/");
  };

  return (
    <div className='navbar-wrapper'>
      <div id='nav-container'>
        <div className='nav-brand'>
          <Link to='/'>Grounded</Link>
        </div>
        <div className='nav-links'>
        {/* if user is admin, access to all users */}
          {user && user.isAdmin ? (
            <>
              <Link to='/users'>All Users</Link>
            </>
          ) : (
            <>
            {/* else, if just a  user, they can shop coffee and see own profile */}
              <Link className='navigation' to='/products'>
                Shop
              </Link>
              {user && user.id && <Link className='navigation' to='/me'>Profile</Link>}
            </>
          )}

          {/* guest */}
          {!user && (
            <>
              <Link className='navigation' to='/login'>
                Sign In
              </Link>
            </>
          )}

          <Link className='navigation' id="cart" to='/cart'>
            Cart   <i class="fa fa-shopping-cart"></i>
          </Link>

          {/* if person is a member, they can logout */}
          { user && (
            <Link className='navigation' to='/logout' onClick={handleClick}>
              Logout
            </Link>
          )}
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Header;
