import React from 'react'
import { useEffect, useContext} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BASE_URL } from "../Utils/constants";
import MovieContext from '../Context/MovieContext';
import MovieMiddeware from "../Redux/Movie/MovieMiddleWare";
import Pagination from './Pagination';
import Moviecard from './Moviecard';

export default function Movies() {
  const { watchList } = useContext(MovieContext);
  const { pageNo } = useSelector((store) => store.paginationState);
  const { movies, loading, error } = useSelector((store) => store.movieState);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(MovieMiddeware(pageNo));
  }, [pageNo]);   // It  means execute callback on mouting as well as on pageNo update.


  if (loading) {
    return <h1>...Loading</h1>;
  }

  if (error) {
    return <h1>OPS... Error Occured</h1>;
  }

  return (
    <>
      <h1 className="text-center	m-12 text-4xl">Trending Movies</h1>

      <div className="flex flex-wrap justify-evenly	">
        {movies.map((movie) => {
          return (
            <Moviecard
              key={movie.id}
              movie={movie}
              fav={watchList.some((movieObj) => movieObj.id === movie.id)}
              title={movie.title}
              poster={BASE_URL + movie.backdrop_path}
            />
          );
        })}
      </div>
      <Pagination />
    </>
  );
}