import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProducts } from "../store/productsReducer";

function allProducts() {
  let products = useSelector((state) => state.allProducts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  products = products || [];

  return (
    <div>
      <h1>Shop Coffee</h1>
      {products.map((product) => (
        <div id="coffee-items" key={product.id}>
          <Link to={`/products/${product.id}`}>
            <p>{product.name}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default allProducts;
