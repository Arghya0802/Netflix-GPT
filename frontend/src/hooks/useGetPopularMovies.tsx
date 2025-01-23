import axios from "axios";
// import { BACKEND_URL } from "../utils/config";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";

export function useGetPopularMovies() {
  const dispatch = useDispatch();
  const popularMovies = useSelector((state: any) => state.movies.popularMovies);
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  async function getPopularMovies() {
    try {
      const res = await axios.get(
        `${BACKEND_URL}/api/v1/user/movie/filter?categoryName=popular`,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      dispatch(addPopularMovies(res.data.filteredMovies));
    } catch (error) {}
  }

  useEffect(() => {
    popularMovies.length === 0 && getPopularMovies();
  }, []);
}
