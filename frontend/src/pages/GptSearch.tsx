import { GptRecommendedMovies } from "../components/GptRecommendedMovies";
import { GptSearchBar } from "../components/GptSearchBar";
import { BG_URL } from "../utils/constants";

export const GptSearchPage = () => {
  return (
    <div
      className="h-screen w-screen flex flex-col justify-center items-center -mt-14 md:mt-0"
      style={{ backgroundImage: `url(${BG_URL})` }}
    >
      <div className="md:w-1/2 w-full px-2 md:px-0">
        <GptSearchBar />
        <GptRecommendedMovies />
      </div>
    </div>
  );
};
