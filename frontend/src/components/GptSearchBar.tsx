import { useDispatch, useSelector } from "react-redux";
import { language } from "../utils/langConstants";
import { Button } from "./Button";
import { InputBox } from "./InputBox";
import { useRef } from "react";
import axios from "axios";
import { API_KEY_TOKEN, BACKEND_URL } from "../utils/config";
import { ErrorMssg } from "./ErrorMssg";
import { addGptRecommendedMovies } from "../utils/GptSlice";

export const GptSearchBar = () => {
  const userLanguage = useSelector((state: any) => state.GPT.userLanguage);
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  async function handleFormSubmit(e: React.FormEvent) {
    try {
      e.preventDefault();
      // gpt-3.5-turbo

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

        // console.log(res.data.recommendedMovies);
        // inputRef.current.value = "";
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

        console.log(promisedArray);

        const tmdbResults = await Promise.all(promisedArray);

        console.log(tmdbResults);
        let singleMovieCollection = tmdbResults.map((movie) => {
          return movie.results[0];
        });

        console.log(singleMovieCollection);

        dispatch(addGptRecommendedMovies(singleMovieCollection));
      }
    } catch (error: any) {
      console.log(error);
      <ErrorMssg mssg={error.response.data.message} />;
    }
  }
  return (
    <form action="" onSubmit={handleFormSubmit} className="">
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
    </form>
  );
};
