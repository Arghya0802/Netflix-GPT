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
        className={`md:mx-2 md:p-4 ${
          isOpaque ? `` : `bg-black/30`
        } md:w-[${width}] md:h-[${height}] h-24 w-44 pt-4 md:w-full md:h-28  `}
      />
    </div>
  );
};
