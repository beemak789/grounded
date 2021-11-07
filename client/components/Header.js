import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { logout, me } from '../store/auth';
import { Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CoffeeMakerIcon from '@mui/icons-material/CoffeeMaker';

const Header = () => {
  const dispatch = useDispatch();
  let user = useSelector((state) => state.auth);
  let cart = useSelector((state) => state.thisCart);

  //User Products in Cart--------------------------------------------------
  const products = cart.products || [];
  const singleProductQuantity =
    products.map((product) => {
      return product.Cart_Product.quantity;
    }) || {};

  const cartQuantity = singleProductQuantity.reduce((accumulator, value) => {
    return accumulator + value;
  }, 0);

  //Guests' Products-------------------------------------------------------
  const currProducts = window.localStorage.products || '[]';
  let guestProducts = JSON.parse(currProducts);
  const singleGuestProductQuantity = guestProducts.map((product) => {
    return product.qtyBags;
  });

  const totalQuantity = singleGuestProductQuantity.reduce(
    (accumulator, value) => {
      return accumulator + value;
    },
    0
  );

  const customerCartQuantity = user ? cartQuantity : totalQuantity;

  useEffect(() => {
    dispatch(me);
  }, []);

  const handleClick = () => {
    dispatch(logout());
    history.push('/');
  };

  return (
    <div className='navbar-wrapper'>
      <div id='nav-container'>
        <div className='nav-brand'>
          <Link to='/'>Grounded</Link> <CoffeeMakerIcon />
        </div>
        <div className='nav-links'>
          {/* if user is admin, access to all users */}
          {user && user.isAdmin ? (
            <>
              <Link to='/users'>All Users</Link>
            </>
          ) : (
            <>
              {/* else, if just a  user, they can shop coffee and see own profile */}
              <Link className='navigation' to='/products'>
                Shop
              </Link>
              {user && user.id && (
                <Link className='navigation' to='/me'>
                  Profile
                </Link>
              )}
            </>
          )}

          {/* guest */}
          {!user && (
            <>
              <Link className='navigation' to='/login'>
                Sign In
              </Link>
            </>
          )}

          <Badge
            badgeContent={customerCartQuantity}
            color='error'
            component={Link}
            to='/cart'
            className='cart-badge'
          >
            <span className='cart-title'>Cart</span>
            <ShoppingCartIcon />
          </Badge>

          {/* if person is a member, they can logout */}
          {user && (
            <Link className='navigation' to='/logout' onClick={handleClick}>
              Logout
            </Link>
          )}
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Header;

{
  /* <View style={styles.badgeNudgie}>
<Image
  style={styles.nudgie}
  source={require('../public/nudgie2.png')}
/>
</View>
<View
style={{
  position: 'absolute',
  width: 38,
  height: 38,
  borderRadius: 20,
  marginLeft: 72,
  backgroundColor: '#83CA9E',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}}
> */
}
