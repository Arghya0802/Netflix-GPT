import { useSelector } from "react-redux";
import { MovieCard } from "./MovieCard";

interface movieProps {
  id: number;
  original_language: string;
  title: string;
  overview: string;
  popularity: number;
  posterPath: string;
  release_date: string;
  poster_path: string;
}

export const MovieList = ({
  title,
  movies,
  movieClick,
}: {
  title: string;
  movies: movieProps[];
  movieClick?: (movie: movieProps) => void;
}) => {
  const showGpt = useSelector((state: any) => state.GPT.showGpt);

  return (
    <div className="flex flex-col px-3 mt-8 md:mt-10">
      <div className="text-3xl text-white p-3 font-bold ">
        {title ? title : ""}
      </div>
      <div className="flex gap-2 px-3 overflow-x-auto scrollbar-hide">
        {movies.map((movie) => (
          <MovieCard
            posterPath={showGpt ? movie?.poster_path : movie?.posterPath}
            title={movie?.title}
            key={movie?.id}
            onClick={() => movieClick && movieClick(movie)}
          />
        ))}
      </div>
    </div>
  );
};
