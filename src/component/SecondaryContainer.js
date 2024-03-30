import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="bg-black">
      <div className="-mt-52 pl-12 relative z-20">
        <MovieList title={"Now Playing"} movies={movies.NowPlayingMovies} />
        <MovieList title={"Trending"} movies={movies.NowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies.NowPlayingMovies} />
        <MovieList title={"Horror"} movies={movies.NowPlayingMovies} />
        <MovieList title={"Action"} movies={movies.NowPlayingMovies} />
      
      </div>
    </div>
  );
};
export default SecondaryContainer;
