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

  // useEffect(() => {
  //   () => {
  //     const nowPlayingMovies = useSelector(
  //       (state: any) => state.movie.nowPlayingMovies
  //     );
  //     setMovies(nowPlayingMovies);
  //   };
  // }, []);

  const movies = useSelector((state: any) => state.movies.nowPlayingMovies);

  console.log("From Browse");

  console.log(movies);

  // @ts-ignore
  // console.log(movies[0].original_title);

  return (
    <div className="h-screen">
      <div className="flex items-center h-16 justify-between w-full absolute z-30">
        <div>
          <Header height={200} width={200} />
        </div>
        {/* <div className="flex flex-col">
          <h1>Name: {name}</h1>
          <h1>Email: {email}</h1>
          {errorMssg && <ErrorMssg mssg={errorMssg} />}
        </div> */}
        <div className="px-2 ">
          <Button
            text="Sign Out"
            onClick={() => {
              localStorage.removeItem("token");
              dispatch(removeUser());
              dispatch(removeNowPlayingMovies());
              navigate("/sign-in");
            }}
          />
        </div>
      </div>
      {movies.length > 0 && (
        <div className="bg-gray-300 min-w-full">
          <MainContainer movies={movies} />
          <SecondaryContainer />
        </div>
      )}
    </div>
  );
};
