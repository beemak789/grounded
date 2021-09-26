/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart, deleteProduct } from "../store/cartReducer";

/**
 *Production Note - once we stay logged in. We won't need to fetch user and set auth. We should have access in hook/state.
 */

/**
 * COMPONENT
 */
const Cart = () => {

  const isLoggedIn = useSelector((state) => !!state.auth.id);

  //state
  // let userId = useSelector((state) => state.auth.id) || null;
  // let thisCart = useSelector((state) => state.thisCart) || {};


  const user = useSelector((state) => state.auth);
  const cart = useSelector((state) => state.thisCart);
    //dispatch
    const dispatch = useDispatch();


  //componentDidMount
  if (!isLoggedIn) {
    const currProducts = window.localStorage.products || "[]";
    let products = JSON.parse(currProducts);
    console.log("products---->", products);

    const deleteItemHandler = (event) => {
      console.log(event.target.name);
      products = products.filter(
        (product) => product.id !== +event.target.name
      );
      window.localStorage.products = JSON.stringify(products);
    };

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
                  <span> | {product.qtyBags} bag(s) |</span>
                  <span> ${product.price} </span>
                  <span>
                    <button onClick={deleteItemHandler} name={product.id}>
                      Remove Item
                    </button>
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
            <button>Empty Cart - NA</button>
          </div>
        </div>
      </>
    );
  } else {
    useEffect(() => {
      dispatch(fetchCart(userId));
    }, []);

    console.log("this is cart", thisCart);
    const products = thisCart.products || [];
    console.log(products);

    //Delete Button
    const deleteItemHandler = (event) => {
      console.log("The delete button was clicked!");
      console.log(event.target.name);
      dispatch(deleteProduct(userId, event.target.name));
    };

  useEffect(() => {
    if (user !== null) {
      dispatch(fetchCart(user.id));
    }
  }, [user]);

  const products = cart.products || [];
  // let subtotal = thisCart.totalPrice || null;
  // let totalQuantity = thisCart.totalQty || null;

  //Delete Button
  const deleteItemHandler = (event) => {
    console.log('The delete button was clicked!');
    console.log(event.target.name)
    dispatch(deleteProduct(user.id, event.target.name))

  }

  return (
    <>
    {console.log("THE USER --->", user)}
    {console.log("THE CART--->", cart)}

      <h1 id="cart-title">Shopping Cart</h1>
      <div className="cart-container">
        <div className="cart-container-items">
          {products.map((product) => {
            const cartProduct = product.Cart_Product || [];
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

                <span> | {cartProduct.quantityItem} bag(s) |</span>

                <span> ${product.price} </span>

                <span>
                  <button onClick={deleteItemHandler} name={product.id}>
                    Remove Item
                  </button>
                </span>
              </div>
            );
          })}
        </div>
        <div className="cart-totals">
          <span id="cart-total-items">
            You have {cart.totalQty} items in your cart.{" "}
          </span>
          <br />
          <span id="cart-subtotal">Subtotal: ${cart.totalPrice}.00</span>
          <br />
          <button>Checkout</button>
          <button>Empty Cart - NA</button>
        </div>
      </div>
    </>
  );
};

/**
 * CONTAINER
 */

export default Cart;
