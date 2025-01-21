import axios from "axios";
import { API_KEY_TOKEN, BACKEND_URL } from "../utils/config";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

export function useGetUpcomingMovies() {
  const dispatch = useDispatch();
  const upcomingMovies = useSelector(
    (state: any) => state.movies.upcomingMovies
  );

  async function getUpcomingMovies() {
    try {
      // const res = await axios.get(
      //   "https://api.themoviedb.org/3/movie/upcoming?page=1",
      //   {
      //     headers: {
      //       Authorization: API_KEY_TOKEN,
      //     },
      //   }
      // );
      const res = await axios.get(
        `${BACKEND_URL}/api/v1/user/movie/filter?categoryName=upcoming`,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );

      // console.log(res.data.results);

      dispatch(addUpcomingMovies(res.data.filteredMovies));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    upcomingMovies.length === 0 && getUpcomingMovies();
  }, []);
}
