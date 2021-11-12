import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../store/usersReducer';

/**
 * COMPONENT
 */
const Home = () => {
  const user = useSelector((state) => state.auth);
  console.log("THE USER IN HOME--->", user)

  const dispatch = useDispatch();

  useEffect(() => {

      console.log("INSIDE USE EFFECT--->", user)
      dispatch(fetchUser(user));

  }, [user]);


  if (user) {
    return (
      <div className='user-welcome'>
        Hey, Welcome, {user.username}!
      </div>
    );
  }



};

export default Home;
