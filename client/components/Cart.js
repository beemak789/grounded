/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCart, deleteProduct } from '../store/cartReducer';

import { useHistory, Link } from 'react-router-dom';
import { priceFunction } from '../frontendFunctions';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import UserCart from "./UserCart";
import GuestCart from "./GuestCart";

const Cart = () => {
  let history = useHistory();
  const goCart = () => {
    history.push('/cart');
  };

  // Checkout Button
  const checkoutHandler = () => {
    history.push('/checkout');
  };

  //Delete Item Handler
  const deleteUserItemHandler = (productId) => {
    dispatch(deleteProduct(productId));
    goCart();
  };

  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth);
  const cart = useSelector((state) => state.thisCart);

  useEffect(() => {
    if (user !== null) {
      dispatch(fetchCart());
    }
  }, [user]);

  if (user && user.id) {
      return (
        <UserCart />
      )
  } else {
    return (
      <GuestCart />
    )
  }
};

export default Cart;
