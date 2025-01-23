import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
// import { BACKEND_URL } from "../utils/config";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

export function useGetNowPlayingMovies(handlerFunction: (value: boolean) => void) {
    const dispatch = useDispatch();
    const nowPlayingMovies = useSelector((state: any) => state.movies.nowPlayingMovies);
    const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

    useEffect(() => {
        async function fetchData() {
            try {

                handlerFunction(true);
                const resAxios = await axios.get(
                    `${BACKEND_URL}/api/v1/user/movie/filter?categoryName=now`,
                    {
                        headers: {
                            Authorization: localStorage.getItem("token"),
                        },
                    }
                );

                dispatch(addNowPlayingMovies(resAxios.data.filteredMovies));
            } catch (error) {
                handlerFunction(false);
            } finally {
                handlerFunction(false);
            }
        }

        nowPlayingMovies.length === 0 && fetchData();
    }, [])
}


