import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

/**
 * COMPONENT
 */
const Cart = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.id);
  if(!isLoggedIn){
    const products = window.localStorage.getItem("products")
  }else{

  }
  //find cartId to set state - array of items associated with cartID
  return (
    <>
      <h1 id="cart-title">Shopping Cart</h1>
      <div className="cart-container">
        {/* loop through items: picture | name | quanity | price */}
        {/* <div id="cart-item" key={idx}> */}

        <span id="cart-subtotal">Subtotal: --</span>
        <br/>
        <button>Checkout</button>
      </div>
    </>
  );
};

/**
 * CONTAINER
 */

export default Cart;
