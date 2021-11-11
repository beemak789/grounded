import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCart, deleteProduct } from '../store/cartReducer';

import { useHistory, Link } from 'react-router-dom';
import { priceFunction } from '../frontendFunctions';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Button } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const GuestCart = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth);
  const cart = useSelector((state) => state.thisCart);

  //Handlers and Derivative Variables
  let history = useHistory();
  const goCart = () => {
    history.push('/cart');
  };

  // Checkout Button
  const checkoutHandler = () => {
    history.push('/checkout');
  };

  useEffect(() => {
    if (user !== null) {
      dispatch(fetchCart());
    }
  }, [user]);

  //Derivative Variables
  const currProducts = window.localStorage.products || '[]';

  let products = JSON.parse(currProducts);

  const totalQuantity = products.reduce(
    (sum, product) => sum + product.qtyBags,
    0
  );
  const subtotal = products.reduce(
    (sum, product) => sum + (product.price / 100) * product.qtyBags,
    0
  );
  const deleteGuestItemHandler = (event) => {
    products = products.filter((product) => product.id !== +event.target.name);
    window.localStorage.products = JSON.stringify(products);
    goCart();
  };

  const disableCheckoutButton = products.length === 0 ? true : false;
  const checkoutButtonColor = disableCheckoutButton
    ? 'disable-checkout'
    : 'checkout-button';

  return (
    <>
      <div className='go-back'>
        <Link
          to='/products'
          className='navigation'
          style={{ textDecoration: 'none' }}
        >
          <ArrowBackIosIcon />
          <span className='more-coffee-text'>Continue Shopping</span>
        </Link>
      </div>

      {/* <div className='cart-container'> */}
      <div className='cart-container-guest'>
        {products.map((product) => {
          const qtyBags = !product ? 1 : product.qtyBags;
          return (
            <div className='cart-item-guest' key={product.id}>
              <div id='product-name'>
                <Link to={`/products/${product.id}`}>
                  <span>
                    <img
                      className='product-image'
                      src={product.imageUrl}
                      alt='product-photo'
                      id='product-photo'
                    />
                  </span>
                </Link>

                <span>{product.name}</span>
              </div>
              <div className='cart-qty'>
                {/* <span> {product.qtyBags} bag(s) </span> */}
                <span>
                  <select value={qtyBags}>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                  </select>
                </span>

                {/* this works */}
                <span>
                  <Button
                    className='delete-guest-item'
                    style={{
                      backgroundColor: '#EE3B3B',
                      color: 'white',
                      fontSize: '10px',
                      marginLeft: '5px',
                    }}
                    onClick={deleteGuestItemHandler}
                    name={product.id}
                  >
                    Remove
                  </Button>
                </span>
              </div>
              <div className='cart-price'>
                <span> ${priceFunction(product.price)} </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className='cart-totals'>
        <span id='cart-total-items'>
          {products.length === 0 ? (
            <div className='cart-empty-container'>
              <ShoppingCartIcon
                style={{ fill: '#EE2C2C', width: 50, height: 50 }}
              />
              <p style={{ textAlign: 'center', marginTop: '20px' }}>
                Your Cart is Empty!
              </p>
            </div>
          ) : (
            <p>
              You have{' '}
              <span className='cart-quantity-totals'>{totalQuantity}</span>{' '}
              item(s) in your cart.
            </p>
          )}
        </span>
        <span id='cart-subtotal'>
          <p>
            Subtotal:{' '}
            <span className='cart-quantity-totals'>
              ${(subtotal * 100) / 100}
            </span>{' '}
          </p>
        </span>
        <button
          className={checkoutButtonColor}
          onClick={checkoutHandler}
          disabled={disableCheckoutButton}
        >
          Checkout
        </button>
      </div>
      {/* </div> */}
    </>
  );
};

export default GuestCart;
