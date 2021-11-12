import axios from 'axios';
import history from '../history';
import { setUser } from './usersReducer';

const TOKEN = 'token';

/**
 * ACTION TYPES
 */
const SET_AUTH = 'SET_AUTH';

/**
 * ACTION CREATORS
 */
const setAuth = (auth) => ({ type: SET_AUTH, auth });

/**
 * THUNK CREATORS
 */
export const me = () => async (dispatch) => {
  const token = window.localStorage.getItem(TOKEN);
  if (token) {
    const { data } = await axios.get('/auth/me', {
      headers: {
        authorization: token,
      },
    });
    console.log("THE DATA IN ME THUNK--->", data)
    dispatch(
      setUser({
        email: data.email,
        name: data.name,
        username: data.username,
      })
    );
    return dispatch(setAuth(data));
  }
};

export const authenticate =
  (username, password, method) => async (dispatch) => {
    try {
      const res = await axios.post(`/auth/${method}`, { username, password });
      window.localStorage.setItem(TOKEN, res.data.token);
      dispatch(me());
    } catch (authError) {
      return dispatch(setAuth({ error: authError }));
    }
  };

export const logout = () => {
  window.localStorage.removeItem(TOKEN);
  history.push('/');
  return {
    type: SET_AUTH,
    auth: null,
  };
};

/**
 * REDUCER
 */
//the reducer here has to be null/set globally
export default function (state = null, action) {
  switch (action.type) {
    case SET_AUTH:
      return action.auth;
    default:
      return state;
  }
}
