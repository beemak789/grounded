import axios from 'axios';

//ACTION TYPES:
const SET_USER = 'SET_USERT';
const UPDATE_USER = 'UPDATE_USER';
//action creator

export const setUser = (user) => ({
  type: SET_USER,
  user,
});

export const setUpdatedUser = (user) => {
  return {
    type: UPDATE_USER,
    user,
  };
};

export const fetchUser = (user) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/users/${user.id}`);
      console.log("FETCH USER THUNK--->", data)
      dispatch(setUser(data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const updateUser = (user) => {
  return async (dispatch) => {
    try {
      const { data: updatedUser } = await axios.put(`/api/users/${user.id}`, user);
      console.log("UPDATED USER THUNK--->", updatedUser)
      // dispatch(setUpdatedUser(updatedUser));
      dispatch(setUser(updatedUser))
    } catch (err) {
      console.log(err);
    }
  };
};


export function usersReducer(state = {}, action) {
  switch (action.type) {
    case SET_USER:
      return action.user;
    case UPDATE_USER:
      const updatedUser = state.id === action.user.id ? action.user : state;
      return updatedUser;
    default:
      return state;
  }
}
