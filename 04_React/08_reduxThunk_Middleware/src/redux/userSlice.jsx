import { createSlice } from '@reduxjs/toolkit';


const userSlice = createSlice({
    name: 'userSliceDeclartion',
    initialState: {
        user: null,
        isError: false,
        isLoading: true,
        streamTypedValue: null,
        lookupValue: null,
    },
    reducers: {
        setUserLoading: (state) => {
            state.isLoading = true;
            state.isError = false;
        },
        setError: (state) => {
            state.isLoading = false;
            state.isError = true;
        },
        setUserData: (state, componentInfoObj) => {
            state.isLoading = false;
            state.isError = false;

            state.user = componentInfoObj.payload;
        },
        setTypedStreamValues: (state, componentInfoObj) => {
            state.streamTypedValue = componentInfoObj.payload;
        },
        setLookupValue: (state, componentInfoObj) => {
            state.lookupValue = componentInfoObj.payload;
        },
    }
});


export default userSlice;