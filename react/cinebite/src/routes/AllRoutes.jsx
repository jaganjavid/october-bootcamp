

import { MovieList, MovieDetails, Search, PageNotFound } from "../pages";
import { Routes, Route } from "react-router";

export const AllRoutes = () => {
    return(
      <Routes>
        <Route path="/" index={true} element={<MovieList apiPath="movie/now_playing"/>}/>
        <Route path="movie/:id" element={<MovieDetails/>}/>
        <Route path="movies/popular" element={<MovieList apiPath="movie/popular"/>}/>
        <Route path="movies/top" element={<MovieList apiPath="movie/top_rated"/>}/>
        <Route path="movies/upcoming" element={<MovieList apiPath="movie/upcoming"/>}/>
        <Route path="movie/search" element={<Search/>}/>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    )
}
