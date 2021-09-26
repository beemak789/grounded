import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProducts } from "../store/productsReducer";

function allProducts() {
  const user = useSelector((state) => state.auth) || null;
  console.log("user __>", user);
  let products = useSelector((state) => state.allProducts);

  const dispatch = useDispatch();

  const isAdmin = () => {
    if (user && user.isAdmin) {
      return (
        <div className="all-coffee-container">
          {products.map((product) => (
            <div id="coffee-item" key={product.id}>
              <Link to={`/products/${product.id}`}>
                <img src={product.imageUrl} id="coffee-item-img" />
                <p>{product.name}</p>
                <span id="product-price">${product.price}</span>
              </Link>
              <button>Delete</button>
            </div>
          ))}
        </div>
      );
    } else {
      return (
        <div className="all-coffee-container">
          {products.map((product) => (
            <div id="coffee-item" key={product.id}>
              <Link to={`/products/${product.id}`}>
                <img src={product.imageUrl} id="coffee-item-img" />
                <p>{product.name}</p>
                <span id="product-price">${product.price}</span>
              </Link>
            </div>
          ))}
        </div>
      );
    }
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  products = products || [];

  return (
    <>
      <h1 id="all-coffee-title">Shop Coffee</h1>
      {isAdmin()}
    </>
  );
}

export default allProducts;
