import { GptSearchBar } from "../components/GptSearchBar";
import { BG_URL } from "../utils/constants";

export const GptSearchPage = () => {
  return (
    <div
      className="h-screen w-screen flex flex-col justify-center items-center"
      style={{ backgroundImage: `url(${BG_URL})` }}
    >
      <div className="w-1/2">
        <GptSearchBar />
      </div>
    </div>
  );
};
