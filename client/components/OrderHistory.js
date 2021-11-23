import React, {useState, useEffect} from 'react'
import { fetchOrderHistory } from "../store/ordersReducer";
import { useSelector, useDispatch } from 'react-redux'
import { Link } from "react-router-dom";
import { setUserOrders } from '../store/ordersReducer';



const OrderHistory = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.thisCart);
  const userOrders = useSelector((state) => state.userOrders) || []


  console.log("the orders!!!!--->", userOrders);

  useEffect(() => {
    dispatch(fetchOrderHistory(cart));
  }, []);

  const orderProductNames = userOrders.map((order) => {
    return order.products
  })



  // for (let i = 0; i < orderProductNames.length; i++) {

  //   for (let j = 0; j < orderProductNames[i].length; j++) {
  //     console.log(orderProductNames[i][j].name)
  //   }
  // }



  return (
    <>
    order history
     {
      userOrders &&  userOrders.map((order) => {
        const month = new Date(order.createdAt).getMonth() + 1;
        const day = new Date(order.createdAt).getDate();
        var year =new Date(order.createdAt).getFullYear();

         return (
           <div key={order.id}>

             <span>Order #: {order.id}</span>
             <span>Order Status: {order.orderStatus}</span>
             <span>Purchase Date: {`${month}/${day}/${year}`}</span>
             {/* <span>{orderProductNames}</span> */}

           </div>
         )
       })
     }
    </>
  )
}

export default OrderHistory
