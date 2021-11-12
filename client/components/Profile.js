import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import { updateUser } from '../store/usersReducer';

const Profile = () => {
  const user = useSelector((state) => state.auth);

  const [userData, setUserData] = useState({
    id: user.id,
    name: user.name,
    username: user.username,
    email: user.email,
  });

  const dispatch = useDispatch();

  return (
    <div className='profile-container'>
      <p>My Account</p>
      <div className='profile-fields'>
        <label className='label-divs'>
          Name{' '}
          <span>
            <div className='input-fields'>
              <input
                type='text'
                placeholder={user.name}
                name={userData.name}
                onChange={(event) =>
                  setUserData({ ...userData, name: event.target.value })
                }
              />
            </div>
          </span>
        </label>
        <label className='label-divs'>
          Username{' '}
          <span>
            <div className='input-fields'>
              <input
                type='text'
                placeholder={user.username}
                name={userData.username}
                onChange={(event) =>
                  setUserData({ ...userData, username: event.target.value })
                }
              />
            </div>
          </span>
        </label>

        <label className='label-divs'>
          Email{' '}
          <span>
            <div className='input-fields'>
              <input
                type='text'
                placeholder={user.email}
                name={userData.email}
                onChange={(event) =>
                  setUserData({ ...userData, email: event.target.value })
                }
              />
            </div>
          </span>
        </label>
      </div>
      <div className='update-button'>
        <Button
          onClick={() => {
            dispatch(updateUser(userData));
          }}
          style={{
            backgroundColor: '#EE3B3B',
            color: 'white',
            fontSize: '12px',
            width: '25%',
          }}
        >
          {' '}
          Update
        </Button>
      </div>
    </div>
  );
};

export default Profile;
