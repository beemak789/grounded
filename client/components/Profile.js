import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import { updateUser, fetchUser } from '../store/usersReducer';
import { useSnackbar } from 'notistack';

const Profile = () => {
  const user = useSelector((state) => state.auth);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const [userData, setUserData] = useState({
    id: user.id,
    name: user.name,
    username: user.username,
    email: user.email,
  });

  const dispatch = useDispatch();

  const updateHandler  = () => {
    dispatch(updateUser(userData));
    enqueueSnackbar('Your profile was updated.', {
      variant: 'success',
      autoHideDuration: 3000,
    });
  }

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
                value={userData.name}
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
                value={userData.username}
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
                value={userData.email}
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
          onClick={updateHandler}
          style={{
            backgroundColor: '#EE3B3B',
            color: 'white',
            fontSize: '12px',
            width: '25%',
            border: "none"
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
