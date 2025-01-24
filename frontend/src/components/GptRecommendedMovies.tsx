import { useSelector } from "react-redux";
import { MovieList } from "./MovieList";
import { useState } from "react";
import { IndivdualMovieCard } from "./IndividualMovieCard";
import { IMG_CDN_URL } from "../utils/config";
interface movieProps {
  adult: boolean;
  poster_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  posterPath: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export const GptRecommendedMovies = () => {
  const movies = useSelector(
    (state: any) => state.GPT.gptMovies
  ) as movieProps[];

  const [selectedMovie, setSelectedMovie] = useState<any>(null);

  if (movies.length == 0) return;
  return (
    <div className="mt-64 md:mt-40 text-white mb-10 md:-mb-10 w-full">
      {selectedMovie && (
        <IndivdualMovieCard
          title={selectedMovie.title}
          posterPath={`${IMG_CDN_URL}/${selectedMovie.poster_path}`}
          onClick={() => setSelectedMovie(null)}
        />
      )}
      {movies.length > 0 && (
        <MovieList
          title=""
          movies={movies}
          movieClick={(movie) => setSelectedMovie(movie)}
        />
      )}
    </div>
  );
};
