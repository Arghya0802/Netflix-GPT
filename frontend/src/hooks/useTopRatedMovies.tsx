import axios from "axios";
import { API_KEY_TOKEN, BACKEND_URL } from "../utils/config";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";
import { useEffect } from "react";

export function useGetTopRatedMovies() {
  const dispatch = useDispatch();
  const topRatedMovies = useSelector(
    (state: any) => state.movies.topRatedMovies
  );

  async function getTopRatedMovies() {
    try {
      // const res = await axios.get(
      //   "https://api.themoviedb.org/3/movie/top_rated?page=1",
      //   {
      //     headers: {
      //       Authorization: API_KEY_TOKEN,
      //     },
      //   }
      // );

      const res = await axios.get(
        `${BACKEND_URL}/api/v1/user/movie/filter?categoryName=top`,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );

      dispatch(addTopRatedMovies(res.data.filteredMovies));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    topRatedMovies.length === 0 && getTopRatedMovies();
  }, []);
}
