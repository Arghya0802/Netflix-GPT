import axios from "axios";
// import { BACKEND_URL } from "../utils/config";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

export function useGetUpcomingMovies() {
  const dispatch = useDispatch();
  const upcomingMovies = useSelector(
    (state: any) => state.movies.upcomingMovies
  );
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  async function getUpcomingMovies() {
    try {
      const res = await axios.get(
        `${BACKEND_URL}/api/v1/user/movie/filter?categoryName=upcoming`,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );

      dispatch(addUpcomingMovies(res.data.filteredMovies));
    } catch (error) {}
  }

  useEffect(() => {
    upcomingMovies.length === 0 && getUpcomingMovies();
  }, []);
}
