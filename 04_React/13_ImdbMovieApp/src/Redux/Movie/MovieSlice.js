import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movieSlice",
    initialState: {
        movies: [],
        loading: true,
        error: false,
    },
    reducers:{
        setError: (state) => {
            state.error = true;
            state.loading = false;
            state.movies = [];
        },
        setLoading: (state) => {
            state.error = false;
            state.loading = true;
            state.movies = [];
            
        },
        setMovies: (state, payloadObject) => {
            state.error = false;
            state.loading = false;
            state.movies = payloadObject.payload;
        }
    }
});

export default movieSlice;