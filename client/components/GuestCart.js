import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCart, deleteProduct } from '../store/cartReducer';

import { useHistory, Link } from 'react-router-dom';
import { priceFunction } from '../frontendFunctions';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

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

    return (
    <>
      <div className='cart-container'>
        <div className='cart-container-items'>
          {products.map((product) => {
            return (
              <div id='cart-item' key={product.id}>
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
                <span> | {product.qtyBags} bag(s) |</span>
                <span> ${priceFunction(product.price)} </span>

                {/* this works */}
                <span>
                  <button
                    className='delete-guest-item'
                    onClick={deleteGuestItemHandler}
                    name={product.id}
                  >
                    Remove
                  </button>
                </span>
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
              <span className='cart-quantity-totals'>${subtotal}</span>{' '}
            </p>
          </span>
          <button className='checkout-button' onClick={checkoutHandler}>
            Checkout
          </button>
        </div>
      </div>
    </>
    );
};

export default GuestCart;
