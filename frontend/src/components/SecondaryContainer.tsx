import { useSelector } from "react-redux";
import { MovieList } from "./MovieList";
import { useState } from "react";
import { IndivdualMovieCard } from "./IndividualMovieCard";

export const SecondaryContainer = () => {
  const [selectedMovie, setSelectedMovie] = useState<any>(null);

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
      {selectedMovie && (
        <IndivdualMovieCard
          title={selectedMovie.title}
          posterPath={`${selectedMovie.posterPath}`}
          onClick={() => setSelectedMovie(null)}
        />
      )}
      <div className="md:-mt-52 mt-32 mb-4 min-h-full md:mb-4">
        <MovieList
          title="Now Playing Movies"
          movies={nowPlayingMovies}
          movieClick={(movie) => setSelectedMovie(movie)}
        />
        <MovieList
          title="Popular"
          movies={popularMovies}
          movieClick={(movie) => setSelectedMovie(movie)}
        />
        <MovieList
          title="Top Rated"
          movies={topRatedMovies}
          movieClick={(movie) => setSelectedMovie(movie)}
        />
        <MovieList
          title="Upcoming Movies"
          movies={upcomingMovies}
          movieClick={(movie) => setSelectedMovie(movie)}
        />
      </div>
    </div>
  );
};
