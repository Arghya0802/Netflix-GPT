import { LOGO } from "../utils/constants";

export const Header = () => {
  return (
    <div className="">
      <img
        src={LOGO}
        alt="Netflix Logo"
        width={300}
        height={300}
        className="mx-2 p-4 bg-black/25"
      />
    </div>
  );
};
