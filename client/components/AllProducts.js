import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { priceFunction } from '../frontendFunctions';
import { fetchProducts, deleteProduct } from '../store/productsReducer';

function allProducts() {
  let products = useSelector((state) => state.allProducts);
  const user = useSelector((state) => state.auth) || null;
  const dispatch = useDispatch();

  const deleteHandler = (evt) => {
    let productId = evt.target.name;
    console.log(productId, 'productId');
    dispatch(deleteProduct(productId));
  };

  const isAdmin = () => {
    if (user && user.isAdmin) {
      return (
        <div className='all-coffee-container'>
          <div>
            <Link to='/addproduct'>
              <button> Add New Product </button>
            </Link>
          </div>

          {products.map((product) => (
            <div className='coffee-item' key={product.id}>
              <Link to={`/products/${product.id}`}>
                <img src={product.imageUrl} id='coffee-item-img' />

                <p>{product.name}</p>

                <span id='product-price'>${priceFunction(product.price)}</span>
              </Link>
              <button onClick={deleteHandler} name={product.id}>
                Delete
              </button>
            </div>
          ))}
        </div>
      );
    } else {
      return (
        <div className='all-coffee-container'>
          {products.map((product) => (
            <div className='coffee-item' key={product.id}>
              <Link className='product-link' to={`/products/${product.id}`}>
                <img src={product.imageUrl} id='coffee-item-img' />
                <div className='product-detail'>
                  <p>{product.name}</p>
                  <span className='product-price'>
                    ${priceFunction(product.price)}
                  </span>
                </div>
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
      <div className='all-products-page'>
        {/* <h1 id='all-coffee-title'>Shop Coffee</h1> */}
        {isAdmin()}
      </div>
    </>
  );
}

export default allProducts;
