import { LOGO } from "../utils/constants";

export const Header = () => {
  return (
    <div className="h-screen">
      <img
        src={LOGO}
        alt="Netflix Logo"
        width={300}
        height={300}
        className="bg-black rounded-lg"
      />
    </div>
  );
};
