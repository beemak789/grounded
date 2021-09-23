/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart } from "../store/cartReducer";

/**
 *Production Note - once we stay logged in. We won't need to fetch user and set auth. We should have access in hook/state.
 */

/**
 * COMPONENT
 */
const Cart = () => {
  //state

  /**pick one of the below as applicable once userLoggedIn status works */
  // let user = useSelector((state) => state.auth)
  // let userId = useSelector((state) => state.auth.id)
  let cart = useSelector((state) => state.thisCart) || null;

  //dispatch
  const dispatch = useDispatch();

  //componentDidMount

  //non-hardcoded version
  // useEffect(() => {
  //   dispatch(fetchCart(userId))
  // }, [])

  useEffect(() => {
    dispatch(fetchCart(1));
  }, []);

  console.log("this is cart", cart);

  let products = cart.products || [];
  console.log(products);

  let subtotal = cart.totalPrice || null;
  let totalQuantity = cart.totalQty || null;

  return (
    <>
      <h1 id="cart-title">Shopping Cart</h1>
      <div className="cart-container">
        <div className="cart-container-items">
          {products.map((product) => {
            return (
              <div id="cart-item" key={product.id}>
                <span>
                  <img
                    src={product.imageUrl}
                    alt="product-photo"
                    id="product-photo"
                  />
                </span>

                <span>{product.name}</span>

                <span> | {product.quantity} bags |</span>

                <span> {product.price} </span>

                <span>
                  <button>Remove Item</button>
                </span>
              </div>
            );
          })}
        </div>
        <div className="cart-totals">
          <span id="cart-total-items">
            You have {totalQuantity} items in your cart.{" "}
          </span>
          <br />
          <span id="cart-subtotal">Subtotal: ${subtotal}</span>
          <br />
          <button>Checkout</button>
          <button>Empty Cart</button>
        </div>
      </div>
    </>
  );
};

/**
 * CONTAINER
 */

export default Cart;
