import { GptRecommendedMovies } from "../components/GptRecommendedMovies";
import { GptSearchBar } from "../components/GptSearchBar";
import { BG_URL } from "../utils/constants";

export const GptSearchPage = () => {
  return (
    <div
      className="h-screen w-screen flex flex-col justify-center items-center  md:mt-0 bg-cover overflow-hidden"
      style={{ backgroundImage: `url(${BG_URL})` }}
    >
      <div className="w-1/2 flex justify-center items-center flex-col  px-2 md:py-10 overflow-auto scrollbar-hide">
        <GptSearchBar />
        <GptRecommendedMovies />
      </div>
    </div>
  );
};
