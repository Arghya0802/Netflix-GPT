import { useState } from "react";
import { Loader } from "./Loader";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  type?: "submit" | "reset" | "button";
  bgColor?: string;
  textColor?: string;
  width?: string;
  height?: string;
}

export const Button = ({
  text,
  onClick,
  type,
  bgColor,
  textColor,
  width,
  height,
}: ButtonProps) => {
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <button
        onClick={async () => {
          if (!onClick) return;

          try {
            setLoading(true);
            onClick();
          } catch (error) {
            setLoading(false);
          } finally {
            setLoading(false);
          }
        }}
        className={`${bgColor ? `${bgColor}` : `bg-red-600`} ${
          textColor ? `${textColor}` : `text-black`
        } w-full px-4 py-2 ${width} rounded-lg my-3 hover:opacity-75 md:w-full ${height}`}
        type={type}
      >
        {loading === false ? text : <Loader />}
        {/* {loading && <Loader />} */}
      </button>
    </div>
  );
};
