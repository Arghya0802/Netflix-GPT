import axios from "axios";
import { API_KEY_TOKEN } from "../utils/config";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";

export function useGetPopularMovies() {
  const dispatch = useDispatch();

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

      dispatch(addPopularMovies(res.data.results));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getPopularMovies();
  }, []);
}
