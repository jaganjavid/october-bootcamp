import SignIn from "../auth/SignIn";
import Signup from "../auth/Signup";
import { MovieList, MovieDetails, Search, PageNotFound } from "../pages";
import { Routes, Route } from "react-router";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="signup" element={<Signup />} />

      <Route path="signin" element={<SignIn />} />

      <Route
        path="/"
        index={true}
        element={<MovieList apiPath="movie/now_playing" />}
      />
      <Route path="movie/:id" element={<MovieDetails />} />
      <Route
        path="movies/popular"
        element={<MovieList apiPath="movie/popular" />}
      />
      <Route
        path="movies/top"
        element={<MovieList apiPath="movie/top_rated" />}
      />
      <Route
        path="movies/upcoming"
        element={<MovieList apiPath="movie/upcoming" />}
      />
      <Route path="search" element={<Search apiPath="search/movie" />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
