import axios from "axios";
import { API_KEY_TOKEN } from "../utils/config";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

export function useGetUpcomingMovies() {
  const dispatch = useDispatch();

  async function getUpcomingMovies() {
    try {
      const res = await axios.get(
        "https://api.themoviedb.org/3/movie/upcoming?page=1",
        {
          headers: {
            Authorization: API_KEY_TOKEN,
          },
        }
      );
      console.log(res.data.results);

      dispatch(addUpcomingMovies(res.data.results));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUpcomingMovies();
  }, []);
}
