import { useEffect, useState } from "react";
import { ErrorMssg } from "../components/ErrorMssg";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/userSlice";
import { Header } from "../components/Header";
import { removeNowPlayingMovies } from "../utils/movieSlice";
import { useGetNowPlayingMovies } from "../hooks/useGetNowPlayingMovies";

export const Browse = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  const [errorMssg, setErrorMssg] = useState("");

  const name = useSelector((state: any) => state.user.name);
  const email = useSelector((state: any) => state.user.email);
  console.log(name, email);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      setErrorMssg("Invalid Session!!!");
      navigate("/sign-in");
    }
  }, [navigate]);

  useGetNowPlayingMovies();

  return (
    <div className="flex justify-between">
      <div>
        <Header />
      </div>
      <div className="flex flex-col">
        <h1>Name: {name}</h1>
        <h1>Email: {email}</h1>
        {errorMssg && <ErrorMssg mssg={errorMssg} />}
      </div>
      <div>
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
  );
};
