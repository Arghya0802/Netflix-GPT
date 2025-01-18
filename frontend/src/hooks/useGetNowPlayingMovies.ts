import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_KEY_TOKEN } from "../utils/config";
import { addNowPlayingMovies } from "../utils/movieSlice";

export function useGetNowPlayingMovies() {
    const dispatch = useDispatch();

    async function getAllNowPlayingMovies() {
        try {
            const resAxios = await axios.get(
                "https://api.themoviedb.org/3/movie/now_playing?page=1",
                {
                    headers: {
                        Authorization: API_KEY_TOKEN,
                    },
                }
            );

            console.log(`Data coming from axiois call`);
            console.log(resAxios.data.results);
            dispatch(addNowPlayingMovies(resAxios.data.results));
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getAllNowPlayingMovies();
    }, []);
}