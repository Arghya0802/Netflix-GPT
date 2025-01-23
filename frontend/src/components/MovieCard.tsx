import { useState } from "react";
import { IMG_CDN_URL } from "../utils/config";
import { useSelector } from "react-redux";

export const MovieCard = ({
  posterPath,
  title,
  onClick,
}: {
  posterPath: string;
  title: string;
  onClick: () => void;
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const showGpt = useSelector((state: any) => state.GPT.showGpt);

  return (
    <div className="flex w-48 h-fit flex-shrink-0 cursor-pointer pr-3">
      <img
        src={`${showGpt ? `${IMG_CDN_URL}/${posterPath}` : `${posterPath}`}`}
        alt={title}
        onClick={() => {
          onClick();
        }}
        onLoad={() => setIsLoading(false)}
      />
      {isLoading && (
        <div className="absolute w-6 h-6 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin text-lg"></div>
      )}
    </div>
  );
};
