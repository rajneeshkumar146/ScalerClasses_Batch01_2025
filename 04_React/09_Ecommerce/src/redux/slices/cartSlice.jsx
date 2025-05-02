import { createSlice, current } from '@reduxjs/toolkit';


const cartSlice = createSlice({
    name: "cartSliceName",
    initialState: {
        cartQuantity: 0,
        // Array of object -> [{Details of product, Individual Quantity}]
        cartProducts: []
    },
    reducers: {
        addToCart: (state, action) => {
            const productToBeAdded = action.payload;
            if (productToBeAdded === undefined || productToBeAdded === null) {
                console.log("addToCart is beign called without product, which is not possible something is fisy!!!");
                return;
            }

            state.cartQuantity++;
            const existingCartProduct = state.cartProducts.find((product) => product.id === productToBeAdded.id);

            if (existingCartProduct != undefined) {
                // Already present in cart just increase its individualQuantity.
                existingCartProduct.individualQuantity++;
            } else {
                // Not present in cart so It is a very first item of cart.
                productToBeAdded.individualQuantity = 1;
                state.cartProducts.push(productToBeAdded);
            }
        },
        deleteFromCart: (state, action) => {
            const productToBeDeletedFromCart = action.payload;
            if (productToBeDeletedFromCart === undefined || productToBeDeletedFromCart === null) {
                console.log("DeleteFromCart is beign called without product, which is not possible something is fisy!!!");
                return;
            }

            const cartProductIndex = state.cartProducts.findIndex((product) => product.id === productToBeDeletedFromCart.id);
            if (cartProductIndex != -1) {
                state.cartQuantity--;

                let currentProduct = state.cartProducts[cartProductIndex];

                if (currentProduct.individualQuantity === 1) {
                    // If this is the single item we will delete from cart.
                    state.cartProducts.splice(cartProductIndex, 1);
                } else {
                    // If I have mutiple item added in cart we will decrese its quantity.
                    currentProduct.individualQuantity--;
                }
            }
        },
    }
});


export const actions = cartSlice.actions;
export default cartSlice;