import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCart, deleteProduct } from '../store/cartReducer';
import { useHistory, Link } from 'react-router-dom';
import { priceFunction } from '../frontendFunctions';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const UserCart = () => {
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

  //Delete Item Handler
  const deleteUserItemHandler = (productId) => {
    dispatch(deleteProduct(productId));
    goCart();
  };

  useEffect(() => {
    if (user !== null) {
      dispatch(fetchCart());
    }
  }, [user]);

  //SingleProduct Quantity Totals
  const products = cart.products || [];
  const singleProductQuantity =
    products.map((product) => {
      return product.Cart_Product.quantity;
    }) || {};
  const cartQuantity = singleProductQuantity.reduce((accumulator, value) => {
    return accumulator + value;
  }, 0);

  //Cart Total Derivative Variables
  const cartProductQuantity = products.map((product) => {
    return product.Cart_Product.quantity;
  });
  const productPrice = products.map((product) => {
    return product.price;
  });
  const subtotal = productPrice.map((price, index) => {
    const pricePerItem = cartProductQuantity[index] * price;
    return pricePerItem;
  });
  const total = subtotal.reduce((accumulator, value) => {
    const sum = accumulator + value;
    return sum;
  }, 0);
// RENDER METHOD HERE *********************************************************************
  return (
    <>
      <div className='go-back'>
        <Link
          to='/products'
          className='navigation'
          style={{ textDecoration: 'none' }}
        >
          <img
            className='go-back-image'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5E4kteNGkK_V5iCfmX6zfKVRUzXnw-00xcrmv6RzEMNuqa01GcNQXHjyhdQHKXqaVbss&usqp=CAU'
          />
          <span className='more-coffee-text'>Continue Shopping</span>
        </Link>
      </div>

      {/* <div className='cart-container'> */}
      <div className='cart-container-items'>
        {products.map((product) => {
          return (
            <div className='cart-item' key={product.id}>
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

              <span>{product.name} </span>

              <span>
                | {product.Cart_Product ? product.Cart_Product.quantity : 0}{' '}
                bag(s) |
              </span>
              <span> ${product.price / 100} </span>

              <span name={product.id}>
                <button
                  className='delete-item'
                  onClick={() => deleteUserItemHandler(product.id)}
                  name={product.id}
                >
                  <i className='fas fa-trash'></i>
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
              <span className='cart-quantity-totals'>{cartQuantity}</span>{' '}
              item(s) in your cart.
            </p>
          )}
        </span>
        <span id='cart-subtotal'>
          <p>
            Subtotal:{' '}
            <span className='cart-quantity-totals'>
              ${priceFunction(total)}
            </span>{' '}
          </p>
        </span>

        <button className='checkout-button' onClick={checkoutHandler}>
          Checkout
        </button>
      </div>
    </>
  );
};

export default UserCart;
