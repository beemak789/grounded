import React from 'react';
import { connect } from 'react-redux';
import { authenticate } from '../store';
import { Link } from 'react-router-dom'

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
      <p className='sign-in-title'>Sign In </p>
      <p className='sign-in-message'>
        Sign into your Grounded Coffee member account
      </p>

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
            {/* {displayName} */}
            SIGN IN
          </button>
        </div>
      </form>
      <div className="no-password-message">
        <p>
          Forgot Password?
        </p>
      </div>
      <div className="no-account-message">
        <p>
          Don't have an account? <Link to='/signup'> <span style={{color: "#CD2626"}}>Sign Up </span></Link>
        </p>
      </div>
    </div>
  );
};
/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = (state) => {
  return {
    name: 'login',
    displayName: 'Login',
    // error: state.auth.error
  };
};

const mapSignup = (state) => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    // error: state.auth.error
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
