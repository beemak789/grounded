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


  const handleDemoSignin = () => {
    const fakeEvent = {
      preventDefault: () => null,
      target: {
        name: "login",
        username: { value: "Brandy"},
        password: { value: "apple"}
      }
    };
   handleSubmit(fakeEvent)
  }

  return (
    <div className='auth-form'>
    <div className="sign-in-card">
      <p className='sign-in-title'>{displayName}</p>
      <form onSubmit={handleSubmit} name={name}>
        <div className="input-container">
          <label htmlFor='username'>
            <small>Username</small>
          </label>
          <input className="input-field" name='username' type='text' />
        </div>
        <div className="input-container">
          <label htmlFor='password'>
            <small>Password</small>
          </label>
          <input className="input-field" name='password' type='password' />
        </div>
        <br />
        <div className="button3-wrapper">
          <button className='button3' type='submit'>
            {displayName}
          </button>
          <button className='button3' onClick={handleDemoSignin}>
            Demo Sign In
          </button>
        </div>
      </form>

      {displayName === 'Sign Up' ? (
        <div className='no-account-message'>
          <p>
            Already have an account?{' '}
            <Link
              to='/login'
              style={{ color: '#CD2626', textDecoration: 'none'}}
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
              <span style={{ color: '#CD2626', textDecoration: 'none'}}>
                Sign Up{' '}
              </span>
            </Link>
          </p>
        </div>
      )}
    </div>
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
      console.log(evt.target.username);
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
