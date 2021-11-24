import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSingleOrder } from '../store/singleOrderReducer';

const SingleOrderDetails = ({match}) => {
const userOrders = useSelector((state) => state.userOrders)
const singleOrder = useSelector((state) => state.singleOrder) || {};
console.log("single order--->", singleOrder)
// let newIds= "";
//  const orderIds = userOrders.forEach((order) => {
//    newIds += order.id
//  })

//  console.log(">>>>",newIds)

//   // const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchSingleOrder());
//   }, []);

  return <div>SINGLE ORDER DETAILS</div>;
};

export default SingleOrderDetails;
