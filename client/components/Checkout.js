import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCart } from '../store/cartReducer';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { fetchCart } from '../store/cartReducer';

const Checkout = () => {
  const user = useSelector((state) => state.auth);
  const cart = useSelector((state) => state.thisCart);
  const userProducts = useSelector((state) => state.thisCart.products) || [];

  const dispatch = useDispatch();

  const checkoutHandler = () => {
    if (user && user.id) {
      dispatch(setCart({}));
    } else {
      window.localStorage.removeItem('products');
    }
  };

  useEffect(() => {
    if (user !== null) {
      checkoutHandler();
      dispatch(fetchCart());
    }
  }, [user]);
  //this will run when the user state changes

  //Derivative Variables
  const products = cart.products || [];
  const cartProductQuantity = products
    .map((product) => {
      return product.Cart_Product.quantity;
    })
    .reduce((accumulator, value) => {
      return accumulator + value;
    }, 0);

  const productPrice = userProducts
    .map((product) => {
      return product.price;
    })
    .reduce((accumulator, value) => {
      return accumulator + value;
    }, 0);

  return (
    <div className='checkout-container'>
      <Card style={{ width: '25rem' }}>
        <Card.Body>
          <div className='card-body-details'>
            <span className='checkout-text'>Checkout Summary</span>{' '}
            <Link to='/cart' style={{ textDecoration: 'none' }}>
              <Button
                variant='contained'
                style={{
                  fontSize: '10px',
                  marginLeft: '100px',
                  padding: '10px',
                  backgroundColor: '#EE3B3B',
                  borderRadius: '3px',
                }}
              >
                {' '}
                <span className='return-to-cart-text'>Return to Cart</span>
              </Button>
            </Link>
            <div className='items-in-cart-text'>
              <p>
                You have{' '}
                <span className='cart-quantity-totals'>
                  {cartProductQuantity}
                </span>{' '}
                item(s) in your cart.
              </p>

              <span id='cart-subtotal'>
                <p>
                  Subtotal:{' '}
                  <span className='cart-quantity-totals'>
                    ${productPrice / 100}
                  </span>{' '}
                </p>
              </span>
            </div>
            <div className='confirm-button'>
              <Link to='/confirmation' style={{ textDecoration: 'none' }}>
                <Button
                  variant='contained'
                  style={{
                    fontSize: '10px',
                    marginLeft: '100px',
                    padding: '10px',
                    backgroundColor: '#EE3B3B',
                    borderRadius: '3px',
                    alignItems: 'center',
                  }}
                >
                  {' '}
                  <span className='return-to-cart-text'>Confirm Order</span>
                </Button>
              </Link>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Checkout;
