import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: "counterName",
    initialState: {
        count: 0
    },
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        }
    }
});


export default counterSlice;