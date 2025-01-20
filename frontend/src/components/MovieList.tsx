import { MovieCard } from "./MovieCard";

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

export const MovieList = ({
  title,
  movies,
}: {
  title: string;
  movies: movieProps[];
}) => {
  return (
    <div className="flex flex-col min-w-full px-3 ">
      <div className="text-3xl text-white p-3 font-bold ">{title}</div>
      <div className="flex gap-2 px-3 overflow-auto scrollbar-hide">
        {movies.map((movie) => (
          <MovieCard
            posterPath={movie.poster_path}
            title={movie.title}
            key={movie.id}
          />
        ))}
      </div>
    </div>
  );
};
