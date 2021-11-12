import axios from 'axios';

//ACTION TYPES:
const USER_REQUEST = 'USER_REQUEST';
const UPDATE_USER = 'UPDATE_USER';
//action creator

const setUser = (user) => ({
  type: USER_REQUEST,
  user,
});

const setUpdatedUser = (user) => {
  return {
    type: UPDATE_USER,
    user,
  };
};

export const updateUser = (user) => {
  return async (dispatch) => {
    try {
      const { data: updatedUser } = await axios.put(`/api/users/${user.id}`, user);
      dispatch(setUpdatedUser(updatedUser));
    } catch (err) {
      console.log(err);
    }
  };
};


export function usersReducer(state = {}, action) {
  switch (action.type) {
    case USER_REQUEST:
      return action.user;
    case UPDATE_USER:
      const updatedUser = state.id === action.user.id ? action.user : state;
      return updatedUser;
    default:
      return state;
  }
}
