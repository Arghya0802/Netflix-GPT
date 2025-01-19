import { useSelector } from "react-redux";

export const BackgroundVideo = () => {
  const id = useSelector((state: any) => state.movies.primaryTrailerId);

  return (
    <div className="w-full top-0 -mt-1">
      <iframe
        className="w-full aspect-video overflow-x-clip"
        src={`https://www.youtube.com/embed/${id}?autoplay=1&mute=1&modestbranding=1&rel=0&controls=1loop=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
      {/* <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div> */}
    </div>
  );
};
