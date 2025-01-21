import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { API_KEY_TOKEN, BACKEND_URL } from "../utils/config";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

export function useGetNowPlayingMovies() {
    const dispatch = useDispatch();
    const nowPlayingMovies = useSelector((state: any) => state.movies.nowPlayingMovies);

    useEffect(() => {
        async function fetchData() {
            try {
                // const resAxios = await axios.get(
                //     "https://api.themoviedb.org/3/movie/now_playing?page=1",
                //     {
                //         headers: {
                //             Authorization: API_KEY_TOKEN,
                //         },
                //     }
                // );

                const resAxios = await axios.get(
                    `${BACKEND_URL}/api/v1/user/movie/filter?categoryName=now`,
                    {
                        headers: {
                            Authorization: localStorage.getItem("token"),
                        },
                    }
                );

                console.log(`Data coming from custom useGetNowPlayingMovies hook`);
                // console.log(resAxios.data.results);

                dispatch(addNowPlayingMovies(resAxios.data.filteredMovies));
            } catch (error) {
                console.log(error);
            }
        }

        nowPlayingMovies.length === 0 && fetchData();
    }, [])
}


