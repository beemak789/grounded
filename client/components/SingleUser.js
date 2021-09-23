import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import {me} from '../store/auth';


//products/:productId
const  Me = (
  // { history, match }
  ) => {
  //UseState -- state should be used for increasing quantity of the product
  //The quantity?
// const [user] = useState({})

  // = mapDispatchToProps
  const dispatch = useDispatch();

  // = mapStateToProps
  let user = useSelector((state) => state.auth);

  //same as componentDidMount
  useEffect(() => {
    dispatch(me);
  }, []);

  return (
    <div>
      <img src={user.imageUrl}  width="300" height="200" ></img>
      <h3><span>Name: {" "}</span>{user.username}</h3>
      <h3><span>Email: {" "}</span> {user.email}</h3> 
      <h3>Orders</h3>
</ div>
  );
};

export default Me;

