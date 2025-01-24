import { useDispatch, useSelector } from "react-redux";
import { language } from "../utils/langConstants";
import { Button } from "./Button";
import { InputBox } from "./InputBox";
import { useRef, useState } from "react";
import axios from "axios";
// import { API_KEY_TOKEN, BACKEND_URL } from "../utils/config";
import { ErrorMssg } from "./ErrorMssg";
import { addGptRecommendedMovies } from "../utils/GptSlice";
import { Loader } from "./Loader";

export const GptSearchBar = () => {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const API_KEY_TOKEN = import.meta.env.VITE_API_KEY_TOKEN;
  // console.log(BACKEND_URL);

  const userLanguage = useSelector((state: any) => state.GPT.userLanguage);
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleFormSubmit(e: React.FormEvent) {
    try {
      e.preventDefault();
      // gpt-3.5-turbo

      setIsLoading(true);
      if (inputRef && inputRef.current) {
        const res = await axios.post(
          `${BACKEND_URL}/api/v1/user/get-movies`,
          {
            searchText: inputRef.current.value,
          },
          {
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          }
        );
        const promisedArray = res.data.recommendedMovies.map(
          async (movie: string) => {
            const res = await axios.get(
              `https://api.themoviedb.org/3/search/movie?query=${movie}`,
              {
                headers: {
                  Authorization: API_KEY_TOKEN,
                },
              }
            );

            return res.data;
          }
        );

        // console.log(promisedArray);

        const tmdbResults = await Promise.all(promisedArray);
        // console.log(tmdbResults);

        let singleMovieCollection = tmdbResults.map((movie) => {
          return movie.results[0];
        });

        dispatch(addGptRecommendedMovies(singleMovieCollection));
      }
    } catch (error: any) {
      setError("Oops! Looks like we are down! Please comeback later!");
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <form
      action=""
      onSubmit={handleFormSubmit}
      className="absolute  top-1/3 md:-mt-0 md:w-1/2 w-full px-2"
    >
      <InputBox
        placeholder={
          userLanguage === "english"
            ? language.english.placeholder
            : userLanguage === "hindi"
            ? language.hindi.placeholder
            : language.spanish.placeholder
        }
        bgColor="bg-gray-600"
        reference={inputRef}
      />
      {isLoading ? (
        <div className=" flex justify-center items-center pt-4">
          <Loader />
        </div>
      ) : (
        <div>
          <Button
            text={
              userLanguage === "english"
                ? language.english.search
                : userLanguage === "hindi"
                ? language.hindi.search
                : language.spanish.search
            }
            bgColor="bg-red-500"
            textColor="text-white"
            type="submit"
          />
          {error && <ErrorMssg mssg={error} />}
        </div>
      )}
    </form>
  );
};
