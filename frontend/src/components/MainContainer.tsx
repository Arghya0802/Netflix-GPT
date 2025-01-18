import { useSelector } from "react-redux";

export const MainContainer = () => {
  const movies = useSelector((state: any) => state.movies.nowPlayingMovies);
  console.log(movies);

  return <div>This is the main container</div>;
};
