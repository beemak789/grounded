import React from 'react';
import { connect } from 'react-redux';
import { authenticate } from '../store';
import { Link } from 'react-router-dom';

/**
 * COMPONENT
 */
const AuthForm = (props) => {
  const {
    name = '',
    displayName = '',
    handleSubmit = null,
    error = {},
  } = props;

  return (
    <div className='auth-form'>
      <p className='sign-in-title'>{displayName}</p>
      <form onSubmit={handleSubmit} name={name}>
        <div className='username-form'>
          <label htmlFor='username'>
            <small>Username</small>
          </label>
          <input name='username' type='text' />
        </div>
        <div>
          <label htmlFor='password'>
            <small>Password</small>
          </label>
          <input name='password' type='password' />
        </div>
        <br />
        <div>
          <button className='button3' type='submit'>
            {displayName}
          </button>
        </div>
      </form>
      <div className='no-password-message'>
        <p>Forgot Password?</p>
      </div>

      {displayName === 'Sign Up' ? (
        <div className='no-account-message'>
          <p>
            Already have an account?{' '}
            <Link
              to='/login'
              style={{ color: '#CD2626', textDecoration: 'none' }}
            >
              {' '}
              <span>Sign In </span>
            </Link>
          </p>
        </div>
      ) : (
        <div className='no-account-message'>
          <p>
            Don't have an account?{' '}
            <Link
              to='/signup'
              style={{ color: '#CD2626', textDecoration: 'none' }}
            >
              {' '}
              <span style={{ color: '#CD2626', textDecoration: 'none' }}>
                Sign Up{' '}
              </span>
            </Link>
          </p>
        </div>
      )}
    </div>
  );
};

const mapLogin = (state) => {
  return {
    name: 'login',
    displayName: 'Sign In',
  };
};

const mapSignup = (state) => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleSubmit(evt) {
      evt.preventDefault();
      const formName = evt.target.name;
      const username = evt.target.username.value;
      const password = evt.target.password.value;
      dispatch(authenticate(username, password, formName));
    },
  };
};

export const Login = connect(mapLogin, mapDispatch)(AuthForm);
export const Signup = connect(mapSignup, mapDispatch)(AuthForm);
