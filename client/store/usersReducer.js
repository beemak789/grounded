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

// //thunk creator
// export const fetchUsers = () => async (dispatch) => {
//   const TOKEN = 'token';
//   const token = window.localStorage.getItem(TOKEN);
//   try {
//     if (token) {
//       const { data } = await axios.get('/api/users', {
//         headers: {
//           authorization: token,
//         },
//       });
//       dispatch(setUsers(data));
//     }
//   } catch (err) {
//     console.log('error in get users thunk');
//   }
// };

export const updateUser = (user) => {
  return async (dispatch) => {
    try {
      const { data: updatedUser } = await axios.put(`/api/users/${user.id}`, user);
      console.log("DATA IN THE THUNK---->", updatedUser)
      dispatch(setUpdatedUser(updatedUser));
    } catch (err) {
      console.log(err);
    }
  };
};

//reducer
export function usersReducer(state = {}, action) {
  switch (action.type) {
    case USER_REQUEST:
      return action.user;
    case UPDATE_USER:
      const updatedUser = state.id === action.user.id ? action.user : state;
      console.log("THE UPDATED USER IN THE REDUCER--->", updatedUser)
      return updatedUser;
    default:
      return state;
  }
}
