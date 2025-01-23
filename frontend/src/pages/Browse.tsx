import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/userSlice";
import { Header } from "../components/Header";
import { removeNowPlayingMovies } from "../utils/movieSlice";
import { useGetNowPlayingMovies } from "../hooks/useGetNowPlayingMovies";
import { MainContainer } from "../components/MainContainer";
import { SecondaryContainer } from "../components/SecondaryContainer";
import { useGetPopularMovies } from "../hooks/useGetPopularMovies";
import { useGetTopRatedMovies } from "../hooks/useTopRatedMovies";
import { useGetUpcomingMovies } from "../hooks/useGetUpcomingMovies";
import {
  changeUserLanguage,
  resetGptRecommendedMovies,
  setOriginaGPTState,
  toggleShowGPT,
} from "../utils/GptSlice";
import { GptSearchPage } from "./GptSearch";
import { language } from "../utils/langConstants";
import { LanguageDropDown } from "../components/LanguageDropDown";
import { Loader } from "../components/Loader";

export const Browse = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [_, setLoading] = useState(false);

  // const [userLanguage, setUserLanguage] = useState<languageProps>("english") ;
  const userLanguage = useSelector((state: any) => state.GPT.userLanguage);
  const showGpt = useSelector((state: any) => state.GPT.showGpt);

  const [, setErrorMssg] = useState("");

  if (!showGpt) dispatch(resetGptRecommendedMovies());

  // const name = useSelector((state: any) => state.user.name);
  // const email = useSelector((state: any) => state.user.email);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      setErrorMssg("Invalid Session!!!");
      dispatch(removeNowPlayingMovies());
      navigate("/sign-in");
    }
  }, [navigate]);

  const handlerFunction = (value: boolean) => {
    setLoading(value);
  };

  useGetNowPlayingMovies(handlerFunction);
  useGetPopularMovies();
  useGetUpcomingMovies();
  useGetTopRatedMovies();

  const movies = useSelector((state: any) => state.movies.nowPlayingMovies);
  const popularMovies = useSelector((state: any) => state.movies.popularMovies);
  const topRatedMovies = useSelector(
    (state: any) => state.movies.topRatedMovies
  );
  const upcomingMovies = useSelector(
    (state: any) => state.movies.upcomingMovies
  );

  const shouldShowGPT = useSelector((state: any) => state.GPT.showGpt);

  return (
    <div className="min-h-screen w-full">
      <div className="flex items-center md:h-16 md:justify-between w-full absolute z-30 top-0 pb-2 md:py-2">
        <div className="-mt-2 md:mt-0">
          <Header height={400} width={400} isOpaque={!shouldShowGPT} />
        </div>

        <div className="md:px-2 flex md:gap-4 items-center gap-2 justify-center w-full md:w-fit">
          <LanguageDropDown
            onChange={(e) => {
              dispatch(changeUserLanguage(e.target.value));
            }}
          />
          <div className="">
            <Button
              text={
                !showGpt && userLanguage === "english"
                  ? language.english.gptSearchText
                  : !showGpt && userLanguage === "hindi"
                  ? language.hindi.gptSearchText
                  : !showGpt && userLanguage === "spanish"
                  ? language.spanish.gptSearchText
                  : userLanguage === "english"
                  ? language.english.homePage
                  : userLanguage === "hindi"
                  ? language.hindi.homePage
                  : language.spanish.homePage
              }
              bgColor="bg-purple-800"
              textColor="text-white"
              onClick={() => {
                dispatch(toggleShowGPT());
              }}
              width={showGpt ? "" : "w-fit"}
            />
          </div>
          <Button
            text={
              userLanguage === "english"
                ? language.english.signOutText
                : userLanguage === "hindi"
                ? language.hindi.signOutText
                : language.spanish.signOutText
            }
            onClick={() => {
              localStorage.removeItem("token");
              dispatch(removeUser());
              dispatch(removeNowPlayingMovies());
              dispatch(setOriginaGPTState());
              navigate("/sign-in");
            }}
            textColor="text-white"
          />
        </div>
      </div>
      {shouldShowGPT ? (
        <GptSearchPage />
      ) : movies.length === 0 ||
        popularMovies.length === 0 ||
        topRatedMovies.length === 0 ||
        upcomingMovies.length === 0 ? (
        <div className="w-screen h-screen flex flex-col justify-center items-center">
          <Loader />
        </div>
      ) : (
        <div className="bg-gray-300 min-w-full">
          <MainContainer movies={movies} />
          <SecondaryContainer />
        </div>
      )}
      {/* <div className="min-w-full">
        <MainContainer />
        <SecondaryContainer />
      </div> */}
    </div>
  );
};
