import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../store/productsReducer';

function allProducts() {
  const products = useSelector((state) => state.allProducts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div>
      <h1>Shop Coffee</h1>
      {products.map((product) => (
        <p>{product.name}</p>
      ))}
    </div>
  );
}

export default allProducts;
