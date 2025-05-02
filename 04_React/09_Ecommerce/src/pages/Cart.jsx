import React from 'react';
import { useSelector } from 'react-redux';
import ProductList from '../components/ProductList';


function Cart() {
  const cartProductList = useSelector((store) => store.cartReducer.cartProducts);
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