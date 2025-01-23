import { useState } from "react";
import { IMG_CDN_URL } from "../utils/config";

export const IndivdualMovieCard = ({
  posterPath,
  title,
  onClick,
}: {
  posterPath: string;
  title: string;
  onClick: () => void;
}) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex justify-center items-center flex-col rounded-lg min-h-screen">
      {/* <div className="flex justify-end w-72 text-3xl cursor-pointer">
        <h1>❌</h1>
      </div> */}
      {isLoading && (
        <div className="absolute w-6 h-6 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin text-lg"></div>
      )}
      <img
        src={`${IMG_CDN_URL}/${posterPath}`}
        alt={title}
        className="md:w-auto md:h-screen h-auto w-11/12 rounded-lg md:mb-1"
        onLoad={() => setIsLoading(false)}
      />
      <button
        className="absolute top-4 right-4 text-white bg-red-500 px-3 py-2 rounded"
        onClick={() => onClick()}
        // onClick={() => setSelectedMovie(null)}
      >
        Close
      </button>
    </div>
  );
};
