import React, {useEffect}  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {fetchProducts} from '../store/products'

function allProducts() {

  const products = useSelector((state) => state.allProducts);
  const dispatch = useDispatch();

  useEffect( () => {  //from reducer
    dispatch(fetchProducts())
  }, [])

  return (
    <div>
      <h1>Shop Coffee</h1>
      {products.map((product) => (
        <p>product.name</p>
					// <div key={product.id}>
					// 	<Link to={`/products/${product.id}`}>
					// 		<div>
					// 			<img src={product.imageUrl} />
					// 			<p>{product.name}</p>
					// 		</div>
					// 	</Link>
      ))}
    </div>
  )
}

export default allProducts;
