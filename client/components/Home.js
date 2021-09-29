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
        <h3>Welcome, {user.username}</h3>
      </div>
    );
  }

  return <></>;

};

export default Home;
