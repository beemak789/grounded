import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import { FormatAlignJustify } from '@mui/icons-material';

const Profile = () => {
  const user = useSelector((state) => state.auth);
  console.log('the user in state-->', user);

  const [username, setUsername] = useState(user.username);
  const [userEmail, setUserEmail] = useState(user.email);
  const [name, setName] = useState(user.name);

  console.log('the username in local state--->', username);
  console.log('the email in local state--->', userEmail);
  console.log('the name in local state--->', name);
  // const [userData, setUserData] = useState({
  //   username: user.username || '',
  //   email: user.email || '',
  //   name: user.name || '',
  // });

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
                name={user.name}
                onChange={(event) =>
                  setName({ ...user, name: event.target.value })
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
                name={user.username}
                onChange={(event) =>
                  setUsername({ ...user, username: event.target.value })
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
                name={user.email}
                onChange={(event) =>
                  setUserEmail({ ...user, email: event.target.value })
                }
              />
            </div>
          </span>
        </label>
      </div>
      <div className="update-button">
      <Button
          style={{
            backgroundColor: '#EE3B3B',
            color: 'white',
            fontSize: '12px',
            width: "25%"
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
