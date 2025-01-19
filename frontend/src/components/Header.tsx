import { LOGO } from "../utils/constants";

export const Header = ({
  width,
  height,
  isOpaque = true,
}: {
  width: number;
  height: number;
  isOpaque?: boolean;
}) => {
  return (
    <div className="">
      <img
        src={LOGO}
        alt="Netflix Logo"
        width={width}
        height={height}
        className={`mx-2 p-4 ${isOpaque ? `` : `bg-black/30`}`}
      />
    </div>
  );
};
