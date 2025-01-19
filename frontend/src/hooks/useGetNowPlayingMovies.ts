import axios from "axios";
import { useDispatch } from "react-redux";
import { API_KEY_TOKEN } from "../utils/config";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

export function useGetNowPlayingMovies() {
    const dispatch = useDispatch();

    useEffect(() => {
        async function fetchData() {
            try {
                const resAxios = await axios.get(
                    "https://api.themoviedb.org/3/movie/now_playing?page=1",
                    {
                        headers: {
                            Authorization: API_KEY_TOKEN,
                        },
                    }
                );

                console.log(`Data coming from custom useGetNowPlayingMovies hook`);
                console.log(resAxios.data.results);

                dispatch(addNowPlayingMovies(resAxios.data.results));
            } catch (error) {
                console.log(error);
            }
        }

        fetchData();
    }, [])
}


