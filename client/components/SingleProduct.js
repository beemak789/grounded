import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleProduct } from '../store/productsReducer';
import { Link } from 'react-router-dom';


//products/:productId
const SingleProduct = ({ history, match }) => {
  //UseState -- state should be used for increasing quantity of the product
  //The quantity?
  // const [qty, setQty] = useState(0)

  // = mapDispatchToProps
  const dispatch = useDispatch();

  // = mapStateToProps
  let singleProduct = useSelector((state) => state.singleProduct) || null;

  //same as componentDidMount
  useEffect(() => {
    dispatch(fetchSingleProduct(match.params.id));
  }, []);

  //Add Button Handler
  const addToCartHandler = () => {
    //When the "add to cart" button is clicked - our cart's total quantity should increase.
    console.log('The Add To Cart Button was clicked!');
  };

  //Add To Quantity Handler
  const addToQuantityHandler = () => {
    console.log("Customer changed quantity of the item!")
  }

  if (!singleProduct) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <Link to='/products'>Go Back</Link>
      <h1>{singleProduct.name}</h1>
      <img src={singleProduct.imageUrl}></img>
      <h2>{singleProduct.description}</h2>
      <h3>${singleProduct.price}</h3> <span>{singleProduct.stars}</span>
      <h1>{singleProduct.quantity ? 'In Stock' : 'Out of Stock'}</h1>
      <button onClick={addToCartHandler} type='button'>
        Add To Cart
      </button>
    <button onClick={addToQuantityHandler} type="button">Select</button>
    </>
  );
};

export default SingleProduct;
