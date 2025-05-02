import React, { act } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import {actions} from '../redux/slices/cartSlice';


import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import AddBoxIcon from '@mui/icons-material/AddBox';

function ProductList(props) {
    const { productList } = props;
    const cartProducts = useSelector((store) => store.cartReducer.cartProducts);

    const dispatch = useDispatch();

    // Methods.
    const handleDeleteProduct = (product) => {
        dispatch(actions.deleteFromCart(product));
    }

    const handleAddProduct = (product) => {
        dispatch(actions.addToCart(product));
    }

    return (
        productList === null ? <h3>....Loading</h3> :
            <>
                {
                    productList.map((product) => {
                        return (
                            <div className='product'>
                                <img src={product.image} alt="" className='product_image'></img>
                                <div className='product_meta'>
                                    <p className='product_title'>Title: {product.title}</p>
                                    <p className='price'>Price: {product.price}</p>
                                </div>

                                <div className='add_to_cart_container'>
                                    <IndeterminateCheckBoxIcon onClick={() => { handleDeleteProduct(product) }}></IndeterminateCheckBoxIcon>
                                    <div className='currentCartCount'>{0}</div>
                                    <AddBoxIcon onClick={() => { handleAddProduct(product) }}></AddBoxIcon>
                                </div>
                            </div>
                        );
                    })
                }
            </>
    )
}

export default ProductList