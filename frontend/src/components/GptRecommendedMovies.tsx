import { useSelector } from "react-redux";
import { MovieCard } from "./MovieCard";
import { MovieList } from "./MovieList";
interface movieProps {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
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

  console.log(movies);

  if (movies.length == 0) return;
  return (
    <div className="text-white">
      <MovieList title="" movies={movies} />
    </div>
  );
};
