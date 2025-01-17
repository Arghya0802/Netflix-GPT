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
import { BACKEND_URL } from "../utils/config";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
  const [errorMssg, setErrorMssg] = useState("");
  const navigate = useNavigate();

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);

  async function handleFormSubmit(e: React.FormEvent) {
    try {
      e.preventDefault();

      const email = emailRef.current?.value;
      const password = passwordRef.current?.value;
      const name = nameRef.current?.value;

      console.log(email, password, name);

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

      const res = await axios.post(`${BACKEND_URL}/api/v1/user/sign-up`, {
        name,
        email,
        password,
      });
      console.log(res);

      navigate("/sign-in");
    } catch (error: any) {
      // console.log(error.response.data.message);
      setErrorMssg(error.response.data.message);
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
      <div className="w-8/12 flex flex-col justify-center">
        <div className="flex flex-col w-4/12 bg-black bg-opacity-65 h-4/6 justify-center rounded-lg px-2">
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
            <Button text="Sign Up" type="submit" />
          </form>

          {errorMssg && <ErrorMssg mssg={errorMssg} />}

          <Bottomlink
            text="Already have an account?"
            linkTo="/sign-in"
            linkText="Sign In"
            textColor="text-white"
          />
        </div>
      </div>
    </div>
  );
};
