import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const MemberLandingPage = () => {
  const user = useSelector((state) => state.auth);
  if (user) {
    return <div className='user-welcome'>Hey! Welcome, {user.username}!
      THIS IS GUEST LANDING PAGE
    </div>;

  }
};

export default MemberLandingPage;
