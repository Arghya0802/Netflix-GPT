import { Bottomlink } from "../components/BottomLink";
import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { BG_URL } from "../utils/constants";

export const SignIn = () => {
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
          <InputBox placeholder="JohnDoe@gmail.com" bgColor="bg-gray-600" />
          <InputBox
            placeholder="Enter your password..."
            type="password"
            bgColor="bg-gray-600"
          />
          <Button text="Sign In" />
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
