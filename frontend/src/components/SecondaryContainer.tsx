import { useSelector } from "react-redux";
import { MovieList } from "./MovieList";

export const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector(
    (state: any) => state.movies.nowPlayingMovies
  );

  const popularMovies = useSelector((state: any) => state.movies.popularMovies);

  const topRatedMovies = useSelector(
    (state: any) => state.movies.topRatedMovies
  );

  const upcomingMovies = useSelector(
    (state: any) => state.movies.upcomingMovies
  );
  return (
    <div className="flex flex-col scrollbar-hide bg-black min-h-screen">
      <div className="md:-mt-52 mt-20 min-h-full mb-80 md:mb-4">
        <MovieList title="Now Playing Movies" movies={nowPlayingMovies} />
        <MovieList title="Popular" movies={popularMovies} />
        <MovieList title="Top Rated" movies={topRatedMovies} />
        <MovieList title="Upcoming Movies" movies={upcomingMovies} />
      </div>
    </div>
  );
};
