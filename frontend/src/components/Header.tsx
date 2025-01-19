import { LOGO } from "../utils/constants";

export const Header = ({
  width,
  height,
}: {
  width: number;
  height: number;
}) => {
  return (
    <div className="">
      <img
        src={LOGO}
        alt="Netflix Logo"
        width={width}
        height={height}
        className="mx-2 p-4 bg-black/30"
      />
    </div>
  );
};
