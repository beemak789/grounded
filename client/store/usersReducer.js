import axios from 'axios';

//ACTION TYPES:
const USERS_REQUEST = 'USERS_REQUEST';
const UPDATE_USER = 'UPDATE_USER';
//action creator
const setUsers = (users) => ({
  type: USERS_REQUEST,
  users,
});

const setUpdateUser = (user) => {
  return {
    type: UPDATE_USER,
    user,
  };
};

//thunk creator
export const fetchUsers = () => async (dispatch) => {
  const TOKEN = 'token';
  const token = window.localStorage.getItem(TOKEN);
  try {
    if (token) {
      const { data } = await axios.get('/api/users', {
        headers: {
          authorization: token,
        },
      });
      dispatch(setUsers(data));
    }
  } catch (err) {
    console.log('error in get users thunk');
  }
};

export const updateUser = (user) => {
  return async (dispatch) => {
    try {
			const { id } = user;
      const { data: updatedUser } = await axios.put(`/api/users/${id}`, user);
      dispatch(setUpdateUser(updatedUser));
    } catch (err) {
      console.log(err);
    }
  };
};

//reducer
export function usersReducer(state = [], action) {
  switch (action.type) {
    case USERS_REQUEST:
      return action.users;
    case UPDATE_USER:
      const updatedUser = state.id === action.user.id ? action.user : state;
      return updatedUser;
    default:
      return state;
  }
}
