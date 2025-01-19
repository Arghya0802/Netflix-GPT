import { VideoTitle } from "./VideoTitle";
import { BackgroundVideo } from "./BackgroundVideo";
import { useGetMovieTrailer } from "../hooks/useGetPrimaryMovie";

interface movieProps {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export const MainContainer = ({ movies }: { movies: movieProps[] }) => {
  // const ind = Math.floor(Math.random() * movies.length);
  const mainMovie = movies[2];
  console.log("From Main Container");
  console.log(mainMovie);
  console.log(mainMovie.id);

  useGetMovieTrailer({ mainMovie });

  return (
    <div className=" bg-red-300 md:pt-0">
      <div className="bg-green-500">
        <BackgroundVideo />
      </div>

      {/* <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        src={trailerLink}
      /> */}
      <div className="">
        <VideoTitle
          title={mainMovie.original_title}
          overview={mainMovie.overview}
        />
      </div>
    </div>
  );
};
