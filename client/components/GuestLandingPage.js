import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const GuestLandingPage = () => {
  return (
    <div className='landing-container'>
      <p id='landing-text'>
        Explore the wonderful world of <span id='coffee-span'>coffee</span> with
        us
      </p>
      <img
        className='home-image'
        src='https://blue-bottle-cms.global.ssl.fastly.net/hbhhv9rz9/image/upload/v1632873419/guqrxpyvr0lscp4jdlor.jpg'
      ></img>
      <div className='landing-page-buttons'>
        <Link to='/products' style={{textDecoration: "none"}}>
          <button className='shop-now-button' >Get Started</button>{' '}
        </Link>
        <Link to='/login' style={{textDecoration: "none"}}>
          <button className='member-login'>A Member? Log In</button>
        </Link>
      </div>
    </div>
  );
};

export default GuestLandingPage;


// https://blue-bottle-cms.global.ssl.fastly.net/hbhhv9rz9/image/upload/v1632873419/guqrxpyvr0lscp4jdlor.jpg
