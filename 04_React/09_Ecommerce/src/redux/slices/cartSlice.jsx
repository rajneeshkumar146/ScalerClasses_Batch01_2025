import { createSlice } from '@reduxjs/toolkit';


const cartSlice = createSlice({
    name: "cartSliceName",
    initialState: {
        cartQuantity: 101,
        cartProducts: []
    },
    reducers: {
        addToCart: (state, action) => {
            console.log("product added to cart.");
        },
        deleteFromCart: (state, action) => {
            console.log("product deleted from cart.");
        },
    }
});


export const actions = cartSlice.actions;
export default cartSlice;