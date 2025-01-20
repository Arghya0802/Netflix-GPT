import axios from "axios";
import { API_KEY_TOKEN } from "../utils/config";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";

export function useGetPopularMovies() {
  const dispatch = useDispatch();
  const popularMovies = useSelector((state: any) => state.movies.popularMovies);

  async function getPopularMovies() {
    try {
      const res = await axios.get(
        "https://api.themoviedb.org/3/movie/popular?page=1",
        {
          headers: {
            Authorization: API_KEY_TOKEN,
          },
        }
      );
      console.log("Calling from function");

      dispatch(addPopularMovies(res.data.results));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    popularMovies.length === 0 && getPopularMovies();
  }, []);
}
