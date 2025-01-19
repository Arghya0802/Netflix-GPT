import { useEffect, useState } from "react";
import { ErrorMssg } from "../components/ErrorMssg";
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
import { setOriginaGPTState, toggleShowGPT } from "../utils/GptSlice";
import { GptSearchPage } from "./GptSearch";
import { language } from "../utils/langConstants";

export const Browse = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  const [errorMssg, setErrorMssg] = useState("");
  // const [movies, setMovies] = useState([]);

  const name = useSelector((state: any) => state.user.name);
  const email = useSelector((state: any) => state.user.email);
  console.log(name, email);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      setErrorMssg("Invalid Session!!!");
      dispatch(removeNowPlayingMovies());
      navigate("/sign-in");
    }
  }, [navigate]);

  useGetNowPlayingMovies();
  useGetPopularMovies();
  useGetUpcomingMovies();
  useGetTopRatedMovies();

  // useEffect(() => {
  //   () => {
  //     const nowPlayingMovies = useSelector(
  //       (state: any) => state.movie.nowPlayingMovies
  //     );
  //     setMovies(nowPlayingMovies);
  //   };
  // }, []);

  const movies = useSelector((state: any) => state.movies.nowPlayingMovies);
  const popularMovies = useSelector((state: any) => state.movies.popularMovies);
  const topRatedMovies = useSelector(
    (state: any) => state.movies.topRatedMovies
  );
  const upcomingMovies = useSelector(
    (state: any) => state.movies.upcomingMovies
  );

  const shouldShowGPT = useSelector((state: any) => state.GPT.showGpt);
  // const shouldShowGPT = false;
  console.log("From Browse");

  console.log(movies);
  console.log(popularMovies);
  console.log(topRatedMovies);
  console.log(upcomingMovies);

  // @ts-ignore
  // console.log(movies[0].original_title);

  return (
    <div className="min-h-screen">
      <div className="flex items-center h-16 justify-between w-full absolute z-30 top-0 pb-2">
        <div>
          <Header height={200} width={200} isOpaque={!shouldShowGPT} />
        </div>
        {/* <div className="flex flex-col">
          <h1>Name: {name}</h1>
          <h1>Email: {email}</h1>
          {errorMssg && <ErrorMssg mssg={errorMssg} />}
        </div> */}
        <div className="px-2 flex gap-2">
          <div className="">
            <Button
              text={language.hindi.gptSearchText}
              bgColor="bg-purple-800"
              textColor="text-white"
              onClick={() => {
                dispatch(toggleShowGPT());
              }}
            />
          </div>
          <Button
            text={language.hindi.signOutText}
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
      ) : (
        movies.length > 0 &&
        upcomingMovies.length > 0 &&
        popularMovies.length > 0 &&
        topRatedMovies.length > 0 && (
          <div className="bg-gray-300 min-w-full">
            <MainContainer movies={movies} />
            <SecondaryContainer />
          </div>
        )
      )}
      {/* <div className="min-w-full">
        <MainContainer />
        <SecondaryContainer />
      </div> */}
    </div>
  );
};
