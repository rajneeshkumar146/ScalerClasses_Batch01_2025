import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./Movie/MovieSlice";
import PaginationSlice from "./PaginationSlice";


const store = configureStore({
    reducer: {
        paginationState: PaginationSlice.reducer,
        moviesState: movieSlice.reducer
    }

});

export default store;