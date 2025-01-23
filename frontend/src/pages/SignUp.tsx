import { useEffect, useRef, useState } from "react";
import { Bottomlink } from "../components/BottomLink";
import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { BG_URL } from "../utils/constants";
import { SignUpFormSchema } from "../utils/InputZodSchema";
import { ErrorMssg } from "../components/ErrorMssg";
import axios from "axios";
// import { BACKEND_URL } from "../utils/config";
import { useNavigate } from "react-router-dom";
import { Loader } from "../components/Loader";

export const SignUp = () => {
  const [errorMssg, setErrorMssg] = useState("");
  const [loading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);

  async function handleFormSubmit(e: React.FormEvent) {
    try {
      e.preventDefault();

      setIsLoading(true);
      const email = emailRef.current?.value;
      const password = passwordRef.current?.value;
      const name = nameRef.current?.value;

      const { success, error } = SignUpFormSchema.safeParse({
        email,
        password,
        name,
      });

      if (emailRef && emailRef.current) emailRef.current.value = "";
      if (passwordRef && passwordRef.current) passwordRef.current.value = "";
      if (nameRef && nameRef.current) nameRef.current.value = "";

      if (!success) {
        setErrorMssg(error.issues[0].message);
        return;
      }

      await axios.post(`${BACKEND_URL}/api/v1/user/sign-up`, {
        name,
        email,
        password,
      });

      navigate("/sign-in");
    } catch (error: any) {
      setIsLoading(false);
      setErrorMssg(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) navigate("/browse");
  }, [navigate]);

  return (
    <div
      className="h-screen bg-cover bg-center flex justify-between"
      style={{ backgroundImage: `url(${BG_URL})` }}
    >
      <Header height={300} width={300} />
      <div className="flex  flex-col items-center justify-between md:w-8/12 w-full md:items-start md:justify-center ">
        <div className="bg-black bg-opacity-65 md:h-4/6 h-1/2 md:w-4/12 w-full rounded-lg flex flex-col px-2 justify-center mr-28 mt-28 md:-mr-10 md:-mt-20">
          <Heading text="Sign Up" textColor="text-white" />
          <form onSubmit={handleFormSubmit}>
            <InputBox
              placeholder="John Doe"
              bgColor="bg-gray-500"
              reference={nameRef}
            />
            <InputBox
              placeholder="JohnDoe@gmail.com"
              bgColor="bg-gray-500"
              reference={emailRef}
            />
            <InputBox
              placeholder="Enter your password..."
              type="password"
              bgColor="bg-gray-500"
              reference={passwordRef}
            />
            {loading ? (
              <div className=" flex justify-center items-center py-4">
                <Loader />
              </div>
            ) : (
              <Button text="Sign Up" type="submit" textColor="text-white" />
            )}
          </form>

          {errorMssg && <ErrorMssg mssg={errorMssg} />}

          <Bottomlink
            text="Already have an account?"
            linkTo="sign-in"
            linkText="Sign In"
            textColor="text-white"
          />
        </div>
      </div>
    </div>
  );
};
