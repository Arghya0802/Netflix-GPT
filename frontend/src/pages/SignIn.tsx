import { useEffect, useRef, useState } from "react";
import { Bottomlink } from "../components/BottomLink";
import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { BG_URL } from "../utils/constants";
import { SignInFormSchema } from "../utils/InputZodSchema";
import { ErrorMssg } from "../components/ErrorMssg";
import axios from "axios";
// import { BACKEND_URL } from "../utils/config";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { Loader } from "../components/Loader";

export const SignIn = () => {
  const dispatch = useDispatch();

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [errorMssg, setErrorMssg] = useState("");
  const [loading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) navigate("/browse");
  }, [navigate]);

  async function handleFormSubmit(e: React.FormEvent) {
    try {
      e.preventDefault();
      let email = emailRef.current?.value;
      let password = passwordRef.current?.value;

      setIsLoading(true);
      if (emailRef && emailRef.current) emailRef.current.value = "";

      if (passwordRef && passwordRef.current) passwordRef.current.value = "";

      const { success, error } = SignInFormSchema.safeParse({
        email,
        password,
      });

      if (!success) {
        setErrorMssg(error.issues[0].message);
        setIsLoading(false);
        return;
      }

      const res = await axios.post(`${BACKEND_URL}/api/v1/user/sign-in`, {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);

      const newEmail = email === undefined ? null : email;

      dispatch(addUser({ email: newEmail, name: res.data.name }));

      navigate("/browse");
    } catch (error: any) {
      setErrorMssg(error.response.data.message);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div
      className="h-screen bg-cover bg-center w-full flex justify-between"
      style={{ backgroundImage: `url(${BG_URL})` }}
    >
      <div className="flex">
        <Header height={300} width={300} isOpaque={false} />
      </div>
      <div className="flex  flex-col items-center justify-between md:w-8/12 w-full md:items-start md:justify-center ">
        <div className="bg-black bg-opacity-65 md:h-4/6 h-1/2 md:w-4/12 w-full rounded-lg flex flex-col px-2 justify-center mr-28 mt-28 md:-mr-10 md:-mt-20">
          <Heading text="Sign In" textColor="text-white" />
          <form onSubmit={handleFormSubmit}>
            <InputBox
              placeholder="johndoe@email.com"
              bgColor="bg-gray-600"
              reference={emailRef}
            />
            <InputBox
              placeholder="Enter your password..."
              type="password"
              bgColor="bg-gray-600"
              reference={passwordRef}
            />
            {loading ? (
              <div className=" flex justify-center items-center py-4">
                <Loader />
              </div>
            ) : (
              <Button text="Sign In" type="submit" textColor="text-white" />
            )}
          </form>
          {errorMssg && <ErrorMssg mssg={errorMssg} />}
          <Bottomlink
            text="New to Netflix?"
            linkTo="sign-up"
            linkText="Sign Up"
            textColor="text-white"
          />
        </div>
      </div>
    </div>
  );
};
