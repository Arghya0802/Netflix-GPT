import { Browse } from "./Browse";
import { SignIn } from "./SignIn";

export const Home = () => {
  const token = localStorage.getItem("token");

  return token ? <Browse /> : <SignIn />;
};
