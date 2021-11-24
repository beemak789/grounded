import React, { useState, useEffect } from 'react';
import { fetchOrderHistory } from '../store/ordersReducer';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import SingleOrderDetails from './SingleOrderDetails';
import { fetchSingleOrder } from '../store/singleOrderReducer';

const OrderHistory = () => {
  const dispatch = useDispatch();
  let history = useHistory();
  const user = useSelector((state) => state.user);
  const cart = useSelector((state) => state.thisCart);
  const userOrders = useSelector((state) => state.userOrders) || [];

  console.log("~~~~", userOrders)
  //You want the entire "paid" cart orders once a purchase is made
  useEffect(() => {
    dispatch(fetchOrderHistory(cart));
  }, []);

 const id  = userOrders.map((order) => {
   return order.id
 })
 console.log("{{{{", id)

  const orderProductNames = userOrders.map((order, idx) => {
    return order.products;
  });

  const products = orderProductNames.map((order) => {
    return order;
  });
  console.log("----", userOrders.id)
  const orderProducts = products.map((product) => {
    return product;
  });

  let list = [];
  for (let i = 0; i < orderProducts.length; i++) {
    for (let j = 0; j < orderProducts[i].length; j++) {
      list.push(orderProducts[i][j]);
    }
  }

  const productName = list
    .map((product) => {
      return product.name;
    })
    // .map((element, idx) => {
    //   return element;
    // });



  const orderDetailsHandler = () => {

    dispatch(fetchSingleOrder())
  };

  return (
    <>
      {userOrders.length === 0 ? (
        <div> {user.username}, you have no history of orders with us. </div>
      ) : (
        userOrders.map((order) => {
          const month = new Date(order.createdAt).getMonth() + 1;
          const day = new Date(order.createdAt).getDate();
          var year = new Date(order.createdAt).getFullYear();
          return (
            <div className='orders-container' key={order.id}>
              <p style={{ fontWeight: 'bold' }}>Order #{order.id}</p>
              <p>Purchased On: {`${month}/${day}/${year}`}</p>
              {/* <Link to={`/singleOrder/${order.id}`}> */}
                <button onClick={orderDetailsHandler} className='order-details'>
                  Details
                </button>
              {/* </Link> */}
            </div>
          );
        })
      )}
    </>
  );
};

export default OrderHistory;
