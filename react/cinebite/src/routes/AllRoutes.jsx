

import { MovieList, MovieDetails, Search, PageNotFound } from "../pages";
import { Routes, Route } from "react-router";

export const AllRoutes = () => {
    return(
      <Routes>
        <Route path="/" index={true} element={<MovieList/>}/>
        <Route path="movie/:id" element={<MovieDetails/>}/>
        <Route path="movies/popular" element={<MovieList/>}/>
        <Route path="movies/top" element={<MovieList/>}/>
        <Route path="movies/upcoming" element={<MovieList/>}/>
        <Route path="movie/search" element={<Search/>}/>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    )
}
