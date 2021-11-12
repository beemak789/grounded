import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../store/usersReducer';

const MemberLandingPage = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <>
      {user && (
        <div className='user-welcome-text'>Hello there, {user.username}!</div>
      )}
      <div className='user-landing-container'>
        <img
          className='user-coffee-img'
          src='https://images.pexels.com/photos/6347/coffee-cup-working-happy.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        />
      </div>
    </>
  );
};

export default MemberLandingPage;

// https://pontevecchiosrl.it/wp-content/uploads/2020/08/profili-instagram-se-ami-il-caffe-2.jpg

// https://images.pexels.com/photos/6347/coffee-cup-working-happy.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2
