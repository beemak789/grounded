import React from 'react';
import { useSelector } from 'react-redux';
import Home from './Home';
import { Link } from 'react-router-dom';

function Landing() {
  const user = useSelector((state) => state.auth);

  return (
    <div className='landing-container'>
      {user && user.id ? <Home /> : null}
      <p id='landing-text'>
        Explore the wonderful world of <span id='coffee-span'>coffee</span> with
        us
      </p>
      <img
        className='home-image'
        src='https://blue-bottle-cms.global.ssl.fastly.net/hbhhv9rz9/image/upload/v1632873419/guqrxpyvr0lscp4jdlor.jpg'
      ></img>
      <Link to='/products'>
        <button className='shop-now-button'>Get Started</button>{' '}
      </Link>
      <Link to='/login'>
        <button className='member-login'>A Member? Log In</button>
      </Link>
    </div>
  );
}

export default Landing;

// https://blue-bottle-cms.global.ssl.fastly.net/hbhhv9rz9/image/upload/v1632873419/guqrxpyvr0lscp4jdlor.jpg
