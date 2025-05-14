import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./Movie/MovieSlice";
import PaginationSlice from "./PaginationSlice";


const store = configureStore({
    reducer: {
        paginationState: PaginationSlice.reducer,
        movieState: movieSlice.reducer
    }

});

export default store;