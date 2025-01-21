import { useSelector } from "react-redux";
import { MovieCard } from "./MovieCard";
import { MovieList } from "./MovieList";
import { useState } from "react";
import { IndivdualMovieCard } from "./IndividualMovieCard";
import { IMG_CDN_URL } from "../utils/config";
import { ErrorMssg } from "./ErrorMssg";
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
  const [errorMssg, setErrorMssg] = useState("");

  const movies = useSelector(
    (state: any) => state.GPT.gptMovies
  ) as movieProps[];

  const [selectedMovie, setSelectedMovie] = useState<any>(null);
  console.log(movies);

  if (movies.length == 0) return;
  return (
    <div className="text-white mb-10 md:-mb-10">
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
      {errorMssg && <ErrorMssg mssg={errorMssg} />}
    </div>
  );
};
