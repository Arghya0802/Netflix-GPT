import { GptRecommendedMovies } from "../components/GptRecommendedMovies";
import { GptSearchBar } from "../components/GptSearchBar";
import { BG_URL } from "../utils/constants";

export const GptSearchPage = () => {
  return (
    <div
      className="w-full h-full flex flex-col justify-center items-center  md:mt-0 bg-cover overflow-hidden"
      style={{ backgroundImage: `url(${BG_URL})` }}
    >
      <div className="md:w-1/2 w-screen px-2 md:py-10  overflow-hidden">
        <GptSearchBar />
        <GptRecommendedMovies />
      </div>
    </div>
  );
};
