import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

/**
 * COMPONENT
 */
const Home = () => {
  const user = useSelector((state) => state.auth);
  if (user) {
    return (
      <div className='user-welcome'>
        Hey, Welcome, {user.username}!
      </div>
    );
  }

  return <></>;

};

export default Home;
