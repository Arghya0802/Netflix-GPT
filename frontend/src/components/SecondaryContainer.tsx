import { useSelector } from "react-redux";
import { MovieList } from "./MovieList";

export const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector(
    (state: any) => state.movies.nowPlayingMovies
  );

  return (
    <div className="flex flex-col scrollbar-hide bg-black">
      <div className="-mt-52">
        <MovieList title="Now Playing Movies" movies={nowPlayingMovies} />
        <MovieList title="Trending" movies={nowPlayingMovies} />
        <MovieList title="Popular" movies={nowPlayingMovies} />
        <MovieList title="Grounded as fuck" movies={nowPlayingMovies} />
      </div>
    </div>
  );
};
