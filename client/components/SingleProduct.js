/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleProduct } from "../store/productsReducer";
import { addProduct, increaseQty } from "../store/cartReducer";
import { Link } from "react-router-dom";

//products/:productId
const SingleProduct = ({ history, match }) => {
  //UseState -- state should be used for increasing quantity of the product
  //The quantity?
  // const [qty, setQty] = useState(0)

  // = mapDispatchToProps
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => !!state.auth.id);
  // = mapStateToProps
  let singleProduct = useSelector((state) => state.singleProduct) || null;

  //same as componentDidMount
  useEffect(() => {
    dispatch(fetchSingleProduct(match.params.id));
  }, []);

  //Add Button Handler
  const addToCartHandler = (product) => {
    //When the "add to cart" button is clicked - our cart's total quantity should increase.
    if(!isLoggedIn){
      const products =  window.localStorage.getItem("products") || [];
      procucts.push(product);
      window.localStorage.setItem("products",products)
    }else{
      console.log('The Add To Cart Button was clicked!');
      dispatch(addProduct(userId, singleProduct))
    }

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
      <Link to="/products">Go Back</Link>
      <h1 id="single-coffee-title">{singleProduct.name}</h1>
      <div className="singe-coffee-container">
        <img src={singleProduct.imageUrl} id="singe-coffee-img" />
        <p>${singleProduct.price}</p>
        <p>
          {singleProduct && singleProduct.quantity > 0
            ? "In Stock"
            : "Out of Stock"}
        </p>
        <button onClick={addToCartHandler} type="button">
          Add To Cart
        </button>

        <p>{singleProduct.description}</p>
        <span>{singleProduct.stars}</span>
      </div>
    </>
  );
};

export default SingleProduct;
