import React from 'react';
import { Button } from '@mui/material';
import { fetchCheckoutItems } from '../store/cartReducer';
import { useSelector, useDispatch } from 'react-redux';

const ConfirmationPage = (props) => {
  const user = useSelector((state) => state.auth);
  const cart = useSelector((state) => state.thisCart);
  const userProducts = useSelector((state) => state.thisCart.products) || [];
  const dispatch = useDispatch();

  const confirmOrderHandler = () => {
    console.log('confirm order handler clicked');
    dispatch(fetchCheckoutItems(userProducts));
    props.history.push('/products');
  };

  return (
    <div className='checkout-confirmation'>
      <div className='conf-container'>
        <p className='order-confirmed-text'>Order confirmed!</p>
        <p>You'll be able to brew that coffee really soon!</p>
        <Button
          style={{
            backgroundColor: '#EE3B3B',
            color: 'white',
            fontSize: '12px',
          }}
          onClick={confirmOrderHandler}
        >
          {' '}
          Continue Shopping
        </Button>
      </div>
    </div>
  );
};

export default ConfirmationPage;
