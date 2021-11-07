import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {setCart} from '../store/cartReducer'
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const Checkout = () => {
  const user = useSelector(state => state.auth)
  const dispatch = useDispatch()

  const checkoutHandler = () => {
    if (user && user.id) {
      console.log('got an user *****')
      dispatch(setCart({}))
    } else {
      window.localStorage.removeItem('products')
    }
  }
  useEffect(() => {
    checkoutHandler()
  }, [])



  return (
    <div className="checkout-container">
     <Card style={{ width: '25rem' }}>
        <Card.Body>
          <div className='card-body-details'>
            <span className='checkout-text'>Checkout Your Cart</span>{' '}
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
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Checkout
