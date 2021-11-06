import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const MemberLandingPage = () => {
  const user = useSelector((state) => state.auth);
  if (user) {
    return (
    <>
    <div className='user-welcome-text'>Welcome, {user.username}!
      </div>
    <div className="user-landing-container">
      <img className="user-coffee-img" src="https://images.pexels.com/photos/6347/coffee-cup-working-happy.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
    </div>
  </>
  )
  }
};

export default MemberLandingPage;
