import { useRef, useState } from "react";
import { Bottomlink } from "../components/BottomLink";
import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { BG_URL } from "../utils/constants";
import { SignInFormSchema } from "../utils/InputZodSchema";
import { ErrorMssg } from "../components/ErrorMssg";

export const SignIn = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [errorMssg, setErrorMssg] = useState("");

  function handleFormSubmit(e: React.FormEvent) {
    e.preventDefault();
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    console.log(email, password);

    if (emailRef && emailRef.current) emailRef.current.value = "";

    if (passwordRef && passwordRef.current) passwordRef.current.value = "";

    const { success, error } = SignInFormSchema.safeParse({
      email,
      password,
    });

    if (!success) {
      setErrorMssg(error.issues[0].message);
      return;
    }
  }

  return (
    <div
      className="h-screen bg-cover bg-center w-full flex justify-between"
      style={{ backgroundImage: `url(${BG_URL})` }}
    >
      <div className="">
        <Header />
      </div>
      <div className="flex  flex-col justify-center w-8/12">
        <div className="bg-black bg-opacity-65 h-4/6 w-4/12 rounded-lg flex flex-col px-2 justify-center">
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
            <Button text="Sign In" type="submit" />
          </form>
          {errorMssg && <ErrorMssg mssg={errorMssg} />}
          <Bottomlink
            text="New to Netflix?"
            linkTo="/sign-up"
            linkText="Sign Up"
            textColor="text-white"
          />
        </div>
      </div>
    </div>
  );
};