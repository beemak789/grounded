import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleProduct } from "../store/productsReducer";
import { Link } from "react-router-dom";

//products/:productId
const SingleProduct = ({ history, match }) => {
  //UseState -- state should be used for increasing quantity of the product
  //The quantity?
  // const [qty, setQty] = useState(0)

  // = mapDispatchToProps
  const dispatch = useDispatch();

  // = mapStateToProps
  let singleProduct = useSelector((state) => state.singleProduct);

  //same as componentDidMount
  useEffect(() => {
    dispatch(fetchSingleProduct(match.params.id));
  }, []);

  //Add Button Handler
  const addToCartHandler = () => {
    //When the "add to cart" button is clicked - our cart's total quantity should increase.
    console.log("The Add To Cart Button was clicked!");
  };

  singleProduct = singleProduct || {};

  if (Object.keys(singleProduct).length === 0) {
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
