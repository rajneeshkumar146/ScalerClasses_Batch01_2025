import React from 'react';
import ProductList from '../components/ProductList';


function Cart() {
  const cartProductList = [];


  return (
    <>
      <div>Add to Cart</div>
      <div className=''>
        <ProductList productList={cartProductList}></ProductList>
      </div>
    </>
  )
}

export default Cart