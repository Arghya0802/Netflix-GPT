import axios from "axios";
// import { API_KEY_TOKEN } from "../utils/config";
import { addMainMovieTrailerId } from "../utils/movieSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

interface movieProps {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export const useGetMovieTrailer = ({ mainMovie, setLoadingState }: { mainMovie: movieProps, setLoadingState: (val: boolean) => void }) => {

    const API_KEY_TOKEN = import.meta.env.VITE_API_KEY_TOKEN;
    const dispatch = useDispatch();
    const primaryMovieId = useSelector((state: any) => state.movies.primaryTrailerId);

    async function getMovieTrailers() {
        try {
            setLoadingState(true);
            const res = await axios.get(
                `https://api.themoviedb.org/3/movie/${mainMovie.id}/videos?language=en-US`,
                {
                    headers: {
                        Authorization: API_KEY_TOKEN,
                    },
                }
            );


            const trailers = res.data.results.filter(
                (item: any) => item.type.toLowerCase() === "trailer"
            );


            const trailer = trailers.length ? trailers[0] : res.data.results[0];

            dispatch(addMainMovieTrailerId(trailer.key));

        } catch (error) {
            setLoadingState(false);
            dispatch(addMainMovieTrailerId("lMXh6vjiZrI"));
        } finally {
            setLoadingState(false);
        }
    }

    useEffect(() => {
        !primaryMovieId && getMovieTrailers();
    }, []);
}