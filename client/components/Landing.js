import React from 'react';
import { useSelector } from 'react-redux';
import Home from './Home';

/**
 * COMPONENT
 */

function Landing() {
  const user = useSelector((state) => state.auth);

  return (
    <div className='landing-container'>
      {user && user.id ? <Home /> : null}
      <h1 id='landing-text'>grounded</h1>
      <img
        className='home-image'
        src='https://blue-bottle-cms.global.ssl.fastly.net/hbhhv9rz9/image/upload/v1632873419/guqrxpyvr0lscp4jdlor.jpg'
      ></img>
    </div>
  );
}

/**
 * CONTAINER
 */

export default Landing;
