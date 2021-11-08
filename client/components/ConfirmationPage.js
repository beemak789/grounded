import React from 'react';
import { Button } from '@mui/material';

const ConfirmationPage = (props) => {
  const handleClick = () => {
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
          onClick={handleClick}
        >
          {' '}
          Continue Shopping
        </Button>
      </div>
    </div>
  );
};

export default ConfirmationPage;
