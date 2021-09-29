import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {setCart} from '../store/cartReducer'

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
    <div className="checkout-page">
      Thank you for purchasing your coffee with Grounded.
      <div></div>
      <div>
      <img src='https://i.imgur.com/T63fRGe.jpeg'></img>
      </div>
    </div>
  )
}

export default Checkout
