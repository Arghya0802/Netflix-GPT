import { Bottomlink } from "../components/BottomLink";
import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { BG_URL } from "../utils/constants";

export const SignUp = () => {
  return (
    <div
      className="h-screen bg-contain bg-center flex justify-between"
      style={{ backgroundImage: `url(${BG_URL})` }}
    >
      <Header />
      <div className="w-8/12 flex flex-col justify-center">
        <div className="flex flex-col w-4/12 bg-black bg-opacity-65 h-4/6 justify-center rounded-lg px-2">
          <Heading text="Sign Up" textColor="text-white" />
          <InputBox placeholder="John Doe" bgColor="bg-gray-500" />
          <InputBox placeholder="JohnDoe@gmail.com" bgColor="bg-gray-500" />
          <InputBox
            placeholder="Enter your password..."
            type="password"
            bgColor="bg-gray-500"
          />
          <Button text="Sign Up" />
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
