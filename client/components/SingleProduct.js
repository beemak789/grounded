import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleProduct, updateQty } from '../store/productsReducer';
import { addProduct, increaseQty } from '../store/cartReducer';
import { Link, useHistory } from 'react-router-dom';
import { priceFunction } from '../frontendFunctions';
import EditProduct from './EditProduct';

//Notes
// USER and CART states cannot change or the user cart won't run
//If things need to change for the guest cart, it must be worked around this code because of the if/else condition
// Everything changed for the guest cart must borrow from this state [cannot be made null] or else the if statement won't run at all.
//The variables inside my if block should have no affect on the guest cart "else" block

const SingleProduct = ({ match }) => {
  //This cannot change or update quantity won't run
  const [qty, setQty] = useState(0);

  const dispatch = useDispatch();

  //This cannot change or user cart won't run
  let singleProduct = useSelector((state) => state.singleProduct);

  //This cannot change or user cart won't run
  let user = useSelector((state) => state.auth);

  const history = useHistory();

  //This cannot change or user cart won't run*
  useEffect(() => {
    dispatch(fetchSingleProduct(match.params.id));
  }, []);
  const goCart = () => {
    history.push('/cart');
  };

  const addToCartHandler = () => {
    // USER LOGGED IN*******************************************************
    if (user && user.id) {
      dispatch(addProduct(user.id, singleProduct.id, +qty));
      goCart();
      // USER LOGGED IN*******************************************************
    } else {
			let selectedProduct = singleProduct;
      const currProducts = window.localStorage.products || '[]'
      let products = JSON.parse(currProducts);
      if (products.find((product) => product.id === singleProduct.id)) {
        selectedProduct.qtyBags =
          products.find((product) => product.id === singleProduct.id).qtyBags +
          selectedProduct.qtyBags;
        products = products.filter(
          (product) => product.id !== singleProduct.id
        );
      }
      products = [...products, selectedProduct];
      products = JSON.stringify(products);
      window.localStorage.products = products;
      goCart();
    }
  };

	//setQty function cannot be changed* or user cart won't update*
  const addToQuantityHandler = (event) => {
    const qty = Number(event.target.value);
    //** Set Qty is required for updating quantity in database, this must be done locally */
    setQty(event.target.value);
    dispatch(updateQty(qty));
  };

  if (!singleProduct) {
    return <h1>Loading...</h1>;
  }
  const isInStock = singleProduct && singleProduct.inventoryQuantity > 0;
  console.log('single product --->', singleProduct);
  // SINGLE PRODUCT COMPONENT RENDER*****************************************************
  return (
    <>
      <Link to='/products'>Go Back</Link>
      <h1 id='single-coffee-title'>{singleProduct.name}</h1>
      <div className='singe-coffee-container'>
        <img src={singleProduct.imageUrl} id='singe-coffee-img' />
        <p>${priceFunction(singleProduct.price)}</p>
        <p>{isInStock ? 'In Stock' : 'Out of Stock'}</p>
        {isInStock && (
          <div>
            <p className='dropdownMenu'>
              <label htmlFor='quantity'>Quantity:</label>
              <select
                name='qty'
                id='quantity'
                key='quantity'
                onChange={addToQuantityHandler}
              >
             
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
              </select>
            </p>
            <button onClick={addToCartHandler} type='button'>
              Add To Cart
            </button>
          </div>
        )}
        <p>{singleProduct.description}</p>
        <br />
        <br />
        <br />
        <br />
         <div>
      
        {user && user.isAdmin ? (
          <div id = "edit-product" >
            <h2>Edit Product: </h2>
            <EditProduct />{' '}
          </div>
          </div>
        ) : (
          <div> </div>
        )}
      </div>


    </>
  );

};
export default SingleProduct;
