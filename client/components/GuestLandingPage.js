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
          <Button className='shop-now-button' style={{padding: "10px", fontSize: "13px", backgroundColor: "#DB2929", color: "white"}}>Get Started</Button>{' '}
        </Link>
        <Link to='/login' style={{textDecoration: "none", padding: "5px"}}>
          <Button className='member-login' style={{padding: "10px", fontSize: "13px", backgroundColor: "#DB2929", color: "white"}}>A Member? Log In</Button>
        </Link>
      </div>
    </div>
  );
};

export default GuestLandingPage;


// https://blue-bottle-cms.global.ssl.fastly.net/hbhhv9rz9/image/upload/v1632873419/guqrxpyvr0lscp4jdlor.jpg
